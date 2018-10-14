import React, {Component} from 'react'

class WidgetListComponent extends Component {
    componentDidUpdate() {
    }

    render() {
        return(
            <ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index} className="list-group-item">
                            {widget.title}
                        </li>
                    )
                }
            </ul>
        )
    }
}
export default WidgetListComponent