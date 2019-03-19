import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            }
        }

        handleLogout = () => {
            this.setState({ loggedIn: !this.state.loggedIn })
        }

        render() {
            return <>{this.state.loggedIn ? <App handleLogout={this.handleLogout} /> : <Login />}</>;
        }
    };

export default Authenticate;
