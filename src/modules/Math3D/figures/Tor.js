import { Figure, Point, Edge, Polygon } from '../rendering';

class Tor extends Figure {
  constructor(props = {}) {
    const { color = '#30d5c8', outRadius = 10, radius = 5, count = 20, x = 0, y = 0, z = 0 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    const printPoints = () => {
        for (let i = 0; i < count; i++) {
            const l = ((2 * Math.PI) / count) * i;
            for (let j = 0; j < count; j++) {
                const s = ((2 * Math.PI) / count) * j;
                points.push(new Point((outRadius + radius * Math.cos(l)) * Math.cos(s) + x, 
                radius * Math.sin(l) + y, 
                (outRadius + radius * Math.cos(l)) * Math.sin(s) + z));
            }
        }
    };

    const printEdges = () => {
        for (let i = 0; i < points.length; i++) {
            if ((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
            if (points[i + count]) {
                edges.push(new Edge(i, i + count));
            } else {
                edges.push(new Edge(i, count - (points.length - i)));
            }
        }
    };

    const printPolygons = () => {
        for (let i = 0; i < points.length; i++) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
            }
            if (i + count < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color));
            }
            if (!points[i + count] && i + 1 < points.length) {
                polygons.push(new Polygon([i, i + 1, count - (points.length - i) + 1, count - (points.length - i)], color));
            }
            polygons.push(new Polygon([19, 0, 380, 399], color));
        }
    };

    printPoints();
    printEdges();
    printPolygons();

    super(points, edges, polygons);
  }
}

export default Tor;
