import React from 'react'
import PropTypes from 'prop-types'

const H2 = ({ className, id, children }) => (
    <h2 className={className}> id={id}
      {children}
    </h2>
)

H2.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default H2
