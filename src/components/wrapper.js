import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import InputContainer from './input/inputContainer';
import List from './list/list';
import store from '../utils/store';
import storeApi from '../utils/storeApi';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const useStyle=makeStyles((theme)=>({
  root:{
    display:"flex",
    minHeight:"100vh",
    // background:"#003153",
    width:"100%",
    overflow:'auto',
  }
}))

export default function Wrapper() {
  const [data,setData]=useState(store);
  const classes=useStyle();
  // adding new card to store
  const addMoreCard=(title, listId)=>{
    console.log(title, listId);
    const newCardId=uuid();
    // console.log(newCardId);
    const newCard={
      id:newCardId,
      title,
    };

    const list=data.lists[listId];
    list.cards=[...list.cards, newCard] //prev list.cards; putting contents pf prev card here

    //updated state
    const newState={
      ...data,
      lists:{
        ...data.lists,
        [listId]:list,
      },
    };
    setData(newState);
  }

  const addMoreList=(title)=>{
    const newListId=uuid();
    const newList={
      id:newListId,
      title,
      cards:[],
    };
    const newState={
      listIds:[...data.listIds,newListId],
      lists:{
        ...data.lists,
        [newListId]:newList
      }
    }
    setData(newState);
  }

  const updateListTitle=(title,listId)=>{
    // console.log(title);
    const list=data.lists[listId];
    list.title=title;
    const newState={
      ...data,
      lists:{
        ...data.lists,
        [listId]:list
      }
    }
    setData(newState);
  };

  const onDragEnd=(result)=>{
    const {destination,source,draggableId,type}=result;
    console.log(destination,source,draggableId);
    // check if dest is null
    if(!destination){
      return; //nothin' happens
    }
    if(type==='list'){
      const newListIds=data.listIds;
      newListIds.splice(source.index,1);
      newListIds.splice(destination.index,0,draggableId);
      return;
    }
    const sourceList=data.lists[source.droppableId];
    const destinationList=data.lists[destination.droppableId];
    const draggingCard=sourceList.cards.filter( (card)=>card.id===draggableId )[0];

    if(source.droppableId===destination.droppableId) {//check if same list
      sourceList.cards.splice(source.index,1);
      destinationList.cards.splice(destination.index,0, draggingCard);
      const newState={
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]:destinationList,
        }
      };
      setData(newState);
    }
    else{ // not same list
      sourceList.cards.splice(source.index,1);
      destinationList.cards.splice(destination.index,0, draggingCard);
      const newState={
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]:sourceList,
          [destinationList.id]:destinationList,
        }
      };
      setData(newState);
    }
  }

  return (
    <storeApi.Provider value={{addMoreCard, addMoreList, updateListTitle}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(provided)=>(
            <div className={classes.root} ref={provided.innerRef}{...provided.droppableProps}>
            {data.listIds.map((listId,index)=>{
              const list=data.lists[listId];
              return <List list={list} key={listId} index={index}/>
            })};
          <InputContainer type="list"/>
          {provided.placeholder}
          </div>
          )}
    
    </Droppable>
    </DragDropContext>
    </storeApi.Provider>
  )
}

// npm i react-beautiful-dnd

