import {React,useState} from 'react';

const Checkbox=()=>{
    const [chosse,setChosse]=useState([])    
    return(
        <div id='App'>
            <form>
                <label><b>Selecte your location:</b></label><br/>
                <input type='checkbox' name='city' value='Mumbai' onChange={(e) => {
                    setChosse(e.target.value)
                }}/>
                <label>Mumbai</label><br/>
                <input type='checkbox' name='city' value='Delhi' onChange={(e) => {
                    setChosse(e.target.value)
                }}/>
                <label>Delhi</label><br/>
                <input type='checkbox' name='city' value='Pune' onChange={(e) => {
                    setChosse(e.target.value)
                }}/>
                <label>Pune</label><br/>
                <input type='checkbox' name='city' value='Bangalore' onChange={(e) => {
                    setChosse(e.target.value)
                }}/>
                <label>Bangalore</label><br/>
                <input type='checkbox' name='city' value='Chennai' onChange={(e) => {
                    setChosse(e.target.value)
                }}/>
                <label>Chennai</label><br/>
            </form>
            <h1>This is city {chosse} .</h1>
        </div>
    );
}

export default Checkbox;