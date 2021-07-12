import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import globalStyle from '../styles/_export.module.scss';
import Link from "next/link";

import FacebookIcon from "../images/facebook.svg";
import InstagramIcon from "../images/instagram.svg";
import YoutubeIcon from "../images/youtube.svg";

import styles from "../styles/navbar.module.scss";
import config from "../config.json";

const Navbar = ({refs}) => {
    const {navbar} = config;
    const {youtube, facebook, instagram} = navbar.urls;
    const {links} = navbar;
    const [isOpen, setOpen] = useState(false);

    const onButtonClickHandler = (index) => {
        refs?.current[index].scrollIntoView();
        setOpen(false);
    }

    return (
        <div className={styles.navbarWrapper}>
            <div className={`${styles.hamburgerWrapper} ${isOpen && styles.hamburgerNavOpen}`}>
                <Hamburger toggled={isOpen} toggle={setOpen}
                           duration={0.5} color={globalStyle.clrCream}/>
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : styles.navClose}`}>
                <div className={styles.socialIconsWrapper}>
                    <button><Link href={"//" + youtube}>
                        <a target="_blank"><YoutubeIcon className={styles.socialIcon}/></a>
                    </Link></button>
                    <button><Link href={"//" + facebook}>
                        <a target="_blank"><FacebookIcon className={styles.socialIcon}/></a>
                    </Link></button>
                    <button><Link href={"//" + instagram}>
                        <a target="_blank"><InstagramIcon className={styles.socialIcon}/></a>
                    </Link></button>
                </div>
                <div className={styles.home}>
                    <button key={'link-0'}
                            onClick={() => onButtonClickHandler(0)}>
                        {links[0]}
                    </button>
                </div>
                <div className={styles.links}>
                    {
                        links?.map((link, index) => {
                            if (index === 0) return;
                            return <button
                                key={'link-' + index}
                                onClick={() => onButtonClickHandler(index)}
                            >
                                {link}
                            </button>
                        })
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;