import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <span>Blog</span>
      </Link>
      <nav>
        <Link href='/link' target='_blank' >
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header