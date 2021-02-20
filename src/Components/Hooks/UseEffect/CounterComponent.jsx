import React, { useEffect, useState } from 'react';
const CounterOneComponent=()=>{
    const [count,setCount]=useState(0);
    //useeffect without specifying the second argument
    //useEffect is async - combination of componentDidMount and componentDidUpdate without second argument
    useEffect(()=>{
    console.log("counter = "+count);               
    }, );                //we can also use second arguments
    return(
        <div>
            <h3>UseEffect</h3>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Increase</button>
            <span>{count}</span>
        </div>
    )
}

const CounterTwoComponent=()=>{
    const [count,setCount]=useState(0);
    const [check,setCheck]=useState(true);
    //useeffect without specifying the second argument
    useEffect(()=>{
    console.log("counter = "+count);
    },[count] );                //we can also use second arguments
                                //called only when count get changes
    useEffect(()=>{
        console.log("Checked = "+check);
        },[check] );            //called only when check is changed  
    return(
        <div>
            <h3>UseEffect</h3>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Increase</button>
            <span>{count}</span>
            <input type="checkbox" onChange={()=>setCheck(prevState=>!prevState)} defaultValue={check}/>
            <span>{check? "Checked":"Unchecked"}</span>
            
        </div>
    )
}

const CounterThreeComponent=()=>{
    const [count,setCount]=useState(0);
    const [check,setCheck]=useState(true);
    //useeffect specifying dependent value as empty array - equvalent to componentDidMount
    //setInterval is expected tto be called only once 
    //Removing the empty array will lead to setInterval being called multiple time for each render
    useEffect(()=>{           //componentDidMount and componentDidUpdate if we dont use empty array
    console.log("counter = "+count);
    setInterval(()=>{setCount(prevState=>prevState+1)},2000)
    },[] );               
    useEffect(()=>{
        console.log("Checked = "+check);
        },[check] );            //called only when check is changed  
    return(
        <div>
            <h3>UseEffect</h3>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Increase</button>
            <span>{count}</span>
            <input type="checkbox" onChange={()=>setCheck(prevState=>!prevState)} defaultValue={check}/>
            <span>{check? "Checked":"Unchecked"}</span>
            
        </div>
    )
}
const CounterFourComponent=()=>{
    const [count,setCount]=useState(0);
    //useEffect - Equivalent to componentWilllMount can be achieved by returning a cleanup function
    //if return of cleanup function is removed, then the interval will not be cleared
    //then when counterfourcomponent is removed by clicking on 'hideCounter'
    //a warning will be logged in console as state update is being attempted on an unmounted component
    useEffect(()=>{
        console.log("counterfourcomponent mounting, setting interval ...")
        const interval=setInterval(()=>setCount(prevCount=>prevCount+1),2000);
        return()=>{
            console.log("counterfourcomponent unmounting,clearing interval....");
            clearInterval(interval);
        }
                  
    },[] );               
    return(
        <div>
           <p>Count : {count}</p>
        </div>
    )
}
const ComponentFourContainer=()=>{
 const [show,setShow]=useState(true);
  
 return(
     <div>
         <h2>UseEffect -Cleanup</h2>
         <button onClick={setShow(prevShow=>!prevShow)}>{show?"Show":"Hide"} component</button>
         {show && <CounterFourComponent/>}
     </div>
 )
}