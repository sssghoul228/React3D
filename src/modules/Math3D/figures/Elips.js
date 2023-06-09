import { Figure, Point, Edge, Polygon } from '../rendering';

class Elips extends Figure {
  constructor(props = {}) {
    const { color = '#30d5c8', a = 10, b = 12, c = 15, count = 16, x = 0, y = 0, z = 0 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    const printPoints = () => {
      for (let i = 0; i <= count; i++) {
        const T = ((2 * Math.PI) / count) * i;
        for (let j = 0; j < count; j++) {
            const p = ((2 * Math.PI) / count) * j;
            points.push(new Point(a * Math.sin(T) * Math.cos(p) + x, c * Math.cos(T) + y, b * Math.sin(T) * Math.sin(p) + z));
        }
    }
    };

    const printEdges = () => {
      for (let i = 0; i < points.length; i++) {
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(i, i + 1 - count));
        }
        if (i < points.length - count) {
            edges.push(new Edge(i, i + count));
        }
      }
    };

    const printPolygons = () => {
      for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color));
        }
    }
    };

    printPoints();
    printEdges();
    printPolygons();

    super(points, edges, polygons);
  }
}

export default Elips;
