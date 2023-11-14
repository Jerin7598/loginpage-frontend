

import './Manager.css'
import {useEffect, useState} from 'react'

function Manager() {
return (
      
   <div className="wel">

            <div className="me">
                

       <button className="zz"><i class="fa fa-home" aria-hidden="true"></i>Home</button><br></br>
       <button className="zz"><i class="fa fa-internet-explorer" aria-hidden="true"></i>Explore</button><br></br>
       <button className="zz"><i class="fa fa-bell" aria-hidden="true"></i>Notifications</button><br></br>
       <button className="zz"><i class="fa fa-commenting-o" aria-hidden="true"></i>Messages</button><br></br>
       <button className="zz"><i class="fa fa-list" aria-hidden="true"></i>List</button><br></br>
       <i className="s1">
       <button className="zzz">More<i class="za fa fa-caret-down" aria-hidden="true"></i>
</button>
        <ul className="s2">
            <li><button className="zz"><i class="fa fa-info-circle" aria-hidden="true"></i>About</button></li>
            <li><button className="zz"><i class="fa fa-info-circle" aria-hidden="true"></i>info</button></li>
            <li><button className="zz" ><i class="fa fa-phone" aria-hidden="true"></i>Contactus</button></li>
        
        </ul>
       </i>
       </div>


       <div className="lg">
<h1>
       Login Successfully
</h1>

        </div>
      

    
     </div>   );
}

export default Manager;