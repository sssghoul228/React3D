import { useRef } from "react";

import useCalculator from "./hooks/UseCalculator";
import usePolyCalculator from "./hooks/UsePolyCalc";

import "./Calc.css";

const Calculator = () => {
    const refA = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);
    const refPolyA = useRef(null);
    const refPolyB = useRef(null);
    const refPolyC = useRef(null);
    const refPolyD = useRef(null);
    const calc = useCalculator(refA, refB, refC);
    const calcPoly = usePolyCalculator(refPolyA, refPolyB, refPolyC, refPolyD);

    return (
        <div className="Calc">
            <div className="Calcul">
                <h1 className="CalcText">Калькулятор</h1>
                <div className="Calculator">
                    <textarea ref={refA} className="calc-a" placeholder="Первое число" />
                    <textarea ref={refB} className="calc-b" placeholder="Второе число" />
                </div>
                <div className="Calculator-operand">
                    <button className="operand" onClick={() => calc("add")}>+</button>
                    <button className="operand" onClick={() => calc("sub")}>-</button>
                    <button className="operand" onClick={() => calc("mult")}>
                        &times;
                    </button>
                    <button className="operand" onClick={() => calc("div")}>
                        &#247;
                    </button>
                    <button className="operand" onClick={() => calc("prod")}>*</button>
                    <button className="operand" onClick={() => calc("pow")}>^</button>
                    <button className="operand" onClick={() => calc("one")}>1</button>
                    <button className="operand" onClick={() => calc("zero")}>0</button>
                </div>
                <textarea ref={refC} className="calc-d" placeholder="Ответ" />
            </div>
            <div className="Poly">
            <h1 className="PolyText">Полиномы</h1>
                <div>
                    <textarea ref={refPolyA} className="polya" placeholder="Первый полином"></textarea>
                    <textarea ref={refPolyB} className="polyb" placeholder="Второй полином"></textarea>
                    <textarea ref={refPolyC} type="polyx" className="polyx" placeholder="Значение x"></textarea>
                </div>
                <div className="Poly-operand">
                    <button className="polyOperand" onClick={() => calcPoly("add")}>
                        +
                    </button>
                    <button className="polyOperand" onClick={() => calcPoly("sub")}>
                        -
                    </button>
                    <button className="polyOperand" onClick={() => calcPoly("mult")}>
                        &times;
                    </button>
                </div>
                <textarea ref={refPolyD} className="polyc" placeholder="Ответ"></textarea>
                <div>
                    <button className="polyResult" onClick={() => calcPoly("point")}>
                        значение в ∙
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;