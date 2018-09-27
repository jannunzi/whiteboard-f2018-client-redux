import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList2 = ({modules}) =>
    <ul className="list-group">
        {
            modules.map((module, index) =>
                <ModuleListItem
                    key={index}
                    module={module}/>
            )
        }
    </ul>

export default ModuleList2