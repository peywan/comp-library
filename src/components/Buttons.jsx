const Buttons = (size, color, disabled, children) => {
    const style = {
        fontSize: size === '20px' ? size : size,
        backgroundColor: color,
        color: "white",
        cursor: "pointer",
    }
    return (
        <div className="App">
            <button disabled={disabled}>
                {children}
            </button>
        </div>
    )
}
export default Buttons
