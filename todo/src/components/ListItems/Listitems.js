import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { ListContext } from '../AddItems/AddItems';
import './Listitems.css'

function Listitems(props) {
    
    let items=props.list;
    const removeitem=props.delete;
    return (
    <div>
        <ul >
            {items.map((item,index)=>{
                return <li key={index}>{<FontAwesomeIcon icon={faRectangleXmark} className='cancel-icon'  onClick={()=>{removeitem(index)}}  />}{item}</li>
            })}
        </ul>
        <h1></h1>
      
    </div>
  );
}

export default Listitems;
