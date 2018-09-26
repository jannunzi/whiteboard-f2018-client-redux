import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList from "../components/ModuleList";
import CourseGrid from "../components/CourseGrid";
import CourseTable from "../components/CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    render() {
        return (
            <div>
                <h1>WhiteBoard ({this.state.courses.length})</h1>
                <Router>
                    <div>
                        <Link to="/course/table">Table</Link>
                        <Link to="/course/grid">Grid</Link>

                        <Route path="/course/table"
                               render={() => <CourseTable courses={this.props.courses}/>}/>
                        <Route path="/course/grid"
                               component={CourseGrid}/>
                    </div>
                </Router>
            </div>
        );
    }
}