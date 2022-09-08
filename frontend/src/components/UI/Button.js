import React from "react"
import style from "./Button.module.css"

const Button = props => {

  const triggerEvent = () => {
    props.onClick();
  }

  return <button className={style.button} onClick={triggerEvent}>{props.children}</button>;
}

export default Button;