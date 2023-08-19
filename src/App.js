import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    axios.get('/api/numbers').then((response) => {
      setNumbers(response.data);
    });
  }, []);

  const Number = () => {
    axios.post('/api/numbers', { value: newNumber }).then((response) => {
      setNumbers([...numbers, response.data]);
      setNewNumber('');
    });
  };

  return (
    
      <div>
        <h1>NUMBER MANAGEMENT</h1>
            <h3>primes : </h3>
            <a href='http://20.244.56.144/numbers/primes'>primes</a>
            <h3>fibo : </h3>
            <a href='http://20.244.56.144/numbers/fibo'>fibo</a>
            <h3>odd : </h3>
            <a href='http://20.244.56.144/numbers/odd'>odd</a>
            <h3>rand : </h3>
            <a href='http://20.244.56.144/numbers/rand'>rand</a>
            
            
      </div>
    
  );
}

export default App;