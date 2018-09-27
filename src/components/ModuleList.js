import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules, deleteModule, selectModule, selectedModule}) =>
    <ul className="list-group">
        {
            modules.map((module, index) =>
                <ModuleListItem
                    selected={selectedModule === module}
                    selectModule={selectModule}
                    deleteModule={deleteModule}
                    key={index}
                    module={module}/>
            )
        }
    </ul>

export default ModuleList