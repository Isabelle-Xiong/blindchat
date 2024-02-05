import axios from 'axios'

// setting up an html form that takes username as input and a button to submit. 
//Once this form submits, it triggers and onsubmit function and sets a user in a user state with on off callback which lives in AuthPage component

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        //after submit form, this is to make axios call http request to node js server
        axios.post('http://localhost:3001/authenticate',
            //input data: username to make the http request
            { username: value }
        )
            //call on auth callback with response.data as object, and we want to override the secret with the value we passed in
            .then(r => props.onAuth({ ...r.data, secret: value }))
            //catch error and console log
            .catch(e => console.log('error', e))
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;