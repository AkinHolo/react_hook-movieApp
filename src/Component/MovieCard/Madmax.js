import React from 'react'
import {Link} from 'react-router-dom'
import madmax from '../../Assets/madmax.png'

const Madmax =()=>{
   
    return(
        <div className='movie-link'>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <div className='description-cover'>
                <h3>Description</h3>
                <p>Fury Road is an extended chase sequence, with Furiosa and Co. on the run from Joe's War Boys, various vehicular gangs, and the desert environment itself. Ever the loner, Max finds himself on the side of Furiosa and the liberated women in their search for a hope and redemption in a new, greener home.13</p>
            </div>
            <div className='image-cover'>
                <img src={madmax} alt='madmax.png'/>
            </div>
            <div>
                <h2>Madmax - Fury road</h2>
            </div>
            <button>
            <Link to='https://www.youtube.com/watch?v=hEJnMQG9ev8' className='play'>Play </Link>
            </button>   
        
                    
           
        </div>
    )
}

export default Madmax;