import { Figure, Cube, Cylinder, 
    Elips, Sphere, Cone, 
  Sedlo, ParablCylinder, Tor, 
 HyperCylinder, ElipsParabl, SinglePolosHyper, 
TwoPolosHyper } from "../../../modules/Math3D";

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
            case "Cone":
                return new Cone(settings);
            case "Tor":
                return new Tor(settings);
            case "Sedlo":
                return new Sedlo(settings);
            case "ParablCylinder":
                return new ParablCylinder(settings);
            case "HyperCylinder":
                return new HyperCylinder(settings);
            case "ElipsParabl":
                return new ElipsParabl(settings);
            case "SinglePolosHyper":
                return new SinglePolosHyper(settings);
            case "TwoPolosHyper":
                return new TwoPolosHyper(settings);
            default:
                return new Figure();
        }
    };
};

export default useSetFigure;
