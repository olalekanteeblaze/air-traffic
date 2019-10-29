import React, { Component } from 'react';
import { cities } from './cities';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <GridList cellHeight={180} cols={3} >
                    <GridListTile cols={3} style={{ height: 'auto'}}>
                        <ListSubheader component="div">Check flights for cities</ListSubheader>
                    </GridListTile>
                    {cities.map(city => 
                        <GridListTile key={city.city}>
                            <img src={city.image} alt={city.city} />
                            <GridListTileBar 
                                title={city.city}
                            />
                        </GridListTile>
                )}
                </GridList>
                
            </div>
        )
    }
}
export default Dashboard;