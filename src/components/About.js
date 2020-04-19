import React from 'react';
import Rainbow from './hoc/Rainbow'

const About=()=>{
    return(

        <div className="container">
   <h4 className="center">About</h4>
<p>Poké Ball Plus works similar to the Pokémon GO Plus wrist-worn device does. When you're out on a Poké walk, the Poké Ball Plus will light up and vibrate to let you know that a Pokémon is nearby. You can press the button on top to trigger the Pokéball throw</p>

        </div>
    )


}

export default Rainbow(About);