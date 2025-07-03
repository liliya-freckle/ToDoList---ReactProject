import React, {useState} from 'react'
import styles from './Button.module.css'

    const AddItem = ({newItem, setNewItem, addItem}) => {
        const handleClick1 = (name) => {
            console.log("hello" + name)
            }
        
        const [category, setCategory] = useState ("")

        return (
            <form>
                <input 
                    type="text" 
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}>
                </input>
                <select value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="study"
                    >
                        Study
                    </option>
                    <option value="work"
                    >
                        Work
                    </option>
                </select>

                <button className={styles.addButton}
                    type="submit"
                    onClick={addItem} 
                    required
                    value={newItem}
                    onChange = {(e) => setNewItem(e.target.value)}> Add </button>
                <p>{newItem}</p>
                <p>{category}</p>
            </form>
                    )
                }

    export default AddItem