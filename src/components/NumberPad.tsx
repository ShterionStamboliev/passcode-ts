import React, { useState, useEffect } from 'react';

const NumberPad = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const screenPassword = '1337'

    const [pressedNumber, setPressedNumber] = useState<number[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (pressedNumber.length === 4) {
            if (pressedNumber.join('') === screenPassword) {
                setError('Welcome');
            } else {
                setError('Incorrect passcode');
                setPressedNumber([]);
            }
        }
    }, [pressedNumber]);

    return (
        <div className="grid-wrapper">
            <p>{error}</p>
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
        </div>
    );
};

export default NumberPad