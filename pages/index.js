import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, {useEffect, useRef} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import LeavesBackground from "../images/Leaves.svg";
import Logo from "../images/logo.svg";
import Navbar from "../components/Navbar";

import TextBox from "../components/TextBox";

import config from '../config.json';
import CarouselGallery from "../components/CarouselGallery";
import ContactUs from "../components/ContactUs";

// Images:
import hagiImage from '/images/hagi-pic.jpg';
import theShopImage from '/images/workshop.jpg';
import designingImage from '/images/desinging.jpg';
import producingImage from '/images/producing.jpg';
import repairingImage from '/images/repair.jpg';
import teachingImage from '/images/teaching.jpg';
import gridImage1 from '/images/repair.jpg';
import gridImage2 from '/images/repair.jpg';
import gridImage3 from '/images/repair.jpg';
import gridImage4 from '/images/repair.jpg';
import gridImage5 from '/images/repair.jpg';
import locationPhoto from '/images/locationPhoto.png';


export default function Home() {
    const {aboutUs, services, gallery, contactUs} = config;
    const refs = useRef([]);
    const aboutUsImages = [hagiImage, theShopImage];
    const servicesImages = [designingImage, producingImage, repairingImage, teachingImage];
    const galleryImages = [gridImage1, gridImage2, gridImage3, gridImage4, gridImage5];

    useEffect(() => {
        Aos.init({duration: 1700, once: true});
        refs.current = refs.current.slice(0, 5);
    }, [])

    const renderServices = () => {
        let textBoxes = [];
        const boxes = services.boxes;
        for (let i = 0; i < boxes.length; i++) {
            const {header, body, direction} = boxes[i];
            const image = servicesImages[i];
            let aos = `fade-${i % 2 === 0 ? 'right' : 'left'}`;

            if (i === 2 && boxes.length > 3) {
                let {header, body, direction} = boxes[i];
                let image = servicesImages[i];
                const firstBox = <TextBox key={'services-textbox-' + i} header={header} body={body} img={image}
                                          aos={aos}
                                          direction={direction ? direction : i % 2 === 0 ? 'left' : 'right'}
                                          headerSize='m'/>;
                i++;
                aos = `fade-${i % 2 === 0 ? 'right' : 'left'}`;
                header = boxes[i].header
                body = boxes[i].body
                image = servicesImages[i];
                direction = boxes[i].direction
                const secondBox = <TextBox key={'services-textbox-' + i} header={header} body={body} img={image}
                                           aos={aos}
                                           direction={direction ? direction : i % 2 === 0 ? 'left' : 'right'}
                                           headerSize='m'/>;
                textBoxes.push(
                    <div className={styles.twoInRow} key='tb-two-in-one'>
                        {firstBox}
                        <div className={styles.space}/>
                        {secondBox}
                    </div>
                )

            } else {
                textBoxes.push(<TextBox key={'services-textbox-' + i} header={header} body={body} img={image}
                                        aos={aos}
                                        direction={direction ? direction : i % 2 === 0 ? 'left' : 'right'}
                                        headerSize='m'/>)
            }
        }
        return textBoxes;
    }
    return (
        <>
            <Head>
                <title>Blonder</title>
                <meta
                    name="description"
                    content="Hagi Blonder's personal website"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <>
                <LeavesBackground className={styles.leavesBackground}/>
                <LeavesBackground className={styles.leavesBackground}/>
                <header className={styles.header}>
                    <Navbar refs={refs}/>
                </header>
                <main className={styles.main}>
                    <section ref={sec => refs.current[0] = sec} className={styles.sectionHome}>
                        <Logo className={styles.logo}/>
                    </section>
                    <section ref={sec => refs.current[1] = sec} className={styles.sectionAboutUs}>
                        {aboutUs?.map((textBox, index) => {
                            const {header, body, direction} = textBox;
                            return <TextBox key={'aboutus-textbox-' + index}
                                            aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`} header={header}
                                            body={body} img={aboutUsImages[index]}
                                            direction={direction ? direction : index % 2 === 0 ? 'right' : 'left'}/>;
                        })}
                    </section>
                    <section ref={sec => refs.current[2] = sec} className={styles.sectionServices}>
                        <h1 data-aos="fade-down">{services.header}</h1>
                        {renderServices()}
                    </section>
                    <section ref={sec => refs.current[3] = sec} className={styles.sectionGallery} data-aos="fade-down">
                        <CarouselGallery images={galleryImages}/>
                    </section>
                    <section ref={sec => refs.current[4] = sec} className={styles.sectionContactUs}>
                        <h1 data-aos="fade-down">{contactUs.header}</h1>
                        <ContactUs locationPhoto={locationPhoto}/>
                    </section>
                </main>
            </>
        </>
    )
}
