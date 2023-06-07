import { Figure, Cube, Cylinder, Elips, Sphere } from "../../../modules/Math3D";

const useSetFigure = () => {
    return (name, settings) => {
        switch (name) {
            case "Cube":
                return new Cube(settings);
            case "Sphere":
                return new Sphere(settings);
            case "Cylinder":
                return new Cylinder(settings);
            case "Elips":
                return new Elips(settings);
            default:
                return new Figure();
        }
    };
};

export default useSetFigure;
