import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/HelloWorld'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import WhiteBoard from './containers/WhiteBoard'

const courses = [
    {
        title: 'CS5200'
    },
    {
        title: 'CS5610'
    }
]

ReactDOM.render(
    <div className="container-fluid">
        <WhiteBoard courses={courses}/>
    </div>,
    document.getElementById("root")
)