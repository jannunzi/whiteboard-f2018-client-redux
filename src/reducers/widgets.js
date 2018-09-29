const widgets = (state = {widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets: action.courseService.findWidgetsForTopic(action.topic),
                selectedTopic: action.topic,
                courseService: action.courseService
            }
        case "DELETE_WIDGET":
            state.courseService.deleteWidget(state.selectedTopic, action.widget)
            const newWidgets = state.courseService.findWidgetsForTopic(state.selectedTopic)
            return {
                widgets: newWidgets.slice(0),
                selectedTopic: state.selectedTopic,
                courseService: state.courseService
            }
        default:
            return state
    }
}

export default widgets