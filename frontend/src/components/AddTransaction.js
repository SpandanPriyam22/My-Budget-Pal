import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const { loggedIn } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      await axios.post("http://localhost:5000/api/transactions", newTransaction, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            <br />
            Description / वर्णन
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount / राशि </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        {loggedIn ? (
          <button className="btn">Add transaction</button>
        ) : (
          <p>Log In To Use The App</p>
        )}
      </form>
    </>
  );
};
export default AddTransaction;
