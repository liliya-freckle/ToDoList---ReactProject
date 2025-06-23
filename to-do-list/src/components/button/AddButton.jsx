import React from 'react'
import styles from './Button.module.css'

const AddButton = () => {
    const handleClick = () => {
        console.log("hello")
    }

    return (
        <button className={styles.addButton}
                onClick={handleClick} > Add </button>
    )
}

export default AddButton