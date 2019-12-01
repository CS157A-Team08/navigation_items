import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default ({ positions, onSelect }) => {

    return <Paper>
        <Tabs
         value={0} //which tab will be underlined, here tab 2, which is the center tab

         indicatorColor="primary"
         textColor="primary"
         centered
         >
         <Tab label="All" />

         {positions.map(group => //grabbing list of food items
            <Tab label={group} />
         )}






         </Tabs>
    </Paper>
};
