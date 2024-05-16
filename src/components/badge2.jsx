// Importera nödvändiga moduler
import React from 'react';

// Definiera Badge-komponenten
const Badge = ({ color, icon: Icon, count }) => {
    // Definiera stilar för badgen
    const badgeStyle = {
        backgroundColor: color,
        borderRadius: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '10px',
        color: 'white',
        fontSize: '14px',
    };

    // Definiera stilar för bubblan
    const bubbleStyle = {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        backgroundColor: 'red',
        borderRadius: '50%',
        padding: '5px',
        color: 'white',
        fontSize: '12px',
        minWidth: '20px',
        textAlign: 'center',
    };

    return (
        <div style={badgeStyle}>
            {Icon && <Icon />}
            {count !== undefined && <div style={bubbleStyle}>{count}</div>}
        </div>
    );
};

// Exportera Badge-komponenten
export default Badge;
