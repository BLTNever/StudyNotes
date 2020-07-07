import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxPage from '@views/ReduxPage/store/action'

const Connector = connect(state => ({
    ...state
}), dispatch => ({
    reduxPageAction: bindActionCreators(reduxPage, dispatch)
}))

export default Connector
