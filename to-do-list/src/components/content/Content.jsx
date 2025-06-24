import React, { useEffect, useState } from 'react'
import AddButton from '../button/AddButton'
import ListItem from './ListItem'
import styles from './Content.module.css'
import items from './../../hooks/db.json'


const Content = () => {

    localStorage.setItem("toDoList", JSON.stringify(items))

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem("toDoList")))
    }, [])

    const deleteItem = (id) => {
        const updatedList = items.filter((item)=> item.id !== id)
        setItems(updatedList)
        localStorage.getItem('toDoList', JSON.stringify(updatedList))   
    }

    return (
        <main className={styles.content}>
            <ul>
                {
                    items.map((item) =>
                        <ListItem key={item.id} name={item.name} color={item.color} deleteItem={()=> deleteItem(item.id)} />
                    )
                }
            </ul>
            <AddButton />
        </main>
    )
}

export default Content