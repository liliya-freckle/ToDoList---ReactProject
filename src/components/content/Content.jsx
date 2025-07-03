import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import styles from './Content.module.css'
import useLocalStorage from '../../hooks/useLocalStorage'
import AddItem from '../button/AddItem'


const Content = () => {

    const [items, setItems] = useLocalStorage("toDoList", [])
    const [newItem, setNewItem] = useState("")


    const deleteItem = (id) => {
        const updatedList = items.filter((item) => item.id !== id)
        setItems(updatedList)
        // localStorage.setItem('toDoList', JSON.stringify(updatedList))
    }

    const addItem = (e) => {
        e.preventDefault()
        console.log({newItem})
    }

    return (
        <main className={styles.content}>
            <ul>
                {
                    items.map((item) =>
                        <ListItem key={item.id} name={item.name} color={item.color} deleteItem={() => deleteItem(item.id)} />
                    )
                }
            </ul>
            <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem}/>
        </main>
    )
}

export default Content