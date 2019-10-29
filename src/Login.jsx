import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import { withRouter } from 'react-router-dom';
import './dashboard.css'

function Login(props){
    const [state, changeState] = useState({
                                    name: '',
                                    password: ""
    })
    const onFormSubmit = (e) => {
        e.preventDefault()
        if(state.name ==="demo" || state.password === "demo"){
            props.history.push("/dashboard")
        }
        
    }
        return(
            <div className="form-group" onSubmit={onFormSubmit}>
                <form>
                    <FormGroup>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            onChange={e => changeState({ name: e.target.value})}
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onChange={e => changeState({ password: e.target.value})}
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <Button variant="contained" color="primary" component="button" type="submit"> 
                                Submit
                        </Button>
                    </FormGroup>
                </form>
            </div>
        )
}
export default withRouter(Login);