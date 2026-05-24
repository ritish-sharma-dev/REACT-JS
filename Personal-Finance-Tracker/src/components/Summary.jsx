import React, { use, useEffect, useState } from "react";

const Summary = ({ type, amount }) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    if (type == "income") {
      setBalance(balance + amount);
      setIncome(income + amount);
    } else if (type == "expenses") {
      let func = () => {
        setExpenses(expenses + amount);
        setBalance(balance - amount);
      };
      func();
    } else if (type == "savings") {
      let func = () => {
        setSavings(savings + amount);
        setBalance(balance - amount);
      };
      func();
    } else {
      setSavings(amount);
    }
    console.log(balance);
    console.log(expenses);
  }, [type, amount]);

  return (
    <>
      <h2>Summary</h2>
      <p>Net Balance: {balance}</p>
      <p>Income: {income}</p>
      <p>Expenses: {expenses}</p>
      <p>Savings: {savings}</p>
    </>
  );
};

export default Summary;
