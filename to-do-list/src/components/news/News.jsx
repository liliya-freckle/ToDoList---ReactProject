import React from 'react'
import { Link } from 'react-router-dom'
import styles from './News.module.css'

const News = (props) => {

    const news = props.news
    return (
        <ul>
            {
                news.map((item) =>
                    <Link to={`/news/${item.id}`} className={styles.news}>Новость {item.id}</Link>)
            }


        </ul>
    )
}

export default News