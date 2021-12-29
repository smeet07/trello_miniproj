import React from 'react'
import {Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
const useStyle = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(1, 1, 1, 2),
      margin: '10px 20px 10px 20px',
      padding: '10px',
      border: '1px #808080 solid',
    },
  }));


export default function Card({card,index}) {
    const classes=useStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
           {(provided)=>(
                <div ref={provided.innerRef}{...provided.dragHandleProps}{...provided.draggableProps}>
                <Paper className={classes.card}>{card.title} </Paper> 
                </div>
           )}
        </Draggable> 
    )
}
