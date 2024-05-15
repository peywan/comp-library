const Button = ({ size, color, disabled, children }) => {
    const style = {
        fontSize: size === 'large' ? '24px' : '16px',
        backgroundColor: color,
        opacity: disabled ? 0.5 : 1,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
    };

    return (
        <button style={style} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
