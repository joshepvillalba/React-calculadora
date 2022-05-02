import React from 'react'
import '../styles/clearButton.css';

export const ClearButton = (props) => {
  return (
    <div className='clearButton' onClick={props.clear} >
        { props.children }
    </div>
  )
}
