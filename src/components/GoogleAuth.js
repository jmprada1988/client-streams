import React, { Component } from 'react';
import {connect} from 'react-redux'
import { signIn, signOut } from '../actions/index';



class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: "717884672265-g3u9l6cac6igm0ndk6qjpm49ae8jtsgn.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange =(isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null) {
            return <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon"/>
            Api not loggin in...
        </button>
        }else if (this.props.isSignedIn){
            return <button className="ui red google button" onClick={this.onSignOutClick}>
                <i className="google icon"/>
                Sign out
            </button>
        }else {
            return <button className="ui red google button" onClick={this.onSignIn}>
                <i className="google icon"/>
                Sign in with google
            </button>
        }
    }
    render() { 
        return ( <div>{this.renderAuthButton()}</div> );
    }
}
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}
 
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);