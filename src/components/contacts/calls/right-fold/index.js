import React from "react";
import { CallsContact } from "../../data/calls";
import ContactCard from "./contact-card";
import "./right-fold.css";
import { Link } from 'react-router-dom';

// function RightFold() {
//   const contacts = CallsContact;
//   return (
//     <div className="rightFold">
//       <div className="rightFold-heading">
//         <label className="heading-label">Contacts</label>
//       </div>
//       <div className="rightFold-options">
//         <div className="contact-search">
//           <input placeholder="Find a contact" />
//           <div className="contact-search-icon">
//             <i class="fi-rr-search"></i>
//           </div>
//         </div>
//         <div className="add-button">
//           <div className="add-icon">
//             <i class="fi-rr-user-add"></i>
//           </div>
//           <label className="add-label">Add Contact</label>
//         </div>
//       </div>
//       <div className="contact-list">
//         {contacts.map((item) => {
//           return <ContactCard item={item} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default RightFold;

class RightFold extends React.Component {
   
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
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
    <div className="rightFold">
      <div className="rightFold-heading">
        <label className="heading-label">Projects</label>
      </div>
      <div className="rightFold-options">
        {/* <div className="contact-search">
          <input placeholder="Find a contact" />
          <div className="contact-search-icon">
            <i class="fi-rr-search"></i>
          </div>
        </div> */}
        <div className="add-button">
          <div className="add-icon">
            <i class="fi-rr-user-add"></i>
          </div>
          <label className="add-label">Add Project</label>
        </div>
      </div>
      <div className="contact-list">
        {items.map((item) => {
          return <ContactCard item={item} idf={this.idf} />;
        })}
      </div>
    </div>
  );
}
}
 
export default RightFold;