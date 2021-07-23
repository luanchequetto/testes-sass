import PropTypes from 'prop-types'
import React from 'react'

function FormInput(props) {
    return (
      <div>
        <h3>{props.title}</h3>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e) => props.setFunc(e.target.value)}></input>
      </div>
    )
  }
  
  FormInput.propTypes = {
    props: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setFunc: PropTypes.func

  }

  export default FormInput