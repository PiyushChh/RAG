import React, { useState } from 'react'
import { FaBars,FaHome, FaExpandArrowsAlt,FaFileUpload,FaQuestion,FaRocketchat } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const SideBar = ({children}) => {
  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{setIsOpen(!isOpen)}
  const menuItem=[
    {
        path:"/",
        name:"Home",
        icon: <FaHome />
    },
    {
        path:"/rag",
        name:"RAG",
        icon: <FaFileUpload />
    },
    {
        path:"/category",
        name:"Category",
        icon: <FaQuestion />
    },
    {
        path:"/chat",
        name:"Chat",
        icon: <FaRocketchat />
    }

  ]
  return (<>
  <div className='container'>
    <div style={{width: isOpen?"300px":"50px"}}className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen? "block":"none"}}className="logo">Menu</h1>
            <div className="bars">
            <FaBars style={{marginLeft: isOpen? "80px":"0px"}} onClick={toggle}/>
            </div>
        </div>
        {
        menuItem.map((item,index)=>(
        <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className='icon'>{item.icon}</div>
            <div style={{display: isOpen? "block":"none"}} className="link_text">{item.name}</div>
        </NavLink>
        ))
  }
    </div>
    <main>{children}</main>
  </div>
  
  
  </>
    
  )
}

export default SideBar