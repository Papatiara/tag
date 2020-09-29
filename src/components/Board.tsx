import React from "react";
import Wall from './pieces/Wall';

import Grid from "@material-ui/core/Grid";


const Board: React.FC = () => {
    return (
        <div>
            <Grid><Wall/></Grid>
        </div>
    )
}

export default Board;