import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {S} from "./components/pages/_styles"


const PATH = {
   PAGE1: "pageOne",
   PAGE2: "pageTwo",
   PAGE3: "PageThree",
   ERROR404: "error404"
} as const

function App() {
   return (
      <div>
         <div className={styles.header}><h1>HEADER</h1></div>
         <div className={styles.body}>
            <div className={styles.nav}>
               <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
            </div>
            <div className={styles.content}>
               <Routes>
                  <Route path={"/"} element={<Navigate to={PATH.PAGE1}/>}/>
                  <Route path={PATH.PAGE1} element={<PageOne/>}/>

                  <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                  <Route path={PATH.PAGE3} element={<PageThree/>}/>

                  {/*<Route path={PATH.ERROR404} element={<Error404/>}/>*/}
                  <Route path="/*" element={<Error404/>}/>
               </Routes>
            </div>
         </div>
         <div className={styles.footer}>abibas 2023</div>
      </div>
   );
}


export default App;

