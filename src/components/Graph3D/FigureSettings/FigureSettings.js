import { useState, useCallback } from "react";
import useSetFigure from "./useSetFigure";

import{CubeSettings, CylinderSettings, ElipsSettings, SphereSettings,
ConeSettings, TorSettings, SedloSettings, ParablCylinderSettings, 
HyperCylinderSettings, ElipsParablSettings, SinglePolosHyperSettings, TwoPolosHyperSettings} from './figuresS'


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
               <option className="figure" value="Cone">
                    Конус
               </option>
               <option className="figure" value="Tor">
                    Тор
               </option>
               <option className="figure" value="Sedlo">
                    Гиперболический параболоид "Седло"
               </option>
               <option className="figure" value="ParablCylinder">
                    Параболический цилиндр
               </option>
               <option className="figure" value="HyperCylinder">
                    Гиперболический цилиндр
               </option>
               <option className="figure" value="ElipsParabl">
                    Эллиптический параболоид
               </option>
               <option className="figure" value="SinglePolosHyper">
                    Однополостной гиперболоид
               </option>
               <option className="figure" value="TwoPolosHyper">
                    Двуполостной гиперболоид
               </option>
            </select>
            {figureName === "Cube" ? (
                <CubeSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Cylinder" ? (
                <CylinderSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Sphere" ? (
                <SphereSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Elips" ? (
                <ElipsSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Cone" ? (
                <ConeSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "Tor" ? (
                <TorSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ): figureName === "Sedlo" ? (
                <SedloSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "ParablCylinder" ? (
                <ParablCylinderSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "HyperCylinder" ? (
                <HyperCylinderSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "ElipsParabl" ? (
                <ElipsParablSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "SinglePolosHyper" ? (
                <SinglePolosHyperSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : figureName === "TwoPolosHyper" ? (
                <TwoPolosHyperSettings getFigure={getFigure} figureName={figureName} setScene={setScene} />
            ) : (
                <></>
            )}
        </div>
    );
}