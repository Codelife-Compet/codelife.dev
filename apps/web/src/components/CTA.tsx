import React, {Component} from "react";
import styles from '@/styles/cta.module.css';
import { render } from "react-dom";

function CTA(){
    const redirectToLogin = () => {
        window.location.href = '/testes';
    };

    return(
        <div className={styles.ctaContainer}>
            <img className={styles.img} src="https://pt.codelife.com/avatars/avatar-excited-transparent.png" alt="" />
            <div className ={styles.box}>
                <h2 className ={styles.h2}> Inscreva-se gratuitamente no CodeLife e comece a programar </h2>
                <button id="loginButton" className = {styles.button} onClick={redirectToLogin}>
                    COMECE
                </button>
            </div>
        </div>
        );
}

export default CTA