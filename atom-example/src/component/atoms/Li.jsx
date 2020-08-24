import React from 'react'
import PropTypes from 'prop-types'

const Li = ({ className, id, children }) => (
    <li className={className} id={id}>
      {children}
    </li>
)

Li.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Li
