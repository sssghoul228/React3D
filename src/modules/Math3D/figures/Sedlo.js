import { Figure, Point, Edge, Polygon } from "../rendering";

export default class Sedlo extends Figure {
    constructor(props = {}) {
        const { p = 3, q = 4, count = 10, color = "#30d5c8", x = 0, y = 0, z = 0 } = props;
        const points = [];
        const edges = [];
        const polygons = [];

        const printPoints = () => {
            for (let i = 0; i < count; i++) {
                for (let j = 0; j < count; j++) {
                    const x1 = i - count / 2;
                    const y1 = j - count / 2;
                    const z1 = ((x1 * x1) / p - (y1 * y1) / q) / 2;
                    points.push(new Point(
                        x1 + x, 
                        z1 + y, 
                        y1 + z));
                }
            }
        }

        const printEdges = () => {
            for (let i = 0; i < points.length; i++) {
                if (points[i + 1]) {
                    if ((i + 1) % count !== 0) {
                        edges.push(new Edge(i, i + 1));
                    }
                }
                if (points[i + count]) {
                    edges.push(new Edge(i, i + count));
                }
            }
        }

        const printPolygons = () => {
            for (let i = 0; i < points.length; i++) {
                if (points[i + 1 + count]) {
                    if ((i + 1) % count !== 0) {
                        polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
                    }
                }
            }
        }

        printPoints();
        printEdges();
        printPolygons();

        super(points, edges, polygons);
    }
}