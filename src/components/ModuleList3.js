import React from 'react'
import ModuleListItem from "./ModuleListItem";

export default class ModuleList3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newModuleTitle: '',
            modules: [
                {
                    title: 'Week 1'
                },
                {
                    title: 'Week 2'
                }
            ]
        }
    }

    formChanged = (event) => {
        this.setState({
            newModuleTitle: event.target.value
        })
    }

    addNewModule = () => {
        let modules = this.state.modules;
        modules.push({
            title: this.state.newModuleTitle
        })
        this.setState({
            modules: modules
        })
    }

    render() {
        return(
            <h2>
               <ul className="list-group">
                   <li className="list-group-item active">
                       Modules
                   </li>
                   <li className="list-group-item">
                       <input onChange={this.formChanged} className="form-control"/>
                       <button onClick={this.addNewModule} className="btn btn-primary">Add</button>
                   </li>
                   {
                       this.state.modules.map((module, index) => (
                           <ModuleListItem
                               key={index}
                               title={module.title}/>
                       ))
                   }
               </ul>
            </h2>
        )
    }
}