import  React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  // const contacts = [
  //   {
  //     avatar: "https://via.placeholder.com/150",
  //     name: "Jenny Hann",
  //     email: "Jenny.Han@blah.com",
  //     age: 25
  //   },
  //   {
  //     avatar: "https://via.placeholder.com/150",
  //     name: "Paul Jones",
  //     email: "Paul.Jones@blah.com",
  //     age: 33
  //   },
  //   {
  //     avatar: "https://via.placeholder.com/150",
  //     name: "Peter Pan",
  //     email: "Peter.Pan@blah.com",
  //     age: 100
  //   },  
    
  // ];
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")

    .then(response => response.json())
    .then(data => {
      console.log(data) 
      setResults(data.results)
    }
  );
  }, [])
  

  return(
  <div>
    {results.map((result, index)  => {
      return(
        <ContactCard key = {index} 
        avatar= {result.picture.large}
        name={result.name.first}
        email={result.email}
        age = {result.dob.age}
        />
              
    )
    })}
    

 </div>
  );
};


export default App;