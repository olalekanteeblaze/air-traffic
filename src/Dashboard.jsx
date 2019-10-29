import React, { Component } from 'react';
import { cities } from './cities';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from './actions/modal';
import ModalComponent from './ModalComponent';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { Menu, FormControl, InputLabel, MenuItem, Select, Grid, Paper} from '@material-ui/core';
import './dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.openModal = this.openModal.bind(this)
    }
    componentWillMount(){
        this.props.getInitialFlights()
    }
    openModal(city){
        this.props.openModal()
        this.props.getInitialFlights(city.icao)
    }
    render(){
        return(
            <div>
                <GridList cellHeight={180} cols={3} >
                    <GridListTile cols={3} style={{ height: 'auto'}}>
                        <ListSubheader component="div">Check flights for cities</ListSubheader>
                    </GridListTile>
                    {cities.map(city => 
                        <GridListTile key={city.city} onClick={() => this.openModal(city)}>
                            <img src={city.image} alt={city.city} />
                            <GridListTileBar 
                                title={city.city}
                            />
                        </GridListTile>
                )}
                <Modal 
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                    onClose={this.props.closeModal}
                    className="modal"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    display={this.props.display}
                    >
                    <Fade in={this.props.open}>
                        <div className="paper"> 
                        <FormControl className="form">
                            <InputLabel id="demo-simple-select-label">Select time range to filter arrivals and departure</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            autoWidth={false}
                            value={10}
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}>2 hours ago</MenuItem>
                            <MenuItem value={30}>12 hours ago</MenuItem>
                            <MenuItem value={60}>24 hours ago</MenuItem>
                            </Select>
                        </FormControl>
                            <div>
                                {this.props.loading ? 
                                    <h3>Loading...</h3> :
                                    <Grid>
                                    {this.props.arrival.map(flight => 
                                        <Grid>
                                            <Paper>
                                                <div>{flight.callsign}</div>
                                            </Paper>
                                        </Grid>
                                    )}
                                </Grid>
                                }
                                
                            </div>
                        </div>
                    </Fade>
                </Modal>
                </GridList>
                {this.props.err? <div> Unable to get Air traffic for sprcified period</div>: <div></div>}
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        open: state.modal.open,
        display: state.modal.display,
        arrival: state.modal.arrival,
        loading: state.modal.loading,
        err: state.modal.err,
    }
}
function mapDispatchToProps(dispatch){
   return(bindActionCreators({ ...modalActions }, dispatch)) 
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);