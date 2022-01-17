import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './App.css';
import {allUsers} from './components/allUsers.js';
import User from './components/User';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';
import { useLocalStorage } from "./components/useLocalStorage";
// const getFormatedAmountOfDebt = (amountOfDebt) => `$${amountOfDebt.toFixed(2)}`

function App() {
	const [users, setUsers] = useLocalStorage('users', '')	
	const createUser =(newUser)=> {
		setUsers([...users, newUser])
	}
	useEffect(() => {
	  // storing input users
	  localStorage.setItem("users", JSON.stringify(users));
	}, [users]);
	console.log(users)
  return (
    <div className="App">
		<UserForm create={createUser}/>
		<UsersList users={users}/>
    </div>
  );
}

export default App;
