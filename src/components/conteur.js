import React, { Component } from 'react'
class Timers extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        timers: 0,
     interval:0
      }}
convert=(time)=>{

  let reste=time;

  let result='';
  let nbHours=0,nbMinutes=0,nbSeconds=0
  nbHours=Math.floor(reste/3600);
  reste -= nbHours*3600;

  nbMinutes=Math.floor(reste/60);
  reste -= nbMinutes*60;

  nbSeconds=reste;
// console.log(nbHours,nbMinutes,nbSeconds)
  if (nbHours>0)
      result=result+String(nbHours).padStart(2,'0')+': ';

  if (nbMinutes>0)
      result=result+String(nbMinutes).padStart(2,'0')+': ';

  if (nbSeconds>0)
      result=result+String(nbSeconds).padStart(2,'0');
      console.log(result)
  return result;
  
}
    start=()=>{
      if(this.state.interval){
      clearInterval(this.state.interval)
      this.setState({
        interval:0
      })
      }
      else{
      const interval=setInterval(() => {
        this.setState({timers:this.state.timers+1})
      }, 1000);
      this.setState({interval})}
    }
   
    
    res=()=>{
     
       
        clearInterval(this.state.interval)
        this.setState({
          timers: 0,
          interval:0
      })
     
      
    }
    



    render() {

      return (
        <>
      
      <h1 className="conte">{this.convert(this.state.timers)}</h1>
        <button className="play" id="start" value="send" onClick={this.start}>{this.state.interval?"Pause":"Start"}</button>
        <button className="play" id="reset"  value="Reset"  onClick={this.res}>Reset</button>  
        </>
      );
    }
  }
  export default  Timers 

