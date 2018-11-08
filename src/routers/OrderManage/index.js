import React from 'react'
import {withRouter} from  'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Order extends React.Component{
    render(){
        return(
            <div className="order">
            这是订单管理
            </div>
        )
    }
}
export default withRouter(Order) 