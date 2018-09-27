import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    lesson={lesson}
                    key={index}/>
            )
        }
    </ul>

export default LessonTabs