import { Figure, Point, Edge, Polygon } from '../rendering';

class Sphere extends Figure {
  constructor(props = {}) {
    const { radius = 10, count = 16, color = '#30d5c8', x = 0, y = 0, z = 0 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    const printPointsSphere = () => {
      for (let j = 0; j <= count; j++) {
        const T = (Math.PI / count) * j;
        for (let i = 0; i < count; i++) {
            const p = ((2 * Math.PI) / count) * i;
            points.push(new Point(radius * Math.sin(T) * Math.cos(p) + x, radius * Math.cos(T) + y, radius * Math.sin(T) * Math.sin(p) + z));
        }
    }
    };

    const printEdgesSphere = () => {
      for (let i = 0; i < points.length; i++) {
        if (i + +count + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        }
        if ((i + 1) % count === 0) {
            edges.push(new Edge(i, i + 1 - count));
        }
        if (i < points.length - count) {
            edges.push(new Edge(i, i + count));
        }
    }
    };

    const printPolygonsSphere = () => {
        for (let i = 0; i < points.length; i++) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
            } else if (i + count < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
            }
        }
    };

    printPointsSphere();
    printEdgesSphere();
    printPolygonsSphere();

    super(points, edges, polygons);
  }
}

export default Sphere;
