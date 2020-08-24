import React from 'react'
import PropTypes from 'prop-types'

const H1 = ({ className, id, children }) => (
    <h1 className={className} id={id}>
      {children}
    </h1>
)

H1.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default H1
