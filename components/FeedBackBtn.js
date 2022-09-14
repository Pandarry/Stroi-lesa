import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '/styles/FeedBackBtn.module.scss';

import img from '../public/img/phone.jpg';

const FeedBackForm = () => {
    const [contactName, setContactName] = useState('');
    const [contactDetail, setContactDetail] = useState('');

    const [isNameValid, setNameValid] = useState('neutral');
    const [isContactValid, setContactValid] = useState('neutral');

    const nameHandler = (e) => {
        if (e.target.value.length >= 3) {
            setNameValid('valid');
        } else if (e.target.value.length == 0) {
            setNameValid('neutral');
        } else {
            setNameValid('invalid');
        }
        setContactName(e.target.value);
    };

    const contactHandler = (e) => {
        if (e.target.value.length >= 3) {
            setContactValid('valid');
        } else if (e.target.value.length == 0) {
            setContactValid('neutral');
        } else {
            setContactValid('invalid');
        }
        setContactDetail(e.target.value);
    };

    let isFormValid = false;
    if (isNameValid == 'valid' && isContactValid == 'valid') {
        isFormValid = true;
    }

    let nameStyles = '';
    switch (isNameValid) {
        case 'valid':
            nameStyles = styles.valid;
            break;
        case 'invalid':
            nameStyles = styles.invalid;
            break;
        default:
            nameStyles = '';
            break;
    }

    let contactStyles = '';
    switch (isContactValid) {
        case 'valid':
            contactStyles = styles.valid;
            break;
        case 'invalid':
            contactStyles = styles.invalid;
            break;
        default:
            contactStyles = '';
            break;
    }

    // const sendMail = async (e) => {
    //     e.preventDefault()

    //     if (isFormValid) {
    //         axios.post('/api/email', {
    //             contactName,
    //             contactDetail,
    //             contactMessage
    //         })
    //             .then((res) => {
    //                 alert('Thank you! your request has been sent')
    //                 setContactName('')
    //                 setContactDetail('')
    //                 setContactMessage('')
    //             }
    //             ).catch(
    //                 (e) => console.log(e)
    //             )
    //     } else {
    //         console.log('Form is not valid')
    //     }
    // }

    const contactContent = {
        textName: 'Имя',
        textContact: 'Email или телефон',
        textSend: 'Отправить',
    };

    const { textName, textContact, textSend } = contactContent;

    return (
        <div className={styles.Overlay}>
            <div className={styles.Modal}>
                <div className={styles.ContactContent}>
                    <form className={styles.ContactForm}>
                        <h2>Свяжитесь с нами</h2>
                        <p>И мы ответим на все Ваши вопросы и поможем решить проблему.</p>
                        <input
                            id="contact_name"
                            type="text"
                            value={contactName}
                            onChange={nameHandler}
                            placeholder={textName}
                            required
                            className={nameStyles}
                        />
                        <input
                            id="contact_detail"
                            type="text"
                            value={contactDetail}
                            onChange={contactHandler}
                            placeholder={textContact}
                            required
                            className={contactStyles}
                        />
                        <button type="submit" disabled={isFormValid ? false : true}>
                            {textSend}
                        </button>
                    </form>
                </div>
                <Image src={img} width={300} height={400} />

                <svg height="200" viewBox="0 0 200 200" width="200">
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
            </div>
        </div>
    );
};

export default function FeedBackBtn({ name }) {
    const [showFBForm, setShowFBForm] = useState(false);

    return (
        <>
            <button onClick={() => setShowFBForm(true)} className={styles.FeedBackBtn}>
                {name}
            </button>
            {showFBForm && <FeedBackForm />}
        </>
    );
}
