import React from 'react';
import { tasks } from '../../../mocks/tasks';
import { Grid } from './../../components/grid/grid.component';

const Home: React.FC = () => {
    return <Grid tasks={tasks}></Grid>
}

export default Home
