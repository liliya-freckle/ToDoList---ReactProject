import React from 'react'
import { Link } from 'react-router-dom'

const News = (props) => {

    const news = props.news
    return (
        <ul>
            {
                news.map((item) =>
                    <Link to={`/news/${item.id}`}>Новость {item.id}</Link>)
            }


        </ul>
    )
}

export default News