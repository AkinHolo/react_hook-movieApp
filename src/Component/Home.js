import React from 'react'
import { Link} from 'react-router-dom'

const Home =()=>{
    return(
        <div className='home'>
           <nav>
            <li>Home Page</li>
           </nav>
           <div>
            <ul className='home-list'>
                <li >
                    <Link to='/battle'>
                        Battle: Los Angeles
                    </Link>
                </li>
                <li>
                    <Link to='/madmax'>
                        Madmax -Fury Road
                    </Link>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default Home;
  