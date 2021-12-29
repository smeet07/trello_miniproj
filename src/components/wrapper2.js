import React from "react";
import { CallsContact } from "../../data/calls";
import ContactCard from "./contact-card";
import "./right-fold.css";
import { Link } from 'react-router-dom';
import InputProject from '../../../input/InputProject'
import storeApi from '../../../../utils/storeApi';
import InputContainer from './input/inputContainer';
import List from './list/list';
import store from '../utils/store';
import storeApi from '../utils/storeApi';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {useParams} from 'react-router-dom'
import axios from 'axios';

class Wrapper2 extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
      this.idf = this.props.idf;
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch(
"http://localhost:8000/user/"+this.idf)
          .then((res) => res.json())
          .then((json) => {
              console.log(json)
              this.setState({
                  items: json.projects,
                  DataisLoaded: true
              });
          })
  }


 
      
  
  addMoreProject=(title)=>{
    console.log(title);
    
    async function postData(url = '', data = {}) {
  
      const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
      console.log('k '+data);
      return response.json(); 
    }
    
    postData('http://localhost:8000/addproj', {id:this.idf,title:title})
      .then(data => {
        console.log({id:this.idf,title:title});
        console.log(data); // JSON data parsed by `data.json()` call
      });
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
    <storeApi.Provider value={this.addMoreProject}>
    <div className="rightFold">
      <div className="rightFold-heading">
        <label className="heading-label">Projects</label>
        <Link to="/" style={{ textDecoration: 'none', float:'right', padding:'15px 10px', fontSize:'23px'}}>Log Out</Link>
      </div>
      <div className="rightFold-options">

      </div>
      <div className="contact-list">
        {items.map((item) => {
          return <ContactCard item={item} idf={this.idf} />;
        })}
      </div>
      <div className="add-project">
      <InputProject />
      </div>

    </div>
    </storeApi.Provider>
  );
}
}
 
export default Wrapper2;