import React from 'react'

const ListWidget = ({widget, updateWidget}) => {
    let textarea
    return(
    <div>
        <ul className="list-group">
            {
                widget.options.split('\n').map((option, index) =>
                    <li key={index}
                        className="list-group-item">
                        {option}
                    </li>
                )
            }
        </ul>
        <textarea
            className="form-control"
            defaultValue={widget.options}
            ref={node => textarea=node}></textarea>
        <button onClick={() => {
            widget.options = textarea.value
            updateWidget(widget)
        }}
                className="btn btn-success btn-block">
            Update
        </button>
    </div>)
}
export default ListWidget