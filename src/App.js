import React, {useState} from 'react';
import List from './components/list/list';
import store from './utils/store';
import storeApi from './utils/storeApi';
export default function App() {
  const [data,setData]=useState(store);
  const addMoreCard=(title)=>{
    console.log(title);
  }
  return (
    <storeApi.Provider value={{addMoreCard}}>
    <div>
      {data.listIds.map((listId)=>{
        const list=data.lists[listId];
        return <List list={list} key={listId}/>
})};
    </div>
    </storeApi.Provider>
  )
}
