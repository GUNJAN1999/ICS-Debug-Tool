import React from 'react'
import {Line} from 'react-chartjs-2'

const CustomerKYCStatus = ({timeStamp , data}) => {
  var dataArray = [];
  var yLabels = {
     0: 'MIN_KYC',
     1: 'FULL_KYC',
     2: 'VIDEO_KYC'
     
  }
  
  data.map(item => {
    var ii = item.customerKYCStatus;
    if(ii == 'MIN_KYC'){
      dataArray.push(0)
    }else if(ii == 'FULL_KYC'){
      dataArray.push(1)
    }
    else{
      dataArray.push(2)
    }
  })

  console.log(dataArray)

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
                    return 'FULL_KYC';
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

