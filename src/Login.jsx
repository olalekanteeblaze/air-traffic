import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import './dashboard.css'

class Login extends Component{
    render(){
        return(
            <div className="form-group">
                <form>
                    <FormGroup>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            // onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            // onChange={handleChange('name')}
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
}
export default Login;