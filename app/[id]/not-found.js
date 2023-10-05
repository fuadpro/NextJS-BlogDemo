import React from 'react'
import Image from "next/image";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
      <section className={styles.page_404}>
        <div class="container">

            <div className={styles.four_zero_four_bg}>
              <h1 className={styles.four_zero_four_bg_h1}>404</h1> 
            </div>
            
            <div className={styles.contant_box_404}>
              <h3 className={styles.four_zero_four_bg_h3}>  Look like you're lost </h3>
              
              <p>the page you are looking for not avaible!</p>        
              <a href="/" className={styles.link_404}>Go to Home</a>
            </div>

        </div>
      </section>
  )
}
