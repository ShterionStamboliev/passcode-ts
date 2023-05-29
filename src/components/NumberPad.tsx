import { useState, useEffect } from 'react';

const NumberPad = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const screenPassword = '1337'

    const [pressedNumber, setPressedNumber] = useState<number[]>([]);
    const [error, setError] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    useEffect(() => {
        if (pressedNumber.length === 1) {
            setError('');
        } else if (pressedNumber.length === 4) {
            if (pressedNumber.join('') === screenPassword) {
                setIsCorrect(true);
                setError('Welcome');
            } else {
                setError('Incorrect passcode');
                setPressedNumber([]);
            }
        }
    }, [pressedNumber]);

    return (
        <>
            {
            isCorrect ? (
                <div className="error-msg">
                    {error}
                </div>
            ) : <div className="grid-wrapper">

                <div className="numpad">
                    {numbers.map((number, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setPressedNumber((current) => [...current, number])
                            }}>
                            {number}
                        </button>
                    ))}
                </div>
                <div className="error-msg">
                    {error}
                </div>
            </div>
            }
        </>
    );
};

export default NumberPad