import { useState, useEffect } from 'react';

const NumberPad = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const screenPassword = '123456'

    const [pressedNumber, setPressedNumber] = useState<number[]>([]);
    const [error, setError] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

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
    }

    return (
        <>
            {
                isCorrect ? (
                    <div className="error-msg" style={{ textAlign: 'center', color: 'whitesmoke', fontSize: '2em' }}>
                        {error}
                    </div>
                ) : <div className="grid-wrapper">
                    {JSON.stringify(pressedNumber)}

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
                    <div className="error-msg"
                        style={{
                            textAlign: 'center',
                            color: 'whitesmoke',
                            fontSize: '2em',
                            marginTop: ''
                        }}>
                        {error}
                    </div>
                    <button className='del-btn'
                        style={{
                            marginTop: '100px',
                            background: 'none',
                            position: 'relative',
                            right: '454px',
                            bottom: '100px'
                        }}
                        onClick={deleteNum}>Delete</button>
                    <button className="clr-btn" style={{
                        background: 'none',
                        position: 'absolute',
                        top: '500px',
                        left: '614px'
                    }} onClick={clearScreen}>
                        Clear
                    </button>
                </div>
            }
        </>
    );
};

export default NumberPad