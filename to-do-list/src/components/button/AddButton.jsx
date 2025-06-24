import React, {useState} from 'react'
import styles from './Button.module.css'

const AddButton = () => {
    const handleClick = () => {
        console.log("hello")
    }
    const [newItem, setNewItem] = useState ("")

    return (
        <button className={styles.addButton}
                onClick={handleClick} 
                type='text'
                required
                value={newItem}
                onChange = {(e) => setNewItem(e.target.value)}> Add </button>
    )
}

export default AddButton