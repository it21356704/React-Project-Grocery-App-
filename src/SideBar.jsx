import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, 
  BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs' 
  import './All.css';
  import { Link } from 'react-router-dom';


function SideBar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive':''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsCart3 className='icon' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href=''>
              <BsGrid1X2Fill className='icon' />  <a href="/Home">Dashboard</a>
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
              <BsFillArchiveFill className='icon' />  <a href="/products">Products</a>
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
              <BsFillGrid3X3GapFill className='icon' />  <a href="/categories">Categories</a>
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
              <BsPeopleFill className='icon' />  <a href="/customers">Customers</a>
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
              <BsFillGearFill className='icon' />  <a href="/setting">Setting</a>
            </a>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar