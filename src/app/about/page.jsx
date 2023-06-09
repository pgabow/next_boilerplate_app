import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Парад бытовой техники</h1>
          <h2 className={styles.imgDesc}>
            Консультация с широким активом стала доступной ширнармассам
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Следует отметить, что перспективное планирование, а также свежий взгляд на привычные
            вещи — безусловно открывает новые горизонты для дальнейших направлений развития. Есть
            над чем задуматься: элементы политического процесса освещают чрезвычайно интересные
            особенности картины в целом, однако конкретные выводы, разумеется, рассмотрены
            исключительно в разрезе маркетинговых и финансовых предпосылок.
            <br />
            <br />
            Но постоянное информационно-пропагандистское обеспечение нашей деятельности играет
            важную роль в формировании системы обучения кадров, соответствующей насущным
            потребностям. Имеется спорная точка зрения, гласящая примерно следующее: интерактивные
            прототипы могут быть рассмотрены исключительно в разрезе маркетинговых и финансовых
            предпосылок.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Внезапно, предприниматели в сети интернет объявлены нарушающими общечеловеческие нормы
            этики и морали. Являясь всего лишь частью общей картины, сделанные на базе
            интернет-аналитики выводы являются только методом политического участия и ограничены
            исключительно образом мышления. - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
};

export default About;
