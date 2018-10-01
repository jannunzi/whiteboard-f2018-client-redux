import CourseServiceSingleton from '../services/CourseServiceSingleton'

const widgets = (state = {widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets: CourseServiceSingleton.findWidgetsForTopic(action.topic),
                selectedTopic: action.topic
            }
        case "DELETE_WIDGET":
            CourseServiceSingleton.deleteWidget(state.selectedTopic, action.widget)
            const newWidgets = CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic)
            return {
                widgets: newWidgets.slice(0),
                selectedTopic: state.selectedTopic
            }
        case "UPDATE_WIDGET":
            CourseServiceSingleton.updateWidget(state.selectedTopic, action.widget)
            return {
                widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }

        default:
            return state
    }
}

export default widgets