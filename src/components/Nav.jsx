import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [Show,setShow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })

  console.log(Show);
  return (
    <div className={`nav ${Show && 'nav-black'}`}>
      <img width={'150px'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix logo" />
    </div>
  )
}

export default Nav