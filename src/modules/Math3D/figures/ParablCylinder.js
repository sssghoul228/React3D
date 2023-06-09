import { Figure, Point, Edge, Polygon } from "../rendering";

export default class ParablCylinder extends Figure {
    constructor(props = {}) {
        const { a = 10, b = 10, count = 20, color = "#30d5c8", x = 0, y = 0, z = 0 } = props;
        const points = [];
        const edges = [];
        const polygons = [];

        const printPoints = () => {
            for (let i = -count / 2; i <= count / 2; i++) {
                const l = (Math.PI / count) * i;
                for (let j = 0; j < count; j++) {
                    const s = ((3 * Math.PI) / count) * j;
                    points.push(new Point(
                        b * Math.sinh(l) + x,
                        a * Math.cosh(l) + y,
                        s * 2 + z));
                }
            }
        }

        const printEdges = () => {
            for (let i = 0; i < points.length; i++) {
                if (i + 1 < points.length && (i + 1) % count !== 0) {
                    edges.push(new Edge(i, i + 1));
                }
                if (i + count < points.length && i < count * count) {
                    edges.push(new Edge(i, i + count));
                }
                if (i + count < points.length && i >= count * count + count) {
                    edges.push(new Edge(i, i + count));
                }
            }
        }

        const printPolygons = () => {
            for (let i = 0; i < points.length; i++) {
                if (i + count + 1 < points.length && (i + 1) % count !== 0 && i < count * count) {
                    polygons.push(new Polygon([i, i + 1, count + i + 1, count + i], color));
                }
                if (i + count + 1 < points.length && (i + 1) % count !== 0 && i >= count * count + count) {
                    polygons.push(new Polygon([i, i + 1, count + i + 1, count + i], color));
                }
            }
        }

        printPoints();
        printEdges();
        printPolygons();

        super(points, edges, polygons);
    }
}
