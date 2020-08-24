import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, id, className, value }) => (
    <input type={type} id={id} className={className} value={value} />
)

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    value:PropTypes.string
}

export default Input
