import logo from "./logo.svg";

import contactsList from "./contacts.json"; //ITERATION1 pass1: import contacts

import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5)); //Iter1 pas1 extrayendo 5 elementos del array
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td> {contact.wonOscar} ? "🏆" : ""</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
