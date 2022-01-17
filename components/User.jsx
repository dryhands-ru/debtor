import React from 'react';
import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


const User = (props)=> {
const [checked, setChecked] = useLocalStorage('checked', '')

let msg;
   if(props.user.checked == 'true'){
      msg = <span>вернул</span>
   }else{
      msg = <span className='d-none'>вернул</span>
   }
useEffect(() => {
  // storing input checked
  localStorage.setItem("checked", JSON.stringify(checked));
}, [checked]);
	return (
		<div className='debtor'>
			<label htmlFor={props.user.id}><span>{msg}</span></label>
			
			<input value={props.user.checked} onChange={(e) => setChecked(e.target.value)} className='check' type="checkbox" id={props.user.id}/>			
			<p className='currentDebtor'>{props.user.name}</p>
			<p className='amountOfDebt'>${props.user.amountOfDebt}</p>
		</div>
	)
};
export default User;