import React, { useState, useEffect } from 'react';

interface odometrType {
    value: number
}

const Odometer = ({ value }:odometrType) => {
    const [displayedValue, setDisplayedValue] = useState(1900);

    useEffect(() => {
        let startValue = displayedValue;
        let endValue:number = value;
        let duration = 1000;
        let startTime:number;

        const animate = (timestamp:number) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const nextValue = Math.floor(startValue + progress * (endValue - startValue));

            setDisplayedValue(nextValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

    }, [value]);

    return <div>{displayedValue}</div>;
};

export default Odometer;