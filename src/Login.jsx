import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from './actions/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import FormGroup from '@material-ui/core/FormGroup';
import { withRouter } from 'react-router-dom';
import './dashboard.css'

class Login extends Component{
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    // const [state, changeState] = useState({
    //                                 name: '',
    //                                 password: ""
    // })
    // const onNameChange = (e) => {
    //     e.persist()
    //     changeState({ name: e.target.value})
    // }
    // const onPasswordChange = (e) => {
    //     e.persist()
    //     changeState({ password: e.target.value})
    // }
    onFormSubmit = (e) => {
        e.preventDefault()  
        e.persist()  
        this.props.signInUser(this.props.name, this.props.password)
        if(this.props.name === 'demo' && this.props.password === 'demo'){
            this.props.history.push('/dashboard')
        }
    }
    render(){
        return(
            <div className="form-group" onSubmit={this.onFormSubmit}>
                <form>
                    <FormGroup>
                        <Tooltip title='Username === demo'>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                type="text"
                                onChange={(e) => this.props.changeName(e.target.value)}
                                margin="normal"
                                variant="outlined"
                            />
                        </Tooltip>
                        <br />
                        <Tooltip title="password === demo">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                onChangeCapture={(e) => this.props.changePassword(e.target.value)}
                                margin="normal"
                                variant="outlined"
                            />
                        </Tooltip>
                        
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
function mapStateToProps(state){
    console.log(state)
    return {
        auth: state.login.auth,
        name: state.login.name,
        password: state.login.password
    }
}
function mapDispatchToProps(dispatch){
    return(bindActionCreators({...loginActions}, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));