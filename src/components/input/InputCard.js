import { Paper,InputBase, Button, IconButton } from '@material-ui/core'
import React,{useState, useContext} from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles ,alpha} from '@material-ui/core';
import storeApi from '../../utils/storeApi';
const useStyle=makeStyles((theme)=>({
    card:{
        width:'280px',
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
            backgroundColor:alpha("#5AAC44",0.5),
        }
    },
    confirm:{
        margin:theme.spacing(0,1,1,1),
    }
    
}))


export default function InputCard({setOpen, listId,type}) {
    const classes=useStyle();
    const {addMoreCard, addMoreList}=useContext(storeApi);

    const [title, setTitle]=useState(null)
    const handleOnChange=(e)=>{
        setTitle(e.target.value);
    }
    
    const handleBtnConfirm=()=>{
        if(type==='card'){
            addMoreCard(title, listId);
            setTitle(''); //set to null after adding card
            setOpen(false);
        }
        else{
            addMoreList(title);
            setTitle(''); //set to null after adding card
            setOpen(false);
        }
    }

    return (
        <div>
            <div className={classes.confirm}>
            <Paper className={classes.card}>
                <InputBase onChange={handleOnChange} multiline fullWidth inputProps={{className:classes.input,}} 
                onBlur={()=>setOpen(false)} value={title} placeholder={type==='card'?"enter task":"enter title"} />
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button onClick={handleBtnConfirm} className={classes.btnConfirm} > 
                {type==='card'?'Add Card':'Add List'}</Button>
                <IconButton onClick={()=>setOpen(false)}>
                    <ClearIcon />
                </IconButton>
                
                </div>
        </div>
    )
}
