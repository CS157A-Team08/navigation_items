import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10}
}

export default props =>
    <Grid Container> 
        <Grid item sm>
            <Paper style={style.Paper}>
                Menu pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper}>
                Cart pane
            </Paper>
        </Grid>

    </Grid>