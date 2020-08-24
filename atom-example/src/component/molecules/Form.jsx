import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ className, id, children }) => (
    <form className={className} id={id}>
      {children}
    </form>
)

Form.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Form
