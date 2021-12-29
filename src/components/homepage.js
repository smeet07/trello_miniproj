// import React from 'react';
// import "./homepage.css";

// export default function Homepage() {
//     return (
        
// <div class="welcome-text">
//         <h1>
// ONE PLACE <span>MANAGEMENT</span></h1>
// <a href="login/">login</a>
//     </div>
//     )
// }

import React from 'react';
import './homepage.css';

export default function Homepage() {
  return (
    <div class='blurred-box'>
      <div class='welcome-text'>
        <h1>
          ONE PLACE <span>MANAGEMENT</span>
        </h1>
        <a href='login/'>Log In</a>
      </div>
    </div>
  );
}