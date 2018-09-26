import React, {Component} from 'react'

export default class CourseAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value
        })

    render() {
        return(
            <div>
                <input
                    onChange={this.updateForm}
                    className="form-control"/>
                <button
                    onClick={() => this.props.addCourse({
                        id: (new Date()).getTime() + '',
                        title: this.state.title
                    })}
                    className="btn btn-success">Add</button>
            </div>
        )
    }
}