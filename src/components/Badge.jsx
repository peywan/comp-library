const Badge = ({color, size, icon, children}) => {
    const styles = {
        backgroundColor: color, // Använd color-prop för bakgrundsfärg
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'white',
        small: '20px'

    }
    return (
        <>
            <div style={styles}>
                {icon && <span className="badge-icon">{icon}</span>}
                {children}
            </div>
        </>
    )
}
export default Badge
