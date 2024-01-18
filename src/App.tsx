import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import styled from "styled-components";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to="/pageOne">Adidas</NavLink></div>
                    <div><NavLink to="/pageTwo">Puma</NavLink></div>
                    <div><NavLink to={"/PageThree"}>Abibas</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/pageOne"}/>}/>
                        <Route path="/pageOne" element={<PageOne/>}/>

                        <Route path="/pageTwo" element={<PageTwo/>}/>
                        <Route path="/PageThree" element={<PageThree/>}/>

                        <Route path="/error404" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={"/error404"}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: black;
  }

  & > a.active {
    text-decoration: none;
    color: #61dafb;
  }

  & > a:hover {
    color: cadetblue;
  }
`