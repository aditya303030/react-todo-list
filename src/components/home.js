import React,{useState} from "react";
import '../App.css';


const Home = () => {
  //states
  const [Text,setText] = useState('');
  const InputTextHandler = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className="container">
     
      {/* <input placeholder="input text" onChange={InputTextHandler} ></input>
      <button type="submit">Submit</button>
      <h1>{Text}</h1> */}
    </div>
  );
};
  
export default Home;