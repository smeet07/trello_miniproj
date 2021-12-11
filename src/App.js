import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import InputContainer from './components/input/inputContainer';
import List from './components/list/list';
import store from './utils/store';
import storeApi from './utils/storeApi';
import { makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles((theme)=>({
  root:{
    display:"flex",
    minHeight:"100vh",
    background:"green",
    // width="100vw",
  }
}))

export default function App() {
  const [data,setData]=useState(store);
  const classes=useStyle();
  // adding new card to store
  const addMoreCard=(title, listId)=>{
    // console.log(title, listId);
    const newCardId=uuid();
    console.log(newCardId);
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
  return (
    <storeApi.Provider value={{addMoreCard, addMoreList, updateListTitle}}>
    <div className={classes.root}>
      {data.listIds.map((listId)=>{
        const list=data.lists[listId];
        return <List list={list} key={listId}/>
})};
    <InputContainer type="list"/>
    </div>
    </storeApi.Provider>
  )
}
