import { useState } from "react";


const Buttons = () => {

    const [input1, setInput1] = useState("");

    const [input2, setInput2] = useState("");

    const [result, setResult] = useState("");

    return (
        <div className="calc">

            <input placeholder="input 1" type="text" onChange={(event) => {
                setInput1(event.target.value);
            }} />

            <input placeholder="input 2" type="text" onChange={(event) => {
                setInput2(event.target.value);
            }} />

            <div className="result">{Number(result).toFixed(2)}</div>

            <div className="btn">

                <button onClick={() => {
                    if (input1 !== '' && input2 !== '') {
                        setResult(Number(input1) + Number(input2));
                    } else {
                        setResult("Введите числа!");
                    }
                }}>+</button>

                <button onClick={() => {
                    if (input1 !== '' && input2 !== '') {
                        setResult(Number(input1) - Number(input2));
                    } else {
                        setResult("Введите числа!");
                    }
                }}>-</button>

                <button onClick={() => {
                    if (input1 !== '' && input2 !== '') {
                        if (Number(input2) !== 0) {
                            setResult(Number(input1) / Number(input2));
                        } else {
                            setResult("На ноль делить нельзя!");
                        }
                    } else {
                        setResult("Введите числа!");
                    }

                }}>/</button>

                <button onClick={() => {
                    if (input1 !== '' && input2 !== '') {
                        setResult(Number(input1) * Number(input2));
                    } else {
                        setResult("Введите числа!");
                    }
                }}>*</button>

                <button onClick={() => {
                    if (input1 !== '' && input2 !== '') {
                        setResult(Number(input1) ** Number(input2));
                    } else {
                        setResult("Введите числа!");
                    }
                }}>x<sup>2</sup></button>

                <button onClick={() => {
                    if (input1 !== '' && input2 !== '') {
                        setResult(Number(input1) ** (1 / Number(input2)));
                    } else {
                        setResult("Введите числа!");
                    }
                }}>√</button>
            </div>
        </div>
    );
}

export default Buttons;
