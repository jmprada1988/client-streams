import React, {Component} from 'react'
import {connect} from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchstream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';


class StreamDelete extends Component {

    componentDidMount(){
        this.props.fetchstream(this.props.match.params.id);
    }

    renderActions = () => (
        <React.Fragment>
            <button 
            onClick={() => this.props.deleteStream(this.props.match.params.id)} 
            className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
    )
    render () {
        const { stream } = this.props;
        return ( 
            <Modal
            title="Delete Stream"
            content={`Are you sure you want to delete ${stream ? stream.title : 'this stream'} ?`}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
             /> );
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}
 
export default connect(mapStateToProps, { fetchstream, deleteStream })(StreamDelete);