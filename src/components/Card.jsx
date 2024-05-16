const Card = (color, size, children, icon) => {
    const sizeMapping = {
        small: { fontSize: '12px', padding: '5px 10px' },
        medium: { fontSize: '14px', padding: '7px 12px' },
        large: { fontSize: '16px', padding: '10px 15px', }
    }
    const style = {
        width: '320px',
        color: 'grey',
        fontsize: '30px',
        padding: sizeMapping[size]?.padding,
        borderRadius: sizeMapping[size]?.borderRadius,
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid black',
        boxShadow: '5px 5px 50px black',
    }
    return (
        <div style={style} >
            <img src="https://picsum.photos/seed/picsum/300/300" alt=""/>
            <h2>☕️ Enjoy the Richness: Freshly Brewed Coffee Delight ☕️</h2>
            <p>Indulge in the rich aroma and bold flavors of freshly brewed coffee that awaken your senses and brighten your day.</p>
            <div style={{display: 'flex', gap: '20px'}}>
                <button style={{backgroundColor: "blue", color: "white", borderRadius: "5px"}}>Show more</button>
                <button>Show more</button>
                <button>Show more</button>
            </div>
            {children}
        </div>
    )
}
export default Card
