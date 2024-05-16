import {CiShare2} from "react-icons/ci";
import {CiSaveDown2} from "react-icons/ci";


const Card = (color, size, children, icon) => {
    const sizeMapping = {
        small: {fontSize: '12px', padding: '5px 10px'},
        medium: {fontSize: '14px', padding: '7px 12px'},
        large: {fontSize: '16px', padding: '10px 15px',}
    }
    const style = {
        width: '320px',
        color: 'grey',
        fontsize: '30px',
        padding: sizeMapping[size]?.padding,
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        boxShadow: '5px 5px 50px black',
    }
    return (
        <div style={style}>
            <img src="https://picsum.photos/seed/picsum/300/300" alt="" style={{borderRadius: '20px 20px 0px 0px'}}/>
            <h2>🏔️ Discover the Beauty of the Majestic Mountains 🌲
            </h2>
            <p>The towering mountains offer stunning views, serene trails, and fresh air. Snow-capped peaks contrast
                with lush forests, creating a peaceful escape in nature’s embrace. A visit to the mountains promises
                awe-inspiring beauty and a sense of tranquility that rejuvenates the soul.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-around',}}>
                <button style={{
                    backgroundColor: 'lightblue',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                }}><CiShare2 style={{width: '50px', height: '50px'}}/></button>
                <button style={{
                    backgroundColor: 'lightblue',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer'
                }}><CiSaveDown2 style={{width: '50px', height: '50px'}}/></button>
            </div>
            {children}
        </div>
    )
}
export default Card
