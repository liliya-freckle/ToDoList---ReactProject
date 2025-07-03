import React, { useState } from 'react'

const ListItem = (props) => {

    const { name, color } = props;
    const [checked, setChecked] = useState(false);
    const handleCheckedState = () => {
        setChecked(!checked)
    }

    return (
        <div className='item'>
            <input type='checkbox'
            onChange={handleCheckedState}
            checked={checked}
            >
            </input>
            <label style={checked
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "none" }}>{name}</label>
            <button 
                onClick={() => props.deleteItem(props.id)}>
                Delete
            </button>
        </div>
    )
}

export default ListItem