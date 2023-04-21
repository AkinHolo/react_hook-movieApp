import React, {useState } from 'react'
import ng from '../Assets/ng.png'
import madmax from '../Assets/madmax.png'
import rrr from '../Assets/rrr.png'


function Moviecard(){
    const [naija, setNaija] = useState('Nollywood');
    const [america, setAmerica] = useState('Hollywood'); 
    const [india, setIndia] = useState('Bollywood'); 
    
    
    return(
        <div className='movie-card'>
            <div className='industry'>
                <div className='lagos-gang'>
                    <img src={ng} alt='ng.png' />
                    <h2>{naija}</h2>
                </div>
            </div>
            <div className='industry'>
                <div className='madmax'>
                    <img src={madmax} alt='madmax.png' /> 
                    <h2>{america}</h2>
                </div>
            </div>
            <div className='industry'>
                <div className='rrr'>
                    <img src={rrr} alt='rrr.png' />
                    <h2>{india}</h2>
                </div>
            </div>
            {/* <div className='industry'>
                <div className='a-time'>
                    <img src={iron} alt='iron.png' />
                    <h2>{china}</h2>
                </div>
            </div> */}
        </div>
    )
}

export default Moviecard;