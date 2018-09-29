import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatcherToPropertyMapper = dispatch => ({
    init: (widgets, topic, courseService) => dispatch({
        type: 'INIT',
        widgets: widgets,
        topic: topic,
        courseService: courseService
    }),
    deleteWidget: (widget) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    })
})

const WidgetListContainer = connect
(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer