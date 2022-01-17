import React, {useState, useEffect} from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';


const UserForm=({create})=> {
	const [user, setUser] = useState({name:'', amountOfDebt:'', checked: ''})
	const addNewUser = (e) => {
		e.preventDefault()
		const newUser ={
			...user, id: Date.now(), checked: ''
		}
		create(newUser)
		setUser({name:'', amountOfDebt:'', checked: ''})
	}
	useEffect(() => {
	  // storing input user
	  localStorage.setItem("user", JSON.stringify(user));
	}, [user]);
return (	
	<form>
		<MyInput value={user.name} onChange={e=>setUser({...user, name:e.target.value})} type='text' placeholder='ФИО'/>
		<MyInput value={user.amountOfDebt} onChange={e=>setUser({...user, amountOfDebt:e.target.value})} type='text' placeholder='Задолжность'/>
		<MyButton onClick={addNewUser}>Добавить</MyButton>
	</form>
);
};


export default UserForm;