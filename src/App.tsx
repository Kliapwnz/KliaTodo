import React, {useState} from 'react';
import styles from "./components/Site.module.css";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
