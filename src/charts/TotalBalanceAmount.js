import React from 'react'
import {Line} from 'react-chartjs-2'
import * as graphs from '../Data/graphs.json'


const TotalBalanceAmount = ({timeStamp , data}) => {
    
    var dataArray = [];
    
    data.map(item => {
        dataArray.push(item.totalBalanceAmount)
    })
    
    
    return (
      <div className='card'>
      <div className='card-inner'>
        <Line
        data={{
      labels: timeStamp,
        datasets: [
          {
              label: 'Total Balance Amount',
            data: dataArray,
            backgroundColor: 'red',
            borderColor: 'blue',
            borderWidth: 1,
          },
        ],
      }}
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 35,
          },
        },
      }}
    />
      </div>
    </div>
  )
}

export default TotalBalanceAmount
