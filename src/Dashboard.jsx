import React, { Component } from 'react';
import { cities } from './cities';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from './actions/modal';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { FormControl, InputLabel, MenuItem, Select, Grid, Paper, CircularProgress } from '@material-ui/core';
import './dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.openModal = this.openModal.bind(this)
        this.changeTime = this.changeTime.bind(this)
    }
    // componentWillMount(){
    //     this.props.getInitialFlights()
    // }
    componentWillReceiveProps(nextProps){
        const end = Math.round((new Date()).getTime() / 1000);
        if(nextProps.begin !== this.props.begin){
            this.props.getInitialFlights(nextProps.city, end - nextProps.begin)
        }
    }
    openModal(city){
        const end = Math.round((new Date()).getTime() / 1000);
        this.props.openModal()
        this.props.changeCity(city.icao)
        this.props.getInitialFlights(city.icao, end - this.props.begin)
        
    }
    changeTime(e){
        this.props.changeTime(e.target.value)
    }
    render(){
        return(
            <div>
                <GridList cellHeight={180} cols={3} className="grid-container">
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
                </GridList>
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
                                defaultValue={3600 * 24}
                                onChange={this.changeTime}
                                >
                                <MenuItem value={3600 * 24}>1 day ago</MenuItem>
                                <MenuItem value={3600 * 72}>3 days ago</MenuItem>
                                <MenuItem value={3600 * 120}>5 days ago</MenuItem>
                            </Select>
                        </FormControl>
                            <div className="grid">
                                {this.props.loading ? 
                                    <CircularProgress /> :
                                    
                                    <Grid>
                                    {this.props.err ? <div> No flight recorded for specified period</div>: <div></div>}
                                    {this.props.arrival.map(flight => 
                                        <Grid>
                                            <Paper>
                                                <div className="grid-list">{flight.icao24}</div>
                                            </Paper>
                                        </Grid>
                                    )}
                                    {/* {this.props.err ? <div> Unable to get Air traffic for sprcified period</div>: <div></div>} */}
                                </Grid>
                                }
                                
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        open: state.modal.open,
        display: state.modal.display,
        arrival: state.modal.arrival,
        loading: state.modal.loading,
        err: state.modal.err,
        begin: state.modal.begin ,
        city: state.modal.city,
    }
}
function mapDispatchToProps(dispatch){
   return(bindActionCreators({ ...modalActions }, dispatch)) 
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);