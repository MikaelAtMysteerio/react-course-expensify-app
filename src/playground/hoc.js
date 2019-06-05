import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>info = {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Admin super secrets</p>}
            <WrappedComponent {...props} />
        </div>
    )
}
const Info2 = (props) => (
    <div>
        <h1>Info</h1>
        <p>info = Super secret stuff</p>
    </div>
);
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent /> : <p>didnt say the magic word</p>}
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info2);


// ReactDOM.render(<AdminInfo isAdmin={false} info="a lot of info right here if  you would lijr"/>, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={false} />, document.getElementById('root'));
