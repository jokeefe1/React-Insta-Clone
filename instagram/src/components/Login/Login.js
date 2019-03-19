import React, { Component } from 'react';
import { Container } from '../../App.GlobalSyles';
import { StyledForm } from './Login.styles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <Container>
                <StyledForm>
                    <div>
                        <h2>Please Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleLoginSubmit}>Login</button>
                    </div>
                </StyledForm>
            </Container>
        );
    }
}

export default Login;
