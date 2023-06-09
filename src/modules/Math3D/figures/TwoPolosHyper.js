import { Figure, Point, Edge, Polygon } from "../rendering";

export default class TwoPolosHyper extends Figure {
    constructor(props = {}) {
        const { a = 3, b = 5, c = 5, count = 20, color = "#30d5c8", x = 0, y = 0, z = 0 } = props;
        const points = [];
        const edges = [];
        const polygons = [];

        const printPoints = () => {
            const l = Math.PI * 2 / count;
            for (let i = -Math.PI; i <= Math.PI; i += l) {
                for (let j = 0; j < 2 * Math.PI; j += l) {
                    points.push(new Point(
                        a * Math.cosh(i) * Math.cos(j) + x,
                        c * Math.sinh(i) + y,
                        b * Math.cosh(i) * Math.sin(j) + z
                    ));
                }
            }
            for (let i = 0; i <= Math.PI; i += l) {
                for (let j = 0; j < 2 * Math.PI; j += l) {
                    points.push(new Point(
                        -a * Math.sinh(i) * Math.cos(j) + x, 
                        -c * Math.cosh(i) + y, 
                        -b * Math.cosh(i) * Math.sin(j) + z
                    ));
                }
            }
        }

        const printEdges = () => {
            for (let i = 0; i < points.length / 2; i++) {
                if (i + 1 < points.length && (i + 1) % count !== 0) {
                    edges.push(new Edge(i, i + 1));
                } else if ((i + 1) % count === 0) {
                    edges.push(new Edge(i, i + 1 - count));
                }
                if (i < points.length / 2 - count) {
                    edges.push(new Edge(i, i + count));
                }
            }
            for (let i = points.length / 2 + count; i < points.length; i++) {
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
            for (let i = 0; i < points.length / 2; i++) {
                if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
                } else if (i + count < points.length && (i + 1) % count === 0) {
                    polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
                }
            }
            for (let i = 0; i < points.length / 2 - count; i++) {
                if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
                } else if (i + count < points.length && (i + 1) % count === 0) {
                    polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
                }
            }
        }

        printPoints();
        printEdges();
        printPolygons();

        super(points, edges, polygons);
    }
}