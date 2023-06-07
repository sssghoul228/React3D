import { useState, useCallback } from "react";
import useSetFigure from "./useSetFigure";

import{CubeSettings, CylinderSettings, ElipsSettings, SphereSettings} from './figuresS'


export default function FigureSettings({ setScene }) {
    const [figureName, setFigureName] = useState(null);

    const getFigure = useSetFigure();

    const selectFigureHandler = useCallback(
        (event) => {
            const scene = [getFigure(event.target.value)];
            setScene(scene);
            setFigureName(event.target.value);
        },
        [getFigure, setScene, setFigureName]
    );

    return (
        <div className="selectFigur" id="selectFigur">
            <select id="figures" onChange={selectFigureHandler}>
               <option className="figure" value="Cube">
                    Куб
               </option>
               <option className="figure" value="Cylinder">
                    Цилиндр
               </option>
               <option className="figure" value="Sphere">
                    Сфера
               </option>
               <option className="figure" value="Elips">
                    Элипсоид
               </option>
            </select>
            {figureName === "Cube" ? (
                <CubeSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Cylinder" ? (
                <CylinderSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Sphere" ? (
                <SphereSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Ellipsoid" ? (
                <ElipsSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : (
                <></>
            )}
        </div>
    );
}