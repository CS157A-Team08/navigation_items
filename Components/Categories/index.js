import React from 'react';
import ReactDOM from 'react-dom';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import GridPane from './GridPane';
//import Typography from '@material-ui/core/Typography';
import { StylesContext } from '@material-ui/styles/StylesProvider';
import {Grid, Paper, Typography } from '@material-ui/core';
import 'typeface-roboto';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { mergeClasses } from '@material-ui/styles';


const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10}
}

export default ({foodItems, food_category}) =>


    <Grid container  wrap="wrap" spacing={1}>
        <Grid item xs={10}>
            <div className={mergeClasses.root}>
                <GridList cellHeight={100} className={mergeClasses.gridList} cols={4}>

                 {foodItems.map( ( group ) =>
                    { if (group.food_category === food_category) {
                        return <Typography >
                             <Paper style={styles.Paper}>
                                 {group.name}
                             </Paper>
                        </Typography>
                        }
                    }
                 )}

                </GridList>
            </div>
        </Grid>

        <Grid item xs={2}>
            <Paper style={styles.Paper}>
                Cart pane
            </Paper>
        </Grid>
    </Grid>
