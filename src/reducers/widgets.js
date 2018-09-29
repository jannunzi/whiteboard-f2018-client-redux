const widgets = (state = {widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets:action.widgets
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        default:
            return state
    }
}

export default widgets