import React, { useState } from 'react';
import './AddItems.css';
import Listitems from '../ListItems/Listitems.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
export const ListContext=React.createContext();
function AddItems() {
    const [text,setText]=useState('');
    const [items,setItems]=useState([]);
    const addItem=()=>{
      setItems((Oldtext)=>{
       return [...Oldtext,text]
      });
      
      setText('');

    }
    const removeitem=(index)=>{
      items.splice(index,1);
      setItems([...items])
    }
  return (
    <div>
        <div className='add-items'>
            <input type='text' value={text} placeholder='Add a Items' onChange={(e)=>setText(e.target.value)}/>
            <div className='plus-icon'>
            <FontAwesomeIcon icon={faCirclePlus} className='icon' onClick={addItem}/>
            </div>
        </div>
        <ListContext.Provider value={items}>
        <Listitems list={items} delete={removeitem}/>
        </ListContext.Provider>
       
        
    </div>    
    
  );
}

export default AddItems;
