import React from 'react'

const ListWidget = ({widget}) =>
    <div>
        <ul className="list-group">
            {
                widget.options.split(',').map((option, index) =>
                    <li key={index}
                        className="list-group-item">
                        {option}
                    </li>
                )
            }
        </ul>
    </div>

export default ListWidget