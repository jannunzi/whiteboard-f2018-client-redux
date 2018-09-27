import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList2 = ({modules, deleteModule}) =>
    <ul className="list-group">
        {
            modules.map((module, index) =>
                <ModuleListItem
                    deleteModule={deleteModule}
                    key={index}
                    module={module}/>
            )
        }
    </ul>

export default ModuleList2