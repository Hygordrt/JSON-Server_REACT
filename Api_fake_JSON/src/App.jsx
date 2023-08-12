import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  
  const [data, setDate] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/postagens')
    .then(res => setDate(res.data))
    .catch(err => console.log('Erro:',err))
  }, [])

  return (
  
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i)=> {
            return <tr key={i}>
              <td>{d.título}</td>
              <td>{d.autor}</td>
            </tr>
          })}
        </tbody>
      </table>
  );
}

export default App


// Para rodar o json-server:json-server --watch ./mock/db.json