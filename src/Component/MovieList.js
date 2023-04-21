import React, { useState} from  'react'

function MovieList() {
    const [list, setList] = useState([]);
    
    const handleClick =()=>setList([
        <ul>
            <li>Gang of Lagos</li>
            <li>Iron man</li>
            <li>Spider-man</li>
            <li>Madmax-fury road</li>
            <li>Omo amun pon pon</li>
            <li>Once open a time in Chine</li>
            <li>Battle Los-Angelos</li>
            <li>Sniper reloaded</li>
            
        </ul>
    ]);

    return(
        <div>
            <ul>
                <li>
                    {list}
                </li>
            </ul>
            <button onClick={handleClick}> See movie list</button>
        </div>
    )
}

export default MovieList;