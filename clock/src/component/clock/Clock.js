import React, { useState } from 'react';

const Clock = () => {
    const [TimeData, setTimeData] = useState(new Date());

    setInterval(() => {
        setTimeData(new Date());
    }, 1000);
    return (
        <>
            <div className="clock">
                <p className="time">{TimeData.toLocaleTimeString() }</p>
            </div>
        </>
    );
};

export default Clock;
