import React from 'react';
import styles from "../styles/textBox.module.scss";
import Image from "next/image";
import imageTest from '/images/repair.jpg'

const TextBox = ({header, body, img, direction, headerSize, aos}) => {
    return (
        direction === 'column' ?
            <div className={`${styles.textBox} ${styles.textBoxColumn}`} data-aos={aos}>
                <h1 className={styles[headerSize]}>{header}</h1>
                <div className={`${styles.imageWrapper} ${styles.boxColumn}`}>
                    <Image src={img} alt={header} className={direction === 'column' && styles.columnBoxImage}/>
                </div>
                <div className={styles.textWrapper}>
                    <p>{body}</p>
                </div>
            </div>
            :
            <div
                className={`${styles.textBox} ${direction === 'right' ? styles.directionRow : styles.directionRowReverse}`}
                data-aos={aos}>
                <div className={`${styles.imageWrapper} ${styles.boxRow}`}>
                    <Image src={img} alt={header}/>
                </div>
                <div className={styles.textWrapper}>
                    <h1 className={styles[headerSize]}>{header}</h1>
                    <p>{body}</p>
                </div>
            </div>
    )
}

export default TextBox;

