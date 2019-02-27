import React from 'react'
import PropTypes from 'prop-types'

function importAll(r) {
  let logos = {};
  r.keys().map((item, index) => { return logos[item.replace('./', '')] = r(item); });
  return logos;
}

const logos = importAll(require.context('./logos', false, /\.(png|jpe?g|svg)$/));

const Logo = (props) => {
  return (
    <img className={`logos ${props.small && 'logo-small'} ${props.medium && 'logo-medium'}`} src={logos[props.image]} alt={props.alt} />
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Logo
