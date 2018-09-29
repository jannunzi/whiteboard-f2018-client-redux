import React from 'react'

const HeadingWidget = ({widget}) =>
    <div>
        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
    </div>

export default HeadingWidget