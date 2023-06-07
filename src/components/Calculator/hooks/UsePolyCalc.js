import Calculator, { PolynominalCalculator } from "../../../modules/Calculator";

export default function UsePolyCalculator(refA, refB, refX, refC) {
    const calc = new Calculator();
    const calcPoly = new PolynominalCalculator();

    return (operand) => {
        if (refA && refB && refX && refC) {
            if (operand === "point") {
                const A = refA.current.value;
                const C = refX.current.value;
                refC.current.value = calcPoly.getPolynominal(A)
                    .getValue(calc.getEntity(C)).toString();
            } else {
                const A = refA.current.value;
                const B = refB.current.value;
                refC.current.value = calcPoly[operand](
                    calcPoly.getPolynominal(A),
                    calcPoly.getPolynominal(B)
                ).toString();
            }
        }
    };
}
