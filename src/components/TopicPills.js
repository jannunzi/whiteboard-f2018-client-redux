import React from 'react'
import TopicPill from "./TopicPill";

const TopicPills = ({topics}) =>
    <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    topic={topic}
                    key={index}/>
            )
        }
    </ul>

export default TopicPills