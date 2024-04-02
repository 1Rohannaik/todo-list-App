import React, { useState } from "react";
import './App.css'

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const randomId = () => {
    return Math.floor(Math.random()*100)
  }


  const handelSubmit = () => {
    setList((list) => (
      list.concat({
        text: input,
        id:randomId(),
      })
    ))
    setInput("");
  }

  const handelClose = (id) => {
    const items = list.filter((data) => {
      return (
       data.id !==id
     )
    })
    setList(items);
 }


  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter the text"
          className="input"
        />
        <button className="submit" onClick={handelSubmit}>submit</button>

        <div className="list-type">
          {
            list.map(({text,id})=> {
              return (
                <div key={id} className="product">
                  <li>
                    {text}
                    <button className="close" onClick={()=>handelClose(id)}>X</button> 
                  </li>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default App;
