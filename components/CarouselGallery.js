import React from 'react';
import {Carousel} from "react-responsive-carousel";
import styles from "../styles/carouselGallery.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselGallery = ({images}) => {
        return (
            <>
                {images &&
                <Carousel
                    className={styles.carouselGallery}
                    autoPlay={false}
                    infiniteLoop={false}
                    interval={5 * 1000}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={true}
                    thumbWidth={80}
                    emulateTouch
                    swipeable
                >
                    {
                        images.map((image, index) =>
                            <div key={`cs-${index}`} className={styles.carouselGallerySlide}>
                                <img src={image.src}
                                     className={styles.carouselImage}
                                     alt={image.alt}/>
                            </div>
                        )
                    }
                </Carousel>
                }
            </>
        );
    }
;

export default CarouselGallery;