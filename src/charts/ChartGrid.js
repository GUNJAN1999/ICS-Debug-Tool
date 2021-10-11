import React from 'react'
import Spinner from '../component/UI/Spinner'
import CreditAmount from './CreditAmount'
import CustomerKYCStatus from './CustomerKYCStatus'
import CustomerStatus from './CustomerStatus'
import DailyCrebitRollingBalance from './DailyCrebitRollingBalance'
import DailyDebitRollingBalance from './DailyDebitRollingBalance'
import DebitAmount from './DebitAmount'
import MonthlyCrebitRollingBalance from './MonthlyCrebitRollingBalance'
import MonthlyDebitRollingBalance from './MonthlyDebitRollingBalance'
import TotalBalanceAmount from './TotalBalanceAmount'
import YearlyCrebitRollingBalance from './YearlyCrebitRollingBalance'
import YearlyDebitRollingBalance from './YearlyDebitRollingBalance'

const ChartGrid = ({ items, isLoading }) => {

    var timeStamp = [];

    items.map(item => {
        timeStamp.push(item.timestamp)
    })

return isLoading ? (
    <Spinner />) : (
    <section className='cards2' style={{ color: 'black', marginLeft:'20px' }}>
    <TotalBalanceAmount timeStamp={timeStamp} data={items} />
    <CreditAmount timeStamp={timeStamp} data={items} />
    <DebitAmount timeStamp={timeStamp} data={items} />
    
    
    <DailyCrebitRollingBalance timeStamp={timeStamp} data={items}/>
    <MonthlyCrebitRollingBalance timeStamp={timeStamp} data={items}/>
    <YearlyCrebitRollingBalance timeStamp={timeStamp} data={items}/>

    <DailyDebitRollingBalance timeStamp={timeStamp} data={items}/>
    <MonthlyDebitRollingBalance timeStamp={timeStamp} data={items}/>
    <YearlyDebitRollingBalance timeStamp={timeStamp} data={items}/>
   
    
    
    <CustomerKYCStatus timeStamp={timeStamp} data={items}/>
    <CustomerStatus timeStamp={timeStamp} data={items}/>
    
    

    </section>
)
}

export default ChartGrid


