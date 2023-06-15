import React from "react"

const Footer = () => {
    let year = new Date();



  return (
    <div className='footer'><p>Copyright &copy; {year.getFullYear()}</p>
    </div>
  )
}

export default Footer