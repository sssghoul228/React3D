import { useEffect } from "react";
import Math3D, { Point, Light, Cube } from "../../modules/Math3D";
import useCanvas from "../../modules/Canvas/useCanvas";
import FigureSettings from "./FigureSettings/FigureSettings";
import UI3D from "./UI3D/UI3D";

import './Graph3D.css';


export default function Graph3D() {
  const Canvas = useCanvas(renderScene);
  let canvas = null;
  const WIN = {
      LEFT: -5,
      BOTTOM: -5,
      WIDTH: 10,
      HEIGHT: 10,
      FOCUS: new Point(0, 0, 30),
      CAMERA: new Point(0, 0, 40),
  };
  let canRotate = false;
  const LIGHT = new Light(-30, 30, 10, 30000);
  let scene = [new Cube(), new Cube("#30d5c8", -15, 12, -7)];

  let pointsCheckbox = true;
  let edgesCheckbox = true;
  let polygonsCheckbox = true;

  const math3D = new Math3D({ WIN });

  const setScene = (_scene) => {
      scene = _scene;
  };

  const showHidePoints = (value) => {
      pointsCheckbox = value;
  };

  const showHideEdges = (value) => {
      edgesCheckbox = value;
  };

  const showHidePolygons = (value) => {
      polygonsCheckbox = value;
  };

  function wheel(event) {
      const delta = event.wheelDelta > 0 ? 1 : -1;
      WIN.CAMERA.z += delta;
      WIN.FOCUS.z += delta;
  }

  function mouseUp() {
      canRotate = false;
  }

  function mouseDown() {
      canRotate = true;
  }

  function mouseMove(event) {
      if (canRotate) {
          scene.forEach((figure) =>
              figure.points.forEach((point) => {
                  const { movementX, movementY } = event;
                  math3D.transformPoint(math3D.rotateOy(-movementX / 200), point);
                  math3D.transformPoint(math3D.rotateOx(movementY / 200), point);
              })
          );
      }
  }

  function mouseLeave() {
    canRotate = false;
    }

  function renderScene(FPS) {
      if (!canvas) return;
      canvas.clear3D();
      if (polygonsCheckbox) {
          const polygons = [];
          scene.forEach((figure, index) => {
              math3D.calcCenters(figure);
              math3D.calcRadius(figure);
              math3D.calcDistance(figure, WIN.CAMERA, "distance");
              math3D.calcDistance(figure, LIGHT, "lumen");
              figure.polygons.forEach((polygon) => {
                  polygon.figureIndex = index;
                  polygons.push(polygon);
              });
          });
          math3D.SortByArtistAlgoritm(polygons);
          polygons.forEach((polygon) => {
              const figure = scene[polygon.figureIndex];
              const points = [
                  figure.points[polygon.points[0]],
                  figure.points[polygon.points[1]],
                  figure.points[polygon.points[2]],
                  figure.points[polygon.points[3]],
              ];
              let { r, g, b } = polygon.color;
              const { isShadow, dark } = math3D.calcShadow(polygon, scene, LIGHT);
              let lumen = math3D.calcIllumination(polygon.lumen, LIGHT.lumen * (isShadow ? dark : 1));
              r = Math.round(r * lumen);
              g = Math.round(g * lumen);
              b = Math.round(b * lumen);
              canvas.polygon(
                  points.map((point) => {
                      return {
                          x: math3D.xs(point),
                          y: math3D.ys(point),
                      };
                  }),
                  polygon.rgbToHex(r, g, b)
              );
          });
      }
      if (edgesCheckbox) {
          scene.forEach((figure) =>
              figure.edges.forEach((edge) => {
                  const point1 = figure.points[edge.p1];
                  const point2 = figure.points[edge.p2];
                  canvas.line(math3D.xs(point1), math3D.ys(point1), math3D.xs(point2), math3D.ys(point2));
              })
          );
      }
      if (pointsCheckbox) {
          scene.forEach((figure) =>
              figure.points.forEach((point) => {
                  canvas.point(math3D.xs(point), math3D.ys(point));
              })
          );
      }
      canvas.printText(`FPS:${FPS}`, -4, 4);
  }

  useEffect(() => {
      canvas = Canvas({
          WIN,
          id: "canvas3D",
          width: 600,
          height: 600,
          callbacks: {
              wheel,
              mouseMove,
              mouseUp,
              mouseDown,
              mouseLeave
          },
      });

      // return () => {
      //     clearInterval(interval);
      //     canvas = null;
      // };
  });

  return (
      <div className="canvas3DContain">
          <div className="canvas3D">
              <UI3D showHidePoints={showHidePoints} showHideEdges={showHideEdges} showHidePolygons={showHidePolygons} />
              <canvas id="canvas3D"></canvas>
          </div>
          <FigureSettings
              setScene={setScene}
          />
      </div>
  );
}

