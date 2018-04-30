import React from  'react';
import ReactDom from 'react-dom';
import './index.css';
import Image from './img/404.png';


function userName(user){
	return user.firstname + ' ' + user.lastname;
}


const user = {
	firstname: 'ayushi',
	lastname: 'shrimali',
	avatarUrl: Image
};



const userinfo = (
	<h1>
		hello, {userName(user)}
	</h1>
);



function Greeting(user){
	if(user.length >= 0){
		return <h1>hello, {userName(user)}</h1>;
	}
	else{
		return <p>hello, stranger</p>;
	}
}

/*function Greeting(user){  //written hello undefined undefined 
	if(user){
		return <h1>hello, {userName(user)}</h1>;
	}
	else{
		return <p>hello, stranger</p>;
	}
}*/

const imgelement = <img src={user.avatarUrl}></img>;

function tick(){
	const tickelement = (
		<div>
			<p>Hello clock</p>
			<h2>It is {new Date().toTimeString()}</h2>
		</div>
	);
	ReactDom.render(tickelement, document.getElementById('showtime'));
}

setInterval(tick, 1000);

const classelement = React.createElement(
	'h1',
	{className: 'heading'},
	'Hello'
);

ReactDom.render(
	<Greeting/>,
	document.getElementById('app')
);

ReactDom.render(
	imgelement,
	document.getElementById('showimg')
);

ReactDom.render(
	classelement,
	document.getElementById('byclass')
);