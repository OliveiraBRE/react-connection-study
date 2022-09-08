import React, { Fragment } from "react";
import axios from "axios";

import Button from "./components/UI/Button";
import Form from "./components/Form/Form";

function App() {

  const displayHelloHandler = async () => {
    try {
      const hello = await axios.get('http://localhost:9901/');
      console.log(hello.data);

    } catch (error) {
      console.log(error)
    }
  }

  const displaySysdateHandler = async () => {
    try {
      const { data } = await axios.get('http://localhost:9901/sysdate');
      const resultData = await JSON.parse(data)

      console.log(resultData[0].SYSDATE);
    } catch (error) {
      console.log(error);
    }
  }

  const getSomething = (data) => {
    try {
      axios.post('http://localhost:9901/id', {
          id: data
      })
      .then(result => console.log(result))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Form onGetData={getSomething} />
      <Button onClick={displayHelloHandler}>Click Here</Button>
      <Button onClick={displaySysdateHandler}>Sysdate</Button>
    </Fragment>
  );
}

export default App;
