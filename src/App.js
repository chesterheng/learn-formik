import "./App.css";
import React, { Fragment, useState } from "react";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setItems(prevState => [...prevState, item]);
    setItem("");
  };

  const handleChange = ({ target: { value } }) => {
    setItem(value);
  };

  return (
    <Fragment>
      <h2>To do List:</h2>
      <ItemList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item:</label>
        <input type="text" value={item} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </Fragment>
  );
};

export default App;
