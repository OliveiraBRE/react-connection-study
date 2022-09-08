import React, { useRef } from "react";
import Button from "../UI/Button";

const Form = props => {
  const text = useRef();
  
  const displayTextHendler = (event) => {
    event.preventDefault();

    props.onGetData(text.current.value);
  }

  const working = () => {
    console.log('working');
  }

  return(
    <form onSubmit={displayTextHendler}>
      <input type="text" ref={text}/>
      <Button type="submit" onClick={working}>Send</Button>
    </form>
  );
};

export default Form;