import React from 'react'

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit)
    }

    componentDidUpdate() {
        this.props.init(this.props.widgetsInit)
    }
    render() {
        return(
            <ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">
                            {widget.title}
                        </li>
                    )
                }
            </ul>
        )
    }
}
export default WidgetList