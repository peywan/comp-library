const Alert = ({color, icon: Icon, children}) => {
    const styles = {
        backgroundColor: color, // Använd color-prop för bakgrundsfärg
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'black',
    }
    return (
        <div style={styles}>
            {/* Visa ikonen om den finns */}
            {Icon && <Icon/>}
            {/* Visa children som varningstext */}
            {children}
        </div>
    )
}
export default Alert
