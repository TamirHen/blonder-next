import React from 'react';
import styles from "../styles/textBox.module.scss";

const TextBox = ({header, body, img, direction, headerSize, aos}) => {
    return (
        direction === 'column' ?
            <div className={`${styles.textBox} ${styles.textBoxColumn}`} data-aos={aos}>
                <h1 className={styles[headerSize]}>{header}</h1>
                <div className={styles.imageWrapper}>
                    <img className={direction === 'column' && styles.columnBoxImage} src={img} alt={header}/>
                </div>
                <div className={styles.textWrapper}>
                    <p>{body}</p>
                </div>
            </div>
            :
            <div
                className={`${styles.textBox} ${direction === 'right' ? styles.directionRow : styles.directionRowReverse}`}
                data-aos={aos}>
                <div className={styles.imageWrapper}>
                    <img src={img} alt={header}/>
                </div>
                <div className={styles.textWrapper}>
                    <h1 className={styles[headerSize]}>{header}</h1>
                    <p>{body}</p>
                </div>
            </div>
    )
}

export default TextBox;

