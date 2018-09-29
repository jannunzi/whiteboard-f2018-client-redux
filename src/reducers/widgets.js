const widgets = (state = {widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets:action.widgets
            }
        default:
            return state
    }
}

export default widgets