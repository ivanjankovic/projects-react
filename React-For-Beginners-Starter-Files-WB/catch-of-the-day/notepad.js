import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
  return (
    <div>
      <h1>Ivan</h1>
      <p>a little blurb about yourself</p>
      <ul>
        <li>1</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'))