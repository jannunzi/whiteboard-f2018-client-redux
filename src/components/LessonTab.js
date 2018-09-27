import React from 'react'

const LessonTab = ({lesson, selectLesson, selected}) =>
    <li className="nav-item">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
        </a>
    </li>

export default LessonTab