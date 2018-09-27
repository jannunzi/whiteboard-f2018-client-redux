import React from 'react'
import TopicPill from "./TopicPill";

const TopicPills = ({topics, selectTopic, selectedTopic}) =>
    <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    selected={selectedTopic===topic}
                    selectTopic={selectTopic}
                    topic={topic}
                    key={index}/>
            )
        }
    </ul>

export default TopicPills