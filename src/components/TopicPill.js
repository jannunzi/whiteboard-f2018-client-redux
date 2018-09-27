import React from 'react'

const TopicPill = ({topic}) =>
    <li className="nav-item">
        <a className="nav-link">
            {topic.title}
        </a>
    </li>

export default TopicPill