import React, { useState } from "react";
import "./App.css";
import data from "./db.json";
import buggy from "./svg/Group 1.svg"
// import Table from './table';

function App() {
  const [buggies, setBuggies] = useState(data);

  return (
    <div className="container">
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
            <tr>
              <td>{buggy.image}</td>
              <td>{buggy.color}</td>
              <td>{buggy.location}</td>
              <td>{buggy.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Buggy</h2>
      <img src={buggy}></img>
      <form>
        <input type="text" name="color" required="required" placeholder="Enter a buggy color..."></input>
        <input type="text" name="location" required="required" placeholder="Enter the buggy location..."></input>
        <input type="text" name="date" required="required" placeholder="Enter the date..."></input>

      </form>
    </div>
  );
}

export default App;

// const [color, setColor] = useState('');
//   const [date, setDate] = useState('');
//   const [location, setLocation] = useState('');
//   const [carData, setCarData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const saveData = () => {
//     axios.post('/save_data', { color, date, location })
//       .then(response => {
//         if (response.data.status === 'success') {
//           fetchData();
//         }
//       })
//       .catch(error => console.error('Error saving data:', error));
//   };

//   const fetchData = () => {
//     axios.get('/get_data')
//       .then(response => setCarData(response.data.data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   return (
//     <div>
//       <h1>Car Data Collection</h1>
//       <form>
//         <label htmlFor="color">Color:</label>
//         <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} required />
//         <br />
//         <label htmlFor="date">Date:</label>
//         <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         <br />
//         <label htmlFor="location">Location:</label>
//         <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
//         <br />
//         <button type="button" onClick={saveData}>Save</button>
//       </form>
//       <h2>Car Data List</h2>
//       <ul>
//         {carData.map((item, index) => (
//           <li key={index}>
//             Color: {item.color}, Date: {item.date}, Location: {item.location}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
