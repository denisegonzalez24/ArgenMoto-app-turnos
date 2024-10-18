import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom'; 
import logo from "../../assets/LOGO.png";

import styles from "./Navbar.module.css"; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const location = useLocation(); 
const loggin =useSelector(state => state.actualUser.userData.loggin);
const dispatch=useDispatch();
const navigate =useNavigate();

const handleLogout=()=>{
  const confirm = window.confirm("¿Deseas cerrar sesion?");
  if(confirm){
    dispatch(setUserData({ loggin: false, user: { id: false, 
    }, }));
    navigate("/");
  }
}
    const hideReserveLink = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';
     
    return (
        <nav className={styles.navbarContainer}>
           <div className={styles.logoSection}>
            <img src={logo} alt="logo" />
           </div> 
           <div className={styles.linkSection}>
              <Link to="/home" className={styles.navLink}>
                <span>PRINCIPAL</span>
              </Link>  
              { loggin && (
                <Link to="/appointment" className={styles.navLink}>
                  <span>RESERVAS</span>
                </Link>
              )}
              <Link to="/about" className={styles.navLink}>
                <span>ACERCA</span>
              </Link> 
              

             {loggin && 
              <Link to ="/appointmentform" className={styles.navLink}>
                <span>NUEVA RESERVA</span></Link>}
                {
                  loggin ?(
                    <Link >
                      <span onClick={handleLogout}>LOGOUT</span>
                    </Link>
                  ):(
                    <Link to="/login">
                    <span>LOGIN</span>
                    </Link>
                  )
                }
           </div>
           <div className={styles.avatarSection}>
             
           </div>
        </nav>
    );
}
