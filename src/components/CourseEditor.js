import React, {Component} from 'react'

export default class CourseEditor extends Component {
    render() {
        return(
            <h2>Course Editor:
                {this.props.match.params.courseId}
            </h2>
        )
    }
}
