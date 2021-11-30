import { Paper,InputBase, Button, IconButton } from '@material-ui/core'
import React,{useState, useContext} from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles ,fade} from '@material-ui/core';
import storeApi from '../../utils/storeApi';
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
    const {addMoreCard}=useContext(storeApi)
    const [cardTitle, setCardTitle]=useState(null)
    const handleOnChange=(e)=>{
        setCardTitle(e.target.value);
    }

    const handleBtnConfirm=()=>{
        addMoreCard(cardTitle);
        setOpen(false);
    }
    return (
        <div>
            <div className={classes.confirm}>
            <Paper className={classes.card}>
                <InputBase onChange={handleOnChange} multiline fullWidth inputProps={{className:classes.input,}} onBlur={()=>setOpen(false)} placeholder="enter task" />
            </Paper>
            </div>
            <div><Button className={classes.btnConfirm} onClick={handleBtnConfirm}> 
                Add card</Button>
                <IconButton onClick={()=>setOpen(false)}>
                    <ClearIcon />
                </IconButton>
                
                </div>
        </div>
    )
}
