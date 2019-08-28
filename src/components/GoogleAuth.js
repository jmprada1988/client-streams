import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null }
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: "717884672265-g3u9l6cac6igm0ndk6qjpm49ae8jtsgn.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null) {
            return <div>I do not know if signed in</div>
        }else if (this.state.isSignedIn){
            return <div>I am signed in</div>
        }else {
            return <div>Not signed in</div>
        }
    }
    render() { 
        return ( <div>{this.renderAuthButton()}</div> );
    }
}
 
export default GoogleAuth;