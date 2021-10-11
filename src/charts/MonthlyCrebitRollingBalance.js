import React from 'react'
import * as graphs from '../Data/graphs.json'
import {Line} from 'react-chartjs-2'


const MonthlyCrebitRollingBalance = ({timeStamp , data}) => {


    var dataArray = [];
    
    data.map(item => {
        dataArray.push(item.monthlyCreditRollingBalance)
    })

    return (
        <div className='card'>
        <div className='card-inner'>
          <Line
          data={{
        labels: timeStamp,
          datasets: [
            {
                label: 'Monthly Crebit Rolling Balance',
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

export default MonthlyCrebitRollingBalance
