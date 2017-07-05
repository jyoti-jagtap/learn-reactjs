// Write code here:
const dummyTxt = "How are you?";
const imageUrl = "http://lorempixel.com/400/200/";

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
	  <li className="item" key={i} id={'person_' + i} onClick = {getID.bind(this)} >{person}</li>
);

function getID(a)
{
    document.getElementById("showid").innerHTML = a.target.id;
}
function myFunct() {	
	alert("Clicked Me!!!");
}

function myOnFunct(e) {
	console.log(e.target.value);
}

const myJsx = ( 
	<div>
		<h1>2 + 5 = {2 + 5}</h1>
		<img src={imageUrl} />
		<ul className="navigation">  
			<li>hi jyoti, {dummyTxt}</li>
			<li><a href="#" onClick={myFunct} >Click Me!!</a></li>
		</ul>
		<ul> {peopleLis} </ul>
		<input type="text" onChange={ myOnFunct.bind(this) } />
		<div id="showid"></div>
	</div>
);

ReactDOM.render(myJsx, document.getElementById('app'));