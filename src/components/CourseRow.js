import React from 'react'

const CourseRow = ({course}) =>
    <tr>
        <td>{course.title}</td>
        <td>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger"><Delete></Delete></button>
        </td>
    </tr>

export default CourseRow