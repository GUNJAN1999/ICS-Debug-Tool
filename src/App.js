import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Header from './component/UI/Header';
import './App.css';
import * as data from './Data/dummy.json'
import Summary from './component/Section/Summary';
import Search from './component/UI/Search';
import ChartGrid from './charts/ChartGrid';
import Spinner from './component/UI/Spinner';



const App = () => {

  const [items , setItems] = useState([])
  const [graphData , setGraphData] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [query , setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      console.log("Main Page query>>>>>>",query)
        const result = await axios(`https://05nhjp6790.execute-api.ap-south-1.amazonaws.com/beta?id=${query}`)
        var newData;
        try{
          console.log(result);
          newData = JSON.parse(result.data.body);
        }catch(ex){
          console.log(ex)
        }
        
        setItems(newData)
        setGraphData(newData.graph.graphElements)
        setIsLoading(false)
    }

    fetchItems()
  },[query])

  return (
    <div className="container" style={{marginBottom : '30px'}}>
      <Header/>
      <Search getQuery = {q => setQuery(q)} />

      <div className="blurred-div" >
        <div >
        <h1 className="blurred-text" 
        style={{marginLeft:'20px', marginTop:'40px'}}>
          Summary
        </h1><br/><br/>
        <Summary isLoading={isLoading} items={items}/>
        </div>
      </div>

      <br/><br/><br/><br/>

      <div className="blurred-div">
        <div>
          <h1 className="blurred-text" 
          style={{marginLeft:'20px'}}>Graphs
          </h1>
          <br/>
          <ChartGrid isLoading={isLoading} items={graphData}/>
        </div>
      </div>
    </div> 
    
  
  );
}

export default App;
