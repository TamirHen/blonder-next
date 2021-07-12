import React, {useState} from 'react';
import styles from "../styles/contactUs.module.scss";
import {Button, TextField} from "@material-ui/core";
import config from '../config.json';
import Image from "next/image";

const ContactUs = ({locationPhoto}) => {
    const {address} = config.contactUs;
    const [form, setForm] = useState();
    const onFormChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.contactUsWrapper}>
            <form data-aos="fade-right"
                  className={styles.contactUsCard}
                  onChange={onFormChangeHandler}
                  onSubmit={onSubmitHandler}
            >
                <h2>Contact Us</h2>
                <TextField
                    name='name'
                    className={styles.textField}
                    id="standard-basic"
                    label="Your Name"
                    fullWidth
                    required
                />
                <TextField
                    name='phoneNumber'
                    className={styles.textField}
                    id="standard-basic"
                    label="Phone Number"
                    fullWidth
                    required
                />
                <TextField
                    name='email'
                    className={styles.textField}
                    id="standard-basic"
                    label="Email"
                    fullWidth
                    required
                />
                <TextField
                    name='message'
                    className={styles.textField}
                    id="standard-basic"
                    label="How Can We Help?"
                    fullWidth
                    multiline
                    required
                />
                <Button variant="contained" type='submit'>
                    Send
                </Button>
            </form>
            <div className={`${styles.contactUsLocation} ${styles.contactUsCard}`} data-aos="fade-left">
                <h2>Our Location</h2>
                <div className={styles.locationPhotoWrapper}>
                    <Image src={locationPhoto} alt={address}/>
                </div>
                <p>{address}</p>
                <Button variant="contained" type='submit'>
                    Get Directions
                </Button>
            </div>
        </div>
    );
};

export default ContactUs;