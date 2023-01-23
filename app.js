import{useState}from 'react';

export default function From(){
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[submitted,setsubmited]=useState(false);



  const handleName = (e) =>  {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
const handleSubmit=(e)=>{
  e.preventDefault();
  if(name===''||email===''||password===''){
  alert("please fill all input");
}else{
  setsubmited(true);
}
};

const sucessMessage = () => {

  if(submitted)
  return(
    <div calssName="myapp">

      <h1>User {name}sucessfullf regristerd</h1>
    </div>

  );
};

return(
  <div calssName="form">{sucessMessage()}
<div>
    <h1>user reg</h1>

  </div>
  <form>
<fieldset>

<label >Name:</label>
<input onChange={handleName} value={name} type="text"/><br></br>
<label >Email:</label>
<input onChange={handleEmail}  value={email} type="email"/><br></br>
<label >Password:</label>
<input onChange={handlePassword}  value={password}type="password" /><br></br>
<button onClick={handleSubmit}  type="submit">Submit</button>
</fieldset>
</form>
</div>
);
}
