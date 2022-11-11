import React, { useState,useEffect } from "react";
import "./login.scss";
import loginD from "../../logindata.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"; 




const getdatafromlocsto = () => {
    const data = localStorage.getItem("forminput");
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }

}
alert("For login used this: name=RahBaj10393  password=B9xsSVQ, \n  name=sam1 and password=12345")
export default function Login() {
    const [bol,setBol]=useState(false)
    // const [logindata,setLogindata]=useState([])
    const [data,setData]=useState(getdatafromlocsto())
    const [inputdata,setInputdata]=useState({name:"",password:""})
    let {name,password}=inputdata;
  let navigate=useNavigate()


useEffect(()=>{alert("For login used this: name=RahBaj10393  password=B9xsSVQ, \n  name=sam1 and password=12345")},[])


function changehandel(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
    // console.log(inputdata)
}

function submithandel(e){
    e.preventDefault()
    setData([...data,{name,password}])

    console.log(data)

// console.log(loginD.logingData,"hell")

   let find=loginD.logingData.find((item)=>item.name==name)
   console.log(find?.name,find?.password,find?.id)
  
 
    if(find?.name==name && find?.password==password){
        navigate("/graph")
     
    }else{
        alert("Error!! Wrond password and User-name")
     
    }
    // setTimeout(()=>{},.0001)
  
    setInputdata({name:"",password:""})
}
 //saving data to loacal storage
 useEffect(() => {
    localStorage.setItem("forminput", JSON.stringify(data));
    
}, [data])



    return (
        <>
            <div className="main-login-container">


                <div className="login-box-frame">
                    <h2>PHYSIOAI</h2>
                    <h4>Welcome Back!</h4>
                    <form action="" onSubmit={submithandel}>
                        <label htmlFor="name">
                            <span>*</span> Username <br />
                            <input type="text" placeholder="username" id="name" name="name" value={name} onChange={changehandel} autoCapitalize="off" required />
                        </label>

                        <label htmlFor="pas">
                            <span>*</span> Password <br />
                            <input placeholder="***********" type={!bol?"password":"text"} value={password} name="password" onChange={changehandel} id="pas" required />
                            <FontAwesomeIcon className="icon-password" onClick={()=>setBol(!bol)} icon={bol?faEye:faEyeSlash} />
                        </label>
                        <p><a href="#">Forgot Passwoed?</a></p>

                      <center>  <button type="submit" className="button-login">Login</button></center>
                    </form>
                </div>



            </div>
        </>
    );
}
