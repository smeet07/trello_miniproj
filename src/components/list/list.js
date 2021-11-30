import React from 'react';
import{Paper,Typography,CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import Card from './cards';
import InputContainer from '../input/inputContainer';
const useStyle=makeStyles((theme)=>({
    root:{width:'320px',
    backgroundColor:'#EBECF0',
    marginLeft:theme.spacing(1),}
}))

export default function List({list}) {
    const classes=useStyle();
    return (
        <div>
        <Paper className={classes.root}>
        <CssBaseline />
        <Title title= {list.title} />
        {list.cards.map((card)=>(
            <Card key={card.id} card={card}/>
        ))}
        <InputContainer />

        </Paper>
            
        </div>
    )
}
