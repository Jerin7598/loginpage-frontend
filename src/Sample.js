import { useState } from "react";
function Sample() {
    


  const [g,setg]=useState([]);
  const [u,setu]=useState('');
  const [v,setv]=useState('');
  const [w,setw]=useState('');
  const [aa,setaa]=useState('')
  const [bb,setbb]=useState([]);


  
  let x={
    title:u,
    content:v,
    image:w

  }

const a=(h)=>{
    setu(h.target.value)
  }
  const b=(i)=>{
    setv(i.target.value)
  }
  const c=(j)=>{
    setw(j.target.value)
  }
  const d=(k)=>{
    setaa(k.target.value)
  }
  const touch2=()=>{
    setg (e=>[...e,x])
    }
    const touch3=()=>{
      let x1=g.find((e1)=>e1.title===aa)
      setbb(x1)
    }

return (
      

         <div>
           
           {bb.title}
           {bb.content}
           <img src={bb.image}></img>

        <p>
  <input type="text" value={u} onChange={a} placeholder="title"></input>
<input type="text" value={v} onChange={b} placeholder="text here"></input>
<input type="url" value={w} onChange={c} placeholder="img url"></input>
<button onClick={touch2}>submit</button>

</p>
<p>
  <input type="text" value={aa} onChange={d}></input>
  <button onClick={touch3}>submit</button>
</p>




         </div>

         

        );
    }
    
    export default Sample;