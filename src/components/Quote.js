import React from 'react'
import './Quote.module.scss'


const Quote = () => {
  return (
    <div className="box">
      <p className="text"><q>Freedom is nothing but a chance to be better.</q></p>
      <p><a 
      className="subtext"
      href="https://www.britannica.com/biography/Albert-Camus" rel="noopener noreferrer" 
      target="_blank" >Albert Camus</a></p>
    </div>
  )
}

export default Quote
