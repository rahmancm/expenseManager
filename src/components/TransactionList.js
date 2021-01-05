import React, { useContext } from "react";
import { GlobalProvider } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalProvider);
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transaction) => {
          const { text, amount } = transaction;
          <li className="minus">
            {text} <span>{amount}</span>
            <button class="delete-btn">x</button>
          </li>;
        })}
      </ul>
    </>
  );
};
