import React from "react";
import {
    Dialog,DialogTitle,DialogContent,DialogActions,Button
}
    from "@mui/material";

export default class MaterialComp extends React.Component {
    constructor(props){
        super(props);

        this.state={
            dialogOpen:false
        }
    }
    render() {
        return (
            <div>
                <Button
                onClick={()=>{
                    this.setState({
                        dialogOpen:true
                    })
                }}>
                    open dialog
                </Button>
                <Dialog
                    open={this.state.dialogOpen}
                >

                    <DialogTitle>
                        My Title
                    </DialogTitle>
                    <DialogContent>
                        do you agree with the content
                    </DialogContent>
                    <DialogActions>
                        <Button>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}