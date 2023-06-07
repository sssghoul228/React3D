import {Figure, Point, Edge, Polygon} from '../rendering';


class Cylinder extends Figure {
  constructor(props = {}) {
    super(props);
    const { color = '#30d5c8', center, height = 20, count = 10, radius = 10 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    for (let i = -count / 2; i < count / 2; i++) {
      for (let j = 0; j < count; j++) {
        points.push(
          new Point(
            center.x + radius * Math.cos(j * 2 * Math.PI / count),
            center.y + i * height / count,
            center.z + radius * Math.sin(j * 2 * Math.PI / count),
          ),
        );
      }
    }

    for (let i = 0; i < count; i++) {
      const k = i ? i - 1 : i;
      for (let j = 0; j < count - 1; j++) {
        edges.push(new Edge(j + i * count, j + i * count + 1));
        edges.push(new Edge(j + k * count, j + i * count));
      }
      edges.push(new Edge(i ? i * count - 1 : i, count + (i ? i * count - 1 : i)));
      edges.push(new Edge(i * count, (i + 1) * count - 1));
    }

    for (let i = 0; i < count - 1; i++) {
      for (let j = 0; j < count - 1; j++) {
        polygons.push(
          new Polygon(
            [
              j + i * count,
              j + (1 + i) * count,
              j + 1 + (i + 1) * count,
              j + i * count + 1,
            ],
            color,
          ),
        );
      }

      polygons.push(new Polygon([i * count, (i + 1) * count - 1, (i + 2) * count - 1, (i + 1) * count], color));
    }

    super(points, edges, polygons);
  }
}

export default Cylinder;
