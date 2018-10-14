import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList3 from "../components/ModuleList3";
import CourseGrid from "../components/CourseGrid";
import CourseTable from "../components/CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "../components/CourseEditor";

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        this.courseService.findAllCourses()
          .then(courses => this.setState({
            courses: courses
          }))
    }
    addCourse = newCourse => {
        this.courseService.createCourse(newCourse)
        this.courseService.findAllCourses()
          .then(courses => this.setState({
            courses: courses
        }))
    }

    deleteCourse = courseToDelete => {
        this.courseService.deleteCourse(courseToDelete.id)
        this.courseService.findAllCourses()
          .then(courses => this.setState({
            courses: courses
        }))
    }

    deleteModule = module =>{
        this.courseService.deleteModule(module)
        this.courseService.findAllCourses()
          .then(courses => this.setState({
            courses: courses
        }))
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
                               render={() =>
                                   <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/grid"
                               component={CourseGrid}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                    </div>
                </Router>
            </div>
        );
    }
}