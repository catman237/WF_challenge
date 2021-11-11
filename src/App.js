import './App.css';
import { useEffect, useState } from 'react'
import CustomerTable from './Components/CustomerTable';

function App() {
  const [items, setItems] = useState([])
  const itemsURL = 'http://localhost:3000/data.json'

  useEffect(() => {
    fetch(itemsURL)
    .then(res => res.json())
    .then(res => setItems(res))
  },[])

  return (
    <div className="App">
      <CustomerTable />
    </div>
  );
}

export default App;
