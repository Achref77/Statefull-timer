import React from 'react'

export default function Butom() {
    return (
        <div className="StarPlay" >
             {/* <input class="ground"id="submit"type="submit" value="send">
  
              <input class="ground"id="reset"type="reset" value="Reset"> */}
                  <button className="play" id="start" type="submit" value="send">Start</button>
                  <button className="play" id="reset" type="reset" value="Reset">Reset</button>  
        </div>
    )
}


