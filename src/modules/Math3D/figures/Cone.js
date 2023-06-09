import { Figure, Point, Edge, Polygon } from "../rendering";

export default class Cone extends Figure {
    constructor(props = {}) {
        const { radius = 2, count = 8, color = "#30d5c8", x = 0, y = 0, z = 0 } = props;
        const points = [];
        const edges = [];
        const polygons = [];
        
        const printPoints = () => {
            for (let i = -count; i <= count; i++) {
                for (let j = 0; j < count; j++) {
                    points.push(new Point(
                        radius * ((2 * Math.PI) / count) * i * Math.cos(((2 * Math.PI) / count) * j) + x,
                        radius * ((2 * Math.PI) / count) * i + y,
                        Math.sin(((2 * Math.PI) / count) * j) * radius * ((2 * Math.PI) / count) * i + z));
                }
            }
        }

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
        }

        const printPolygons = () => {
            for (let i = 0; i < points.length; i++) {
                if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
                } else if (i + count < points.length && (i + 1) % count === 0) {
                    polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color));
                }
            }
        }

        printPoints();
        printEdges();
        printPolygons();
        super(points, edges, polygons);
    }
}
