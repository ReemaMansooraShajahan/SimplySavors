import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search() {
  return (
    <div className='img-container'>
    <div className='search-box'>
      <input type='text' placeholder='Search...'/>
      <button className='btn'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div></div>
  )
}

