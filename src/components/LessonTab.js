import React from 'react'

const LessonTab = ({lesson}) =>
    <li className="nav-item">
        <a className="nav-link active">
            {lesson.title}
        </a>
    </li>

export default LessonTab