import Point from './Point';

export default class Figure{
    constructor(
        points = [],
        edges = [],
        polygons = [],
        color = '#30d5c8',
        center = new Point()
    ){
        this.points = points;
        this.edges = edges;
        this.polygons = polygons;
        this.color = color;
        this.center = center;
    }
}