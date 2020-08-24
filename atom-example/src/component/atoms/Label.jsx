import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ className, id, children }) => (
    <label className={className} id={id}>
      {children}
    </label>
)

Label.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Label
