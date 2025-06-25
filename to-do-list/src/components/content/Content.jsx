import React, { useEffect, useState } from 'react'
import AddButton from '../button/AddButton'
import ListItem from './ListItem'
import styles from './Content.module.css'
import useLocalStorage from '../../hooks/useLocalStorage'


const Content = () => {

    const [items, setItems] = useLocalStorage("toDoList", [])


    const deleteItem = (id) => {
        const updatedList = items.filter((item) => item.id !== id)
        setItems(updatedList)
        // localStorage.setItem('toDoList', JSON.stringify(updatedList))
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
            <AddButton />
        </main>
    )
}

export default Content