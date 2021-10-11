import React from 'react'
import {Line} from 'react-chartjs-2'

const CustomerKYCStatus = ({timeStamp , data}) => {
  var dataArray = [];
  var yLabels = {
     0:'ACTIVE',
     1:'LOCKED',
     2:'CLOSED',
     3:'INACTIVE'
     
  }
  
  data.map(item => {
    if(item.customerKYCStatus == 'DUMMY'){
      dataArray.push('ACTIVE')
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
              label: 'Customer KYC Status',
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
          yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    // for a value (tick) equals to 8
                    return yLabels[value];
                    // 'junior-dev' will be returned instead and displayed on your chart
                }
            }
        }]
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

export default CustomerKYCStatus
