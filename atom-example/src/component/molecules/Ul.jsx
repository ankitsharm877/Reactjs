import React from 'react'
import PropTypes from 'prop-types'

const Ul = ({ className, children }) => (
    <ul className={className}>
      {children}
    </ul>
)

Ul.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Ul
