import React from 'react'
import { useParams } from "react-router-dom"

const NewsPage = (props) => {
    const { id } = useParams();
    const news = props.news.find(news => news.id == id)

    return (
        <div>
            <p>{news.text}</p>
        </div>
    )
}

export default NewsPage