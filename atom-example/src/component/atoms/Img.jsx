import React from 'react'
import PropTypes from 'prop-types'

const Img = ({ className, id, src, alt, width, height }) => (
    <img className={className} id={id} src={process.env.PUBLIC_URL + src} alt={alt} width={width} height={height} />
)

Img.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width:PropTypes.number,
  height:PropTypes.number
}

export default Img
