import React, {useState} from 'react';
import styles from "../styles/contactUs.module.scss";
import {Button, TextField} from "@material-ui/core";
import config from '../config.json';
import Image from "next/image";
import axios from "axios";

const ContactUs = ({locationPhoto}) => {
    const {address} = config.contactUs;
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onFormChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!form) return;
        const body = `<h2>Someone sent you a message from the contact-us form on the website:</h2>
            <h3>Name: ${form.name}</h3>
            <h3>Email: ${form.email}</h3>
            <h3>Phone Number: ${form.phone}</h3>
            <h3> Message:<br/>${form.message}</h3>
            <br/>
            Thank you,<br/>
            The Palladom Solutions Team`
        try {
            const response = await axios.post('https://www.palladomsolutions.com/api/email', {
                    body,
                    sendTo: "tamir@palladomsolutions.com"
                },
                {withCredentials: true}
            );
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setError(undefined);
            setSuccess("Thank you!")
        } catch (err) {
            console.error(err);
            setError("There was an error, please try again");
            setSuccess(undefined)
        }
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
                    value={form.name}
                    onChange={onFormChangeHandler}
                />
                <TextField
                    name='email'
                    className={styles.textField}
                    id="standard-basic"
                    label="Email"
                    fullWidth
                    required
                    value={form.email}
                    onChange={onFormChangeHandler}
                />
                <TextField
                    name='phone'
                    className={styles.textField}
                    id="standard-basic"
                    label="Phone Number"
                    fullWidth
                    value={form.phone}
                    onChange={onFormChangeHandler}
                />
                <TextField
                    name='message'
                    className={styles.textField}
                    id="standard-basic"
                    label="How Can We Help?"
                    fullWidth
                    multiline
                    value={form.message}
                    onChange={onFormChangeHandler}
                />
                <Button variant="contained" type='submit'>
                    Send
                </Button>
                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.successMessage}>{success}</div>}
            </form>
            <div className={`${styles.contactUsLocation} ${styles.contactUsCard}`} data-aos="fade-left">
                <h2>Our Location</h2>
                <div className={styles.locationPhotoWrapper}>
                    <Image src={locationPhoto} alt={address}
                    />
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