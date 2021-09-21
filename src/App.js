import logo from "./logo.svg";

import contacts from "contacts,json"; //ITERATION1 pass1: import contacts

import { useState } from "react";

function App() {
  const [contacts, setContacat] = useState(contacts.slice(0, 5)); //Iter1 pas1 extrayendo 5 elementos del array
  return (
    <div className="App">
      <table>
        {contacts.map((contact) => {
          return console.log(contact);
        })}
      </table>
    </div>
  );
}
export default App;
