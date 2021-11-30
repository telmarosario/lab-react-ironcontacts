import { useState } from 'react';
import './App.css';
import contactsJSON from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5));


  const getRandomContact = () => {
    const randomNum = Math.floor(Math.random() * contactsJSON.length);
    setContacts((prevArray) => [...prevArray,contactsJSON[randomNum]]) 
  }

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((celebOne, celebTwo) => celebTwo.name > celebOne.name ? 1 : -1);
    console.log(sortedContacts);
    setContacts(sortedContacts);
  }; 

  const sortByPopularity = () => {
    const sortedContacts = [contacts].sort((celebOne, celebTwo) => {return celebTwo.popularity - celebOne.popularity});
    console.log(sortedContacts)
    setContacts(sortedContacts);

  };

  const removeContact = (celebrityId) => {
    const filterMovies = contacts.filter((celebrity) =>  celebrity.id !== celebrityId);
    setContacts(filterMovies);
  }

  return (
    <div className="App">
      <h1>Iron Producers</h1>

      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
      </tr>

      {contacts.map((celebrity) => {
        return (
          <tr key={celebrity.id}>
          <td><img src={celebrity.pictureUrl} alt="celeb pic"/></td>
          <td>{celebrity.name}</td>
          <td>{celebrity.popularity.toFixed(2)}</td>
          {celebrity.wonOscar ? <td>🏆</td> : <td></td> }
          {celebrity.wonEmmy ? <td>🏆</td> : <td></td> }
          <td><button onClick={() => removeContact(celebrity.id)}>Delete</button></td>
          </tr>
        )
      })}
      </table>
    </div>
  );
}

export default App;
