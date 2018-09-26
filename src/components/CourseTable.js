import React from 'react'
import CourseRow from "./CourseRow";

const CourseTable = ({courses}) =>
    <table className="table">
        <tbody>
        {
            courses.map((course, index) =>
                (<CourseRow
                    key={index}
                    course={course}/>)
            )
        }
        </tbody>
    </table>

export default CourseTable