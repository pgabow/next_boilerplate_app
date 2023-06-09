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
				{/* вернуться к svg fill */}
        <Image
          src='/assets/mail.svg'
          width={20}
          height={20}
          className={mode === 'light' ? styles.icon : styles.icon_black}
          alt='Account'
        />
        <Image
          src='/assets/telegram.svg'
          width={20}
          height={20}
          className={styles.icon}
          alt='Account'
        />
        <Image
          src='/assets/whats-app.svg'
          width={20}
          height={20}
          className={styles.icon}
          alt='Account'
        />
        <Image src='/assets/vk.svg' width={20} height={20} className={styles.icon} alt='Account' />
        <Image
          src='/assets/youtube.svg'
          width={20}
          height={20}
          className={styles.icon}
          alt='Account'
        />
      </div>
    </div>
  )
}

export default Footer
