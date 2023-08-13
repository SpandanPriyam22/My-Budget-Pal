import React, { createContext, useReducer,useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
// Initial state
const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:5000/api/transactions', {
        headers: { Authorization: token },
      })
      .then(response => {
        dispatch({
          type: 'SET_TRANSACTIONS',
          payload: response.data,
        });
      })
      .catch(error => {
        console.error('Error fetching user transactions:', error);
      });
    }
  }, []);
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}