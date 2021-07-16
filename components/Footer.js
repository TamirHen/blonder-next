import React from 'react';
import styles from "../styles/Footer.module.scss";
import {Link} from "@material-ui/core";

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.poweredByWrapper}>
                <span className={styles.poweredBy}>Powered by <Link href="https://www.palladomsolutions.com/">Palladom Solutions</Link></span>
            </div>
        </footer>
    );
};

export default Footer;