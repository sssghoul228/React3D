import { Figure, Point, Edge, Polygon } from '../rendering';

class Cube extends Figure {
  constructor(props = {}) {
    const {color = '#30d5c8', x = 0, y = 0, z = 0} = props;
    const points = [
        new Point(5 + x, 5 + y, 5 + z), //справа сверху
        new Point(-5 + x, 5 + y, 5 + z), //слева сверху
        new Point(-5 + x, -5 + y, 5 + z), //слева снизу
        new Point(5 + x, -5 + y, 5 + z), //справа снизу
        new Point(-5 + x, -5 + y, -5 + z), //2слева снизу
        new Point(5 + x, -5 + y, -5 + z), //2справа снизу 
        new Point(5 + x, 5 + y, -5 + z), //2справа сверху
        new Point(-5 + x, 5 + y, -5 + z) //2слева сверху
    ];
    const edges = [
      new Edge(0, 1),
      new Edge(1, 2),
      new Edge(2, 3),
      new Edge(3, 0),
      new Edge(4, 5),
      new Edge(5, 6),
      new Edge(6, 7),
      new Edge(7, 4),
      new Edge(0, 6),
      new Edge(1, 7),
      new Edge(2, 4),
      new Edge(3, 5),
    ];
    const polygons = [
      new Polygon([0, 1, 2, 3], color),
      new Polygon([2, 3, 5, 4], color),
      new Polygon([5, 4, 7, 6], color),
      new Polygon([7, 6, 0, 1], color),
      new Polygon([0, 6, 5, 3], color),
      new Polygon([1, 7, 4, 2], color),
    ];

    super(points, edges, polygons);
  }

}

export default Cube;
