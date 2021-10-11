import React from 'react'
import * as graphs from '../Data/graphs.json'
import {Line} from 'react-chartjs-2'

const CustomerStatus = ({timeStamp , data}) => {

    var dataArray = [];
    var yLabels = {
       0:'INACTIVE',
       1:'ACTIVE'
       
    }
    
    data.map(item => {
      if(item.customerStatus == 'ACTIVE'){
        dataArray.push(1)
      }
       
      else{
        dataArray.push(0)
      }
    })

    return (
        <div className='card'>
        <div className='card-inner'>
          <Line
          data={{
        labels: timeStamp,
          datasets: [
            {
                label: 'Customer Status',
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
                    callback: function(value, index, values) {
                      return yLabels[value]
                    }
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

export default CustomerStatus
