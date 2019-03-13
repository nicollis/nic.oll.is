import React, { Component } from 'react'
import { Redirects } from '../data'

class Redirect extends Component {
  
  redirect(key) {
    const url = Redirects[key] || Redirects['default'] 
    window.location = url;
    return url;
  }

  render () {

    const { key } = this.props.match.params

    const url = this.redirect(key);

    return (
      <div className="text-center">
        <h1 className='h2'>Loading Page</h1>
        <p>If page doesn't load in a few <a href={url}>Click Here.</a></p>
      </div>
    )
  }
}

export default Redirect
