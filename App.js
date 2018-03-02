import React, {Component, PropTypes} from 'react'

const Counter = ({value}) =>
    <div>
        {value}
    </div>

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

export default Counter
