import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default props => (
    <AppBar position="static">
        <Toolbar>
     
            <Typography variant="h2" color="inherit">
                ABC Bistro
            </Typography>
          
        </Toolbar>
    </AppBar>
);