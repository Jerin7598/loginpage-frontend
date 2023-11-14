
import {useEffect, useState} from 'react'

import { useNavigate } from 'react-router-dom';


import ParticleComponent from './ParticleComponent';



import './App.css';
function App() {
  const [a1,a2]=useState();
     const navigate = useNavigate();
  const [b1,b2]=useState('');
  const [a11,seta11]=useState('');
  const [a01,a02]=useState(''); 
  const [c1,c2]=useState('Manager');

  const [name,setname]=useState([]);
  const [pass,setpass]=useState([]);

  const [images,setImages]=useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [detail,setdetail]=useState();
   
  

  const sel=(c)=>{
    console.log(c.target.value);
    c2(c.target.value);
  }
  
 const touch1=(a)=>{
    console.log(a.target.value);
    a2(a.target.value);
    setname(a.target.value);
  

    }
    const touch2=(e)=>{
      
       console.log(e.target.value.length);
       b2(e.target.value);
       setpass(e.target.value);

 if(e.target.value.length==0){
    seta11("");
  }
    else if(e.target.value.length<8){
    a02("z2");
      seta11("password must be at least 8 characters");
      

  }
    else if(e.target.value.length>7){
      a02("z1")
      seta11("strong password");
    }
    
  }


  //hide

  const [j,setj]=useState(false);
  const [je,setje]=useState(false);

  const zz=()=>{
    setj(true);
    setje(false);
  }

  const yy=()=>{
    setj(false);
    setje(true);
  }

  function adduser(){

     if (!name || !pass) {
    alert("Both username and password are required.");
    return;
  }
  if (pass.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:name, password:pass})

      
  };
  fetch('https://loginpage-backend.onrender.com/addUser', requestOptions)
  alert("your account sign up successfully")

 
      
setname('');
setpass('');
}

//login

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setImages({ ...images, [name]: value });
  console.log(name,value)
};

const handleLogin = () => {
  const { name, password } = images;

  
console.log(images)
   // Assuming you have formData state variable

  const user = detail.find((user) => user.name === name && user.password === password); // Assuming you have a users array
  console.log(user)
  if (user) {
    setLoggedIn(true);
    alert("your user name and passwor are True");
    navigate('Manager');
  }

  
  
  
  else {
    alert('Invalid username or password. Please try again.');
  }
}


async function fetchImages() {
  try{
    const response=await fetch("https://loginpage-backend.onrender.com/listUsers");
    const data=await response.json();
    setdetail(data)
    console.log(data)



 let m=data.filter(x=>x!==null)
    
      setImages(m);
console.log(images)
  }
  catch(error){
console.error("something wrong",error);
  }
}

useEffect(()=>{

    fetchImages();
  },[]);

 
  
  return (
    <div>
      <div style={{ position: 'relative',  height: '100vh' }}> 
    
  <div className="je">

<div> 
    <div className="j">

    <button type="button" onClick={zz} class="btn btn-secondary">Create new account</button><br></br>
    <button type="button" onClick={yy} class="btn btn-secondary">Login your account</button>
    </div>

  
   
    {j&& <div class="total">
      
    <div class="details">
    <h3>User name</h3>
    <input placeholder="enter your name" type="text" value={name} onChange={touch1}></input>
    <h3> Password</h3>
  
    <input placeholder="enter your password" type="password" value={pass} onChange={touch2}></input><br></br>
    <div className={a01}>
    {a11}
    </div>
    <h3>Select your position</h3>

    <select onChange={sel} value={c1}>
      <option value="manager">Manager</option>
      <option value="Team leader">Team leader</option>
      <option value="Developer">Developer</option>
    </select><br></br>
    <div>
    <button className="button" onClick={adduser}>Sign up</button>
    
</div>
   
  <ul class="icon">
  <li><i class="fa fa-facebook-square" aria-hidden="true"></i>
</li>
<li>
<i class="fa fa-instagram" aria-hidden="true"></i>

</li>
<li>
<i class="fa fa-twitter-square" aria-hidden="true"></i>

</li>
<li><i class="fa fa-linkedin-square" aria-hidden="true"></i>
</li>
</ul>
  </div>
  <div class="img">
   <img src="work1.png" width="500px"></img>
  </div>
  </div>}
 
{je&& <div className="sec">
  <div className="flex">
  <div className='jer'>
  <h2>
    Username
  </h2>
  <input type="text" value={images.name}  onChange={handleInputChange} name='name'></input>
  <h2>Password</h2>
  <input type="password" value={images.password}  onChange={handleInputChange} name='password'></input>
  <br></br>
  
  <button className="but" onClick={handleLogin} >login</button>
  </div>
  <div className="work2">
    <img src="work2.png" ></img>
  </div>
  
</div>


</div>}

  </div>
  </div><ParticleComponent className="kk"/>
  </div>
  
  </div> 
  
 
  
 


  );
}

export default App;
