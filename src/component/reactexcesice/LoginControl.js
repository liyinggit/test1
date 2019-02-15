import React from 'react';

/**
 * 有条件的渲染
 */
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let greeting;

        if (isLoggedIn) {
            button = <button onClick={()=>this.handleLogoutClick()}>Logout</button>
        } else {
            button = <button onClick={()=>this.handleLoginClick()}>Login</button>;
        }

        if (isLoggedIn) {
            greeting =  <h1>Welcome back!</h1>;
        }else{
            greeting =  <h1>Please sign up.</h1>;
        }

        return (
            <div>
                {greeting}
                {/*写法一*/}
                {button}

                {/*写法二*/}
                {
                    isLoggedIn?
                        (<button onClick={()=>this.handleLogoutClick()}>Logout</button>)
                        :
                        (<button onClick={()=>this.handleLoginClick()}>Login</button>)
                }
            </div>
        );
    }
}

export default LoginControl;
