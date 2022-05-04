import React from 'react'

const HeroLine = ({ color }) => {
    return (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }} />
    );
};

export default HeroLine;