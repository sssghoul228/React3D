import { useRef } from "react";
export default function CubeSettings({ getFigure, figureName, setScene }) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);


    const onChange = () => {
        const color = ref1.current.value;
        const x = ref2.current.value - 0;
        const y = ref3.current.value - 0;
        const z = ref4.current.value - 0;
        
        if (color) {
            setScene([getFigure(figureName, { color, x, y, z })]);
        }
    };

    return (
        <div>
            <span>Выбор цвета</span>
            <input ref={ref1} type="color" onChange={onChange} />
            <br></br>
            <span>Координата x: </span>
            <input ref={ref2} onChange={onChange} />
            <br></br>
            <span>Координата y: </span>
            <input ref={ref3} onChange={onChange} />
            <br></br>
            <span>Координата z: </span>
            <input ref={ref4} onChange={onChange} />
        </div>
    );
}
