import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [buggies, setBuggies] = useState([]);
  const [addBuggyData, setAddBuggyData] = useState({
    color: '',
    location: '',
    date: '',
  });

  useEffect(() => {
    axios.get('http://localhost:3001/buggies')
      .then(response => setBuggies(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;
    setAddBuggyData((prevData) => ({ ...prevData, [fieldName]: fieldValue }));
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/buggies', addBuggyData)
      .then(response => setBuggies([...buggies, response.data]))
      .catch(error => console.error('Error adding new buggy:', error));

    setAddBuggyData({
      color: '',
      location: '',
      date: '',
    });
  };
  return (
    <div className="container">
      <h1>Buggies List</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Color</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {buggies.map((buggy) => (
            <tr key={buggy.id}>
              <td>{buggy.image}</td>
              <td>{buggy.color}</td>
              <td>{buggy.location}</td>
              <td>{buggy.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Buggy</h2>
      <form onSubmit={handleAddFormSubmit}>
        <div>
          <label htmlFor="color">Select Color:</label>
          <select 
            name="color"
            placeholder="Enter a buggy color..."
            value={addBuggyData.color} 
            onChange={handleAddFormChange}
            required
          >
            <option value="" disabled>Select a color</option>
            <option value="Red" >Red</option>
            <option value="Blue" >Blue</option>
            <option value="Green" >Green</option>
            <option value="Orange" >Orange</option>
            <option value="Gray" >Gray</option>
            <option value="White" >White</option>
            <option value="Black" >Black</option>

          </select>
        </div>
        <input
          type="text"
          name="location"
          required
          placeholder="Enter the buggy location..."
          value={addBuggyData.location}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="date"
          required
          placeholder="Enter the date..."
          value={addBuggyData.date}
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;