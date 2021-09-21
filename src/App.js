import logo from "./logo.svg";

import contacts from "contacts,json"; //ITERATION1 pass1: import contacts
import { useState } from "react";

function App() {
  const [contacts, setContacat] = useState(contacts.slice(0, 5));
  return (
    <div>
      <table>{contacts.map((contact) => {
          return  (
            
          )

      })}
      
      </table>
    </div>
  );
  return <div className="App"></div>;
}
export default App;
