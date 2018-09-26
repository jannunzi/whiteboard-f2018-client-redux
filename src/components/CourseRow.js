import React from 'react'

const CourseRow = ({course, deleteCourse}) =>
    <tr>
        <td>{course.title} {course.id}</td>
        <td>
            <button className="btn btn-primary">Edit</button>
            <button onClick={() => deleteCourse(course)} className="btn btn-danger">Delete</button>
        </td>
    </tr>

export default CourseRow