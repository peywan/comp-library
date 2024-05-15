const Buttons = ({size, color, disabled, children}) => {
    const style = {
        fontSize: size === 'large' ? '24px' : '16px',
        backgroundColor: color,
        color: "white",
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        opacity: disabled ? 0.5 : 1,
    };

    return (
        <>
            <button style={style} disabled={disabled}>
                {children}
            </button>
        </>
    )
}
export default Buttons
