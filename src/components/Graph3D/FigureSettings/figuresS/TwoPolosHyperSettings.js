import { useRef } from "react";
export default function TwoPolosHyperSettings({ getFigure, figureName, setScene }) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const refAnim = useRef(null);

    const onChange = () => {
        const color = ref1.current.value;
        const x = ref2.current.value - 0;
        const y = ref3.current.value - 0;
        const z = ref4.current.value - 0;

        const a = ref5.current.value - 0;
        const b = ref6.current.value - 0;
        const c = ref7.current.value - 0;
        const count = ref8.current.value - 0;
        const animations = refAnim.current.value;

        if (color) {
            setScene([getFigure(figureName, { a, b, c, count, color, animations, x, y, z })]);
        }
    };

    return (
        <div className="Settings">
            <span>Коэффициент а: </span>
            <input ref={ref5} onChange={onChange} defaultValue={10} />
            <br></br>
            <span>Коэффициент b: </span>
            <input ref={ref6} onChange={onChange} defaultValue={10} />
            <br></br>
            <span>Коэффициент c: </span>
            <input ref={ref7} onChange={onChange} defaultValue={10} />
            <br></br>
            <span>Плотность точек: </span>
            <input ref={ref8} onChange={onChange} defaultValue={20} />
            <br></br>
            <span>Анимации</span>
            <input ref={refAnim} onChange={onChange}/>
            <br></br>
            <span>Выбор цвета: </span>
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
