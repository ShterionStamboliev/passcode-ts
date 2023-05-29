import React, { useState, useEffect } from 'react';

const NumberPad = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const screenPassword = '1337'

    const [pressedNumber, setPressedNumber] = useState<number[]>([]);

    useEffect(() => {
        if (pressedNumber.length === 4) {
            if (pressedNumber.join('') === screenPassword) {
                console.log('correct');
            } else {
                console.log('try again');
                setPressedNumber([]);
            }
        }
    }, [pressedNumber]);

    return (
        <div className="grid-wrapper">
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