import React from 'react'


export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>Copyright © {currentYear} Dale S. Greve</p>
    </div>
  )
}

export default Footer
