import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import {Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService";
import WidgetListComponent from "./WidgetListComponent";

import widgets from '../reducers/widgets'
import WidgetListContainer from '../containers/WidgetListContainer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(widgets)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();

        this.state = {
            courseId: parseInt(this.props.match.params.courseId),
            courses: [],
            course: {
                modules: []
            },
            selectedModule: {},
            selectedLesson: {},
            selectedTopic: {}
        }
    }

    componentDidMount() {
      this.courseService.findCourseById(this.state.courseId)
        .then(course => {
          console.log(course);
          const selectedModule = course.modules ? course.modules[0] : {};
          console.log(selectedModule);
          const selectedLesson = selectedModule.lessons ? selectedModule.lessons[0] : {};
          const selectedTopic = selectedLesson.topics ? selectedLesson.topics[0] : {};
          this.setState({
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic: selectedTopic
          });
        })
    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
    }

    render() {
        return(
            <div>
                <h2>Course Editor:
                    {this.state.course.title}
                    ({this.props.match.params.courseId})
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            modules={this.state.course.modules}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}/>

                        <br/>

                        <TopicPills
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            topics={this.state.selectedLesson.topics}/>

                        <br/>

                        {/*<WidgetListComponent widgets={[*/}
                            {/*{title: 'w1'},{title: 'w2'},{title: 'w3'}*/}
                        {/*]}/>*/}

                        <Provider store={store}>
                            <WidgetListContainer widgets={this.state.selectedTopic.widgets}/>
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}
