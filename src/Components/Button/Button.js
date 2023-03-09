import React from 'react'
import "./Button.styles.scss"

const BUTTON_TYPE_CLASSES ={
    google:"google-sign-in",
    inverted: "inverted"
}

const Button = ({buttonName, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{buttonName}</button>
  )
}

export default Button