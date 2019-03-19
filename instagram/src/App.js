import React from 'react';
import Authenticate from './components/Authentication/Authentication'
import PostsPage from './components/PostsPage/PostsPage'

const higherOrderComponent = WrappedComponent =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        render() {
            return (
                <div className="container">
                    <WrappedComponent />
                </div>
            );
        }
    };
const HOC = higherOrderComponent(PostsPage);

const App = () => {
    return <HOC />;
};

export default Authenticate(App);
