import React,{useState} from 'react'
import {Collapse, Paper, Typography} from '@material-ui/core';
import { makeStyles ,alpha} from '@material-ui/core';
import InputCard from './InputCard';
const useStyle=makeStyles((theme)=>({
    root:{
        width:"300px",
        marginTop:theme.spacing(1),
    },
    addCard:{
        padding:theme.spacing(1,1,1,2),
        margin:theme.spacing(0,0,1,1),
        backgroundColor:'#EBECF0',
        "&:hover":{
            backgroundColor:alpha("#000",0.25),
        },
    }
}))

export default function InputProject({listId, type}) {
    const classes=useStyle();
    const [open,setOpen]=useState(false);
    return (
        
        <div >
            <Paper className={classes.addCard} elevation={0} onClick={()=>setOpen(!open)}>
            <Typography>+ Add</Typography>
            </Paper>
        </div>
    )
}