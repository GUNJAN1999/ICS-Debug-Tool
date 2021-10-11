import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({getQuery}) => {

    const [text , setText] = useState('')

    const handleChange = (event) => {
      const value = event.target.value;
      //console.log("handleChange",value)
      setText(value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      getQuery(text);
      console.log("Search page query >>>>",text);
    }

    return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Instrument ID"
        onChange={handleChange}
        aria-describedby="button-addon2"/>
        <button 
        className="btn btn-secondary"
        style={{height : '48px' , marginLeft : '10px'}} 
        type="submit" >
            Submit
        </button>
    </div>
    </form>
        
    )
}

export default Search
