import { useState, useEffect } from 'react';

const NumberPad = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const dots = ['o', 'o', 'o', 'o', 'o', 'o'];
    const screenPassword = '123456';

    const [pressedNumber, setPressedNumber] = useState<number[]>([]);
    const [error, setError] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [borderColor, setBorderColor] = useState<string>('white');
    

    useEffect(() => {
        if (pressedNumber.length === 1) {
            setError('');
        } else if (pressedNumber.length === screenPassword.length) {
            if (pressedNumber.join('') === screenPassword) {
                setIsCorrect(true);
                setError('Welcome');
            } else {
                setError('Incorrect passcode');
                setPressedNumber([]);
            }
        };
    }, [pressedNumber]);

    const deleteNum = () => {
        setPressedNumber((prev) => (prev.slice(0, -1)));
    };

    const clearScreen = () => {
        setPressedNumber((prev) => (prev.slice(0, setPressedNumber.length - 1)));
    };

    const handleColorChange = () => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            setBorderColor(randomColor);
    };

    return (
        <>
            {
                isCorrect ? (
                    <div className="error-msg" style={{ textAlign: 'center', color: 'whitesmoke', fontSize: '2em' }}>
                        {error}
                    </div>
                ) : <div className="grid-wrapper">
                    <div className="dots" style={{ color: `${borderColor}` }}>
                        {dots.map((dot, i) => (
                            <div key={i}>{dot}</div>
                        ))}
                    </div>
                    <div className="numpad">
                        {numbers.map((number, i) => (
                            <button
                                className={number === 0 ? 'zero' : ''}
                                key={i}
                                onClick={() => {
                                    setPressedNumber((current) => [...current, number])
                                }}>
                                {number}
                            </button>
                        ))}
                    </div>

                    <div className="btns">
                        <button className='del-btn'
                            style={{
                                background: 'none',
                                bottom: '90px',
                                left: '80px',
                            }}
                            onClick={deleteNum}>Delete</button>
                        <button className="clr-btn"
                            style={{
                                marginLeft: '110px',
                                background: 'none',
                                bottom: '113px',
                                right: '83px'
                            }}
                            onClick={clearScreen}>Clear</button>
                    </div>
                    <div className="error-msg"
                        style={{
                            textAlign: 'center',
                            color: 'red',
                            fontSize: '2em',
                            position: 'relative',
                            marginTop: '20px'
                        }}>
                        {error}
                    </div>
                </div>

            }
        </>
    );
};

export default NumberPad