import {Figure, Point, Edge, Polygon} from '../rendering';


class Cylinder extends Figure {
  constructor(props = {}) {
    const { color = '#30d5c8', height = 20, count = 10, radius = 10, x = 0, y = 0, z = 0 } = props;

    const points = [];
    const edges = [];
    const polygons = [];

    for (let i = 0; i < count; i++) {
      const T = ((2 * Math.PI) / count) * i;
      for (let j = -count / 2; j < count / 2; j++) {
          const p = (height / count) * j;

          points.push(new Point(radius * Math.cos(T) + x, p + y, radius * Math.sin(T) + z));
      }
  }

  for (let i = 0; i < points.length; i++) {
    if ((i + 1) % count !== 0 && i + 1 < points.length) {
        edges.push(new Edge(i, i + 1));
    }
    if (i + count < points.length) {
        edges.push(new Edge(i, i + count));
    }
    if (i < count) {
        edges.push(new Edge(i, points.length - count + i));
    }
  } 

  for (let i = 0; i < points.length; i++) {
    if (i + count + 1 < points.length && (i + 1) % count !== 0) {
        polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
    }
    if (i < count - 1) {
        polygons.push(new Polygon([i, i + 1, points.length - count + i + 1, points.length - count + i], color));
    }
  }


    super(points, edges, polygons);
  }
}

export default Cylinder;
