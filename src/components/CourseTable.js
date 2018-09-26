import React from 'react'
import CourseRow from "./CourseRow";

const CourseTable = ({courses, deleteCourse}) =>
    <table className="table">
        <tbody>
        {
            courses.map((course, index) =>
                (<CourseRow
                    deleteCourse={deleteCourse}
                    key={index}
                    course={course}/>)
            )
        }
        </tbody>
    </table>

export default CourseTable