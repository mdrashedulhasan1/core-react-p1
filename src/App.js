import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const tapuInfo = {name:"Tapu", job:'Web Developer'};
  const rashedulInfo = {name:"Rashedul", job:"Web Designer"};
  const hasanInfo = {name:"Hasan", job:"React Developer"};

  const allName = ["Tapu", "Rashedul", "Hasan"];
  const allJob = ["Web Developer", "Web Designer", "React Developer"];
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
      <Person name="Tapu" job="Web Developer"></Person>
      <Person name="Rashedul" job="Web Designer"></Person>
      <Person name="Hasan" job="React Developer"></Person>

      <Person2 name="Tapu" job="Web Developer"></Person2>
      <Person2 name="Rashedul" job="Web Designer"></Person2>
      <Person2 name="Hasan" job="React Developer"></Person2>

      <Person3 name={tapuInfo.name} job={tapuInfo.job}></Person3>
      <Person3 name={rashedulInfo.name} job={rashedulInfo.job}></Person3>
      <Person3 name={hasanInfo.name} job={hasanInfo.job}></Person3>

      <Person4 name={allName[0]} job={allJob[0]}></Person4>
      <Person4 name={allName[1]} job={allJob[1]}></Person4>
      <Person4 name={allName[2]} job={allJob[2]}></Person4>
    </div>
  );
}


function Person(props){
  return <h1>Name:{props.name} , Job:{props.job}</h1>
}

function Person2(props){
  const style = {
    color:"white",
    backgroundColor:'gray',
    padding: '20px',
    margin:'5px 10px',
    border:'2px solid green',
    borderRadius:'15px',
  }
  return(
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <h4>Job: {props.job}</h4>
    </div>
  )
}

function Person3(props){
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <h4>Job: {props.job}</h4>
    </div>
  )
}

function Person4(props){
  const style = {
    color:"gold",
    backgroundColor:'blue',
    padding: '20px',
    margin:'5px 10px',
    border:'2px solid lightgreen',
    borderRadius:'15px',
  }
  return <h1 style={style}>Name:{props.name} , Job:{props.job}</h1>
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleInc = ()=>{
    const updateValue = count+1;
    setCount(updateValue);
  }
  const handleDec = ()=>{
    const updateValue = count+1;
    setCount(updateValue);
  }
  return(
    <div>
      <h1>Value: {count}</h1>
      <button onClick={handleInc}>INC(++)</button>
      <button onClick={handleDec}>DEC(--)</button>
    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h1>Users Length:{users.length}</h1>
        {
          users.map(user => <p>{user.name}, {user.email}, {user.address.city}</p>)
        }
    </div>
  )
}
export default App;
