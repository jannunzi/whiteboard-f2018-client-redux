import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons, selectLesson, selectedLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    lesson={lesson}
                    key={index}/>
            )
        }
    </ul>

export default LessonTabs