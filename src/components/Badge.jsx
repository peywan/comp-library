const Badge = ({color, size, icon, children, count}) => {
    const sizeMapping = {
        small: { fontSize: '12px', padding: '5px 10px' },
        medium: { fontSize: '14px', padding: '7px 12px' },
        large: { fontSize: '16px', padding: '10px 15px', }
    };

    const styles = {
        backgroundColor: color,
        padding: sizeMapping[size]?.padding,
        borderRadius: '12px', // Ändra border-radius till en rundad form
        display: 'inline-flex', // Ändra till inline-flex för att minska bredden
        alignItems: 'center',
        gap: '5px',
        color: 'white',
        fontSize: sizeMapping[size]?.fontSize,
        maxWidth: 'fit-content',
    }
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

    }
    return (
        <>
            <div style={styles}>
                {icon && <span className="badge-icon">{icon}</span>}
                {children}
                {count !== undefined && <span>{count}</span>}
            </div>
        </>
    )
}
export default Badge
