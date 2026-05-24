import React, { useEffect, useState } from 'react'
import Summary from './Summary';

const Form = () => {
    const [type, setType] = useState("income");
    const [amount, setAmount] = useState(0);

    const formHandler = (e)=>{
        e.preventDefault();
        const {type, amount} = e.target;
        setType(type.value);
        setAmount(Number(amount.value));
    }

    useEffect(()=>{
        console.log(type);
        console.log(amount);
    },[type,amount])

  return (
    <>
    <form onSubmit={formHandler} action="">
        <label htmlFor="type">Type: </label> 
        <select name="type" id="type">
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
            <option value="savings">Savings</option>
        </select>
        <br />

        <label htmlFor="amount">Amount: </label>
        <input type="number" placeholder='Enter amount' name='amount' id='amount' />
        <br />

        <button type='submit'>Add Transaction</button>
    </form>
    <Summary type={type} amount={amount}/>  
    </>
  )
}

export default Form