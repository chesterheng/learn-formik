import "./App.css";
import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = useState([]);

  const initialValues = {
    item: ""
  };

  const handleSubmit = ({ item }, { resetForm }) => {
    setItems(prevState => [...prevState, item]);
    resetForm(initialValues);
  };

  const validationSchema = Yup.object().shape({
    item: Yup.string().required("Item name is required")
  });

  return (
    <Fragment>
      <h2>To do List:</h2>
      <ItemList items={items} />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="name">Item:</label>
          <Field type="text" name="item" />
          <ErrorMessage name="item" />
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default App;
