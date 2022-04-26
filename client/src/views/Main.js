import React from 'react';
import { useUser } from "../contexts/userContext";
import {
    useNavigate,
  } from "react-router-dom";
import logout from '../actions/logout';
import Register from './Register'
import Login from './Login';
const Main = () => {

    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const renderInfo = () => {
        if(user){
            return(<>
            USUARIO LOGUEADO {user.email}
            </>)
        }else{
            return(<p>NO HAY USUARIO LOGGUEADO</p>)
        }
    }

    const logOut = async () => {
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/");
      };

    return (
        <div className='mainHome'>
            <div className='regist'>
            {
            !user?
            <>
            <Register></Register>
            <Login></Login>
            </>:
            <div className='userLogueado'>
            <button className="btn100" onClick={()=>navigate("/piratas")}>TABLERO DE TRIPULACION</button>
            <button className='btnReg100' onClick={logOut}><p className='regreg'>LOGOUT</p></button>
            <h5 className='textLoginn'>{renderInfo()} </h5>
            </div>
            }
            </div>
           {/*  <div className='logout'>
         {
             user?
            <div className='btn'><button className='btnReg2' onClick={logOut}><p className='regreg'>LOGOUT</p></button></div>:
            console.log("no hay user")
             
        }
          {  <h5 className='textlogout'>{renderInfo()} </h5>}
            </div> */}
        </div>
    );
}

export default Main;
