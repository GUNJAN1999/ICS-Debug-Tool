import React from 'react'
import * as column from '../../Data/column.json'
import '../../App.css';
import Spinner from '../UI/Spinner';

const columnData = column.default.names;

const columnValue = (val , items) =>{
    console.log(val);
    return items.val ;
}

const Summary = ({items , isLoading}) => {
    return isLoading ? (<h1> <Spinner/> </h1>) : (
        <section className="cards" style={{fontFamily:'Monaco' , marginLeft:'20px'}} >
            <h5>Instrument ID : {items.summary.instrumentID}</h5>
            <h5>InstrumentType : {items.summary.instrumentType}</h5>
            <h5>Creation Date : {items.summary.creationDate}</h5>
            <h5>Customer ID : {items.summary.customerID}</h5>
            <h5>Available Balance : {items.summary.availableBalance}</h5>
            <h5>KYC Status : {items.summary.kycstatus}</h5>
            <h5>Instrument Status : {items.summary.instrumentStatus}</h5>
            <h5>Customer Status : {items.summary.customerStatus}</h5>
            <h5>Daily Debit Balance : {items.summary.dailyDebitRollingBalance}</h5>
            <h5>Monthly Debit ROlling Balance : {items.summary.monthlyDebitRollingBalance}</h5>
            <h5>Daily Credit Rolling balance : {items.summary.dailyCreditRollingBalance}</h5>
            <h5>Monthly Credit Rolling balance : {items.summary.monthlyCreditRollingBalance}</h5>
            
        </section>
    );
}

export default Summary
