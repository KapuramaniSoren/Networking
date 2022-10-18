import React from "react";
import {
    Button, TextField
}
    from "@mui/material";

export default class MaterialComp extends React.Component {
    render() {
        return (
            <div>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" margin="dense"/>
                <TextField id="filled-basic" label="Filled" variant="filled"  />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <br/>
                <Button
                    variant="text" color="secondary" >
                    Submit
                </Button>
            </div>
        )
    }
}