import React, {Component, PropTypes} from 'react'

const App = ({value}) =>
    <div>
        {value}
    </div>

App.propTypes = {
    value: PropTypes.string.isRequired
}

export default App
