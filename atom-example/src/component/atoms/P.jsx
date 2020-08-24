import React from 'react'
import PropTypes from 'prop-types'

const P = ({ className, id, children }) => (
    <p className={className} id={id}>
      {children}
    </p>
)

P.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default P
