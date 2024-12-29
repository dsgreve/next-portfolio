import exp from 'constants'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'


export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>Copyright © {currentYear} Dale S. Greve</p>
    </div>
  )
}

export default Footer
