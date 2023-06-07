import { Figure, Point, Edge, Polygon } from '../rendering';

class Elips extends Figure {
  constructor(props = {}) {
    super(props);
    const { color = '#30d5c8', center, Ox = 10, Oy = 12, Oz = 15, count = 16 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    const printPoints = () => {
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          points.push(
            new Point(
              center.x + Ox * Math.sin(i * 2 * Math.PI / count) * Math.cos(j * Math.PI / count),
              center.y + Oy * Math.cos(i * 2 * Math.PI / count),
              center.z + Oz * Math.sin(i * 2 * Math.PI / count) * Math.sin(j * (Math.PI / count)),
            ),
          );
        }
      }
    };

    const printEdges = () => {
      for (let i = 0; i < count; i++) {
        const k = i ? i - 1 : i;
        for (let j = 0; j < count - 1; j++) {
          edges.push(new Edge(j + i * count, j + i * count + 1));
          edges.push(new Edge(j + i * count, j + k * count));
        }
        edges.push(new Edge(i * count, points.length - count * k - 1));
        edges.push(new Edge(points.length - i * count - 1, points.length - k * count - 1));
        edges.push(new Edge(0, points.length - i - 1));
      }
    };

    const printPolygons = () => {
      for (let i = 0; i < count - 1; i++) {
        for (let j = 0; j < count - 1; j++) {
          polygons.push(
            new Polygon(
              [
                j + i * count,
                j + 1 + i * count,
                j + 1 + (i + 1) * count,
                j + (i + 1) * count,
              ],
              color,
            ),
          );
        }

        polygons.push(
          new Polygon(
            [
              points.length - i * count - 1,
              points.length - (i ? i - 1 : i) * count - 1,
              i * count,
              (i + 1) * count,
            ],
            color,
          ),
        );

        polygons.push(new Polygon([0, points.length - i - 1, points.length - i - 2], color));
      }

      polygons.push(new Polygon([0, points.length - count, count * 2 - 1], color));
    };

    printPoints();
    printEdges();
    printPolygons();

    super(points, edges, polygons);
  }
}

export default Elips;
