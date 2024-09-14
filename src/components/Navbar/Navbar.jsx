import React from 'react'
import Logo from "../../assets/logo.png";

function Navbar() {
  return (<div className='flex '>
     <div>upper  navbar </div>
    
     <div>
      <a href="#"><img src={Logo} alt="Logo" height={50} /></a>
     </div>

    <div className='flex'>
      <div className="group">
        <input 
          type="text" 
          placeholder='search'
          className="w-[200px] h-20 sm:w-[200px] group-hover:w-[300px]" 
        />
      </div>
     
    </div>
    </div>
  )

}

export default Navbar

