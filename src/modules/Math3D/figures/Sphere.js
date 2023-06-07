import { Figure, Point, Edge, Polygon } from '../rendering';

class Sphere extends Figure {
  constructor(props = {}) {
    const { radius = 10, count = 16, color = '#30d5c8', x = 0, y = 0, z = 0 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    const printPointsSphere = () => {
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          points.push(
            new Point(
              radius * Math.sin(i * 2 * Math.PI / count) * Math.cos(j * Math.PI / count) + x,
              radius * Math.cos(i * 2 * Math.PI / count) + y,
              radius * Math.sin(i * 2 * Math.PI / count) * Math.sin(j * Math.PI / count) + z,
            ),
          );
        }
      }
    };

    const printEdgesSphere = () => {
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

    const printPolygonsSphere = () => {
      for (let i = 0; i < count - 1; i++) {
        for (let j = 0; j < count - 1; j++) {
          polygons.push(new Polygon([
            j + i * count,
            j + 1 + i * count,
            j + 1 + (i + 1) * count,
            j + (i + 1) * count,
          ], color));
        }

        polygons.push(new Polygon([
          points.length - i * count - 1,
          points.length - (i ? (i - 1) : i) * count - 1,
          i * count,
          (i + 1) * count,
        ], color));

        polygons.push(new Polygon([
          0,
          points.length - i - 1,
          points.length - i - 2,
        ], color))
      }

      polygons.push(new Polygon([
        0,
        points.length - count,
        count * 2 - 1,
      ], color))
    };

    printPointsSphere();
    printEdgesSphere();
    printPolygonsSphere();

    super(points, edges, polygons);
  }
}

export default Sphere;
