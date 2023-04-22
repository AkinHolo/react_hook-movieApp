import React from 'react'
import {Link} from 'react-router-dom'
import angeles from '../../Assets/angeles.png'

const Battle =()=>{
    

    return(
        <div className='movie-link'>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <div className='description-cover'>
                <h3>Description</h3>
                <p>The storyline was conceived from a screenplay written by Chris Bertolini and follows a Marine Staff Sergeant played by Aaron Eckhart who leads a platoon of U.S. Marines, joined by other stranded military personnel, defending Los Angeles from alien invasion</p>
            </div>
            <div className='image-cover'>
                <img src={angeles} alt='angeles.png'/>
            </div>
            <div>
                <h2>Battle: Los-Angeles</h2>
            </div>
            <button > 
                <Link to="https://www.youtube.com/watch?v=-Y2sB-NUH58" className='play'>Play</Link>
            </button> 
        </div>
    )
}

export default Battle;
