import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>
    <tr>
        <td>{course.title} {course.id}</td>
        <td>
            <Link
                className="btn btn-primary" to={`/course/${course.id}/edit`}>Edit</Link>
            <button onClick={() => deleteCourse(course)} className="btn btn-danger">Delete</button>
        </td>
    </tr>

export default CourseRow