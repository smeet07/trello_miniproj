import { Paper,InputBase, Button, IconButton } from '@material-ui/core'
import React from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles ,fade} from '@material-ui/core';
const useStyle=makeStyles((theme)=>({
    card:{
        margin:theme.spacing(0,1,1,1),
        paddingBottom:theme.spacing(4),
        

    },
    input:{
        margin:theme.spacing(1),
    },
    btnConfirm:{
        backgroundColor:'#5AAC44',
        color:"#fff",
        "&:hover":{
            backgroundColor:fade("#5AAC44",0.5),
        }

    },
    confirm:{
        margin:theme.spacing(0,1,1,1),


    }
    
}))


export default function InputCard({setOpen}) {
    const classes=useStyle();
    return (
        <div>
            <div className={classes.confirm}>
            <Paper className={classes.card}>
                <InputBase multiline fullWidth inputProps={{className:classes.input,}} onBlur={()=>setOpen(false)} placeholder="enter task" />
            </Paper>
            </div>
            <div><Button className={classes.btnConfirm} onClick={()=>setOpen(false)}> 
                Add card</Button>
                <IconButton onClick={()=>setOpen(false)}>
                    <ClearIcon />
                </IconButton>
                
                </div>
        </div>
    )
}
