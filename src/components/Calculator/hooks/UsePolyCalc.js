import Calculator, { PolynominalCalculator } from "../../../modules/Calculator";

export default function UsePolyCalculator(refPolyA, refPolyB, refPolyC, refPolyD) {
    const calc = new Calculator();
    const calcPoly = new PolynominalCalculator();

    return (operand) => {
        if (refPolyA && refPolyB && refPolyC && refPolyD) {
            if (operand === "point") {
                const A = refPolyC.current.value;
                const C = refPolyC.current.value;
                refPolyD.current.value = calcPoly.getPolynominal(A)
                    .getValue(calc.getEntity(C)).toString();
            } else {
                const A = refPolyA.current.value;
                const B = refPolyB.current.value;
                refPolyD.current.value = calcPoly[operand](
                    calcPoly.getPolynominal(A),
                    calcPoly.getPolynominal(B)
                ).toString();
            }
        }
    };
}
