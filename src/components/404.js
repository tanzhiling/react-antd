import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class NoMatch extends React.Component{
    render(){
        return(
            <div className="login">
            这是404页面
            </div>
        )
    }
}
export default NoMatch; 