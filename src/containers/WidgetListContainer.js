import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatcherToPropertyMapper = dispatch => ({
    init: (widgets) => dispatch({
        type: 'INIT',
        widgets: widgets
    })
})

const WidgetListContainer = connect
(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer