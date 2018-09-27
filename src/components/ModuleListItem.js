import React from 'react'

const ModuleListItem = ({module, deleteModule}) =>
    <li className="list-group-item">
        {module.title}
        <button
            onClick={() => deleteModule(module)}>
            Delete
        </button>
    </li>

export default ModuleListItem