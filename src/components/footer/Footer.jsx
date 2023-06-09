"use client";

import React, { useContext } from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const Footer = () => {
  const { toggle, mode } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <div>©2023 &lt;/&gt; boilerplate</div>
      <div className={styles.social}>
        <Image
          src='/assets/mail.svg'
          width={15}
          height={15}
          className={styles.icon}
          alt='Account'
        />
        <Image
          src='/assets/telegram.svg'
          width={15}
          height={15}
          className={styles.icon}
          alt='Account'
        />
        <Image
          src='/assets/whats-app.svg'
          width={15}
          height={15}
          className={styles.icon}
          alt='Account'
        />
        <Image src='/assets/vk.svg' width={15} height={15} className={styles.icon} alt='Account' />
        <Image
          src='/assets/youtube.svg'
          width={15}
          height={15}
          className={styles.icon}
          alt='Account'
        />
      </div>
    </div>
  )
}

export default Footer
