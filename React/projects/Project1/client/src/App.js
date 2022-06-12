import './App.css';
const JSX_Var = <div className="App"><div>Hello there</div></div>;
let name = "Pratyaksh";

const logName = (newName) => {
  name = newName;
  console.log(name);
}

function App() {
  return (
    <>
      {JSX_Var}
      <br></br>
      <div>{name}</div>
      <button type='submit' onClick={()=>logName("Praty")}>Click Me</button>
    </>
  );
}

export default App;
