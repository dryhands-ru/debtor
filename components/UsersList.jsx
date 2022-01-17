import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.css'
import User from './User';




const UsersList=({users})=> {	
	
return (
	<div>
	<h1>Список должников</h1>
	    {users.map((user, id) =>
			<User id={user.id} user={user} key={user.id}/>
		)}
	</div>
	);
};


export default UsersList;