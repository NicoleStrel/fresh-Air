
import React from 'react'
import PropTypes from 'prop-types'

class CountryPage extends React.Component {

    render() {
        return (
            <div>
                <p>This is the page for {this.props.cou}</p>
            </div>
        )
    }
}

export default CountryPage