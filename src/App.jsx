import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await respone.json();
      console.log(result);
      setData(result);
    }
    getData();
  }, [])
  
  return (
    <div>
      {
        data.map((data) => {
          data;
          return (
            <li key={Math.random()}>{data.title}</li>
          )
        })
      }

    </div>
  )
}

export default App