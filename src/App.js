import "./App.css";
import React, { Fragment, useState } from "react";
import { Formik, Form, Field } from "formik";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = ({ item }) => {
    setItems(prevState => [...prevState, item]);
  };

  return (
    <Fragment>
      <h2>To do List:</h2>
      <ItemList items={items} />
      <Formik onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Item:</label>
          <Field type="text" name="item" />
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default App;
