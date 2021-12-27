import React from "react";
import "./contact-card.css";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";


function ContactCard({ item, idf }) {
  const ln="/pr/"+idf+"/"+item.id
  console.log(ln)
  console.log(idf,item.id)
  
  return (
    <div className="contact-card">
      <div className="contact-top">
        {/* <img src={item.avatar} className="contact-avatar" /> */}
        <div className="contact-info">
        <label className="contact-title"><Link to={ln}style={{ textDecoration: 'none', color:'white'}}> {item.title} </Link></label>
          
          
          {/* <label className="contact-subtitle">{item.type}</label> */}
        </div>
      </div>
      <div className="contact-icons">
        <div className="contact-icon">
          <i class="fi-rr-microphone"></i>
        </div>
        <div className="contact-icon">
          <i class="fi-rr-play-alt"></i>
        </div>
        <div className="contact-icon">
          <i class="fi-rr-menu-dots"></i>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;


// class ContactCard extends React.Component {
   
//   // Constructor 
//   constructor(props) {
//       super(props);
 
//       this.state = {
//         idf :this.props.idf,
//         item:this.props.item
//       };
      
//   }
 
//   handleClick(){
//     const ln="/pr/"+this.state.idf+"/"+this.state.item.id
//     this.props.history.push(ln)
//   }

//   render() {
//       const { idf,item } = this.state;
      
 
//       return (
        
//           <div className="contact-card">
//             <div className="contact-top">
//               <img src={item.avatar} className="contact-avatar" />
//               <div className="contact-info">
//                 <lable className="contact-title" >
//                 {/* <Link to={ln}> {item.title} </Link> */}
//                 <Button onClick={this.handleClick}>{item.title}</Button>
//                   </lable>
                
//                 {/* <label className="contact-subtitle">{item.type}</label> */}
//               </div>
//             </div>
//             <div className="contact-icons">
//               <div className="contact-icon">
//                 <i class="fi-rr-microphone"></i>
//               </div>
//               <div className="contact-icon">
//                 <i class="fi-rr-play-alt"></i>
//               </div>
//               <div className="contact-icon">
//                 <i class="fi-rr-menu-dots"></i>
//               </div>
//             </div>
//           </div>
        
//   );
// }
// }
 
// export default ContactCard;