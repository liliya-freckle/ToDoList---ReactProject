import React, {useState} from 'react'
import styles from './Button.module.css'

    const AddButton = () => {
        const handleClick = () => {
            console.log("hello")
            }

        const handleClick1 = (name) => {
            console.log("hello" + name)
            }
        const [newItem, setNewItem] = useState ("")

        return (
            <form>
                <input 
                    type="text" 
                    required>

                </input>

                <button className={styles.addButton}
                    onClick={() => {
                        handleClick1("John")
                            }} 
                    required
                    value={newItem}
                    onChange = {(e) => setNewItem(e.target.value)}> Add </button>
            </form>
                    )
                }

    export default AddButton