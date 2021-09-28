import { useState } from "react";

import "./App.css";
import { Form } from "./Form";

const App = () => {
  const [userForm, setUserForm] = useState([]);

  const handleForm = (data) => {
    setUserForm([...userForm, data]);
  };

  

  return (
    <div className="wrapper">
      <Form handleForm={handleForm} />
     <ul> {userForm.map((item, index) => (
        <Address  key={index} address={item.address} />
      ))}
      </ul>
    </div>
  );
};

const Address = (props) => {
  return <li className="address"  >  Address - {props.address}</li>;
};

export default App;
