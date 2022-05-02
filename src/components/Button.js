import React from 'react'
import '../styles/Button.css';

export const Button = (props) => {

    const isOperator =  (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

  return (
    <div onClick={() => props.click(props.children) } className={ `button-container ${ isOperator(props.children) ? 'opetator' : null }` }>
        {props.children}
    </div>
  )
}
