import React from 'react'

const TopicPill = ({topic, selectTopic, selected}) =>
    <li className="nav-item">
        <a onClick={() => selectTopic(topic)}
           className={selected ? "nav-link active":"nav-link"}>
            {topic.title}
        </a>
    </li>

export default TopicPill