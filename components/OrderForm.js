import { useState } from 'react';
import axios from 'axios';
import styles from '/styles/OrderForm.module.scss';

export default function FeedBackForm({ showForm, clickHandler, orderData }) {
    const [contactName, setContactName] = useState('');
    const [contactDetail, setContactDetail] = useState('');
    const [checked, setChecked] = useState([]);

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

    const ordersHandler = (e) => {
        if (e.target.checked == true) {
            if (checked.length == 0) {
                let array = [...checked];
                array.push(e.target.value);
                setChecked(array);
            } else {
                checked.filter((name) => {
                    if (name !== e.target.value) {
                        let array = [...checked];
                        array.push(e.target.value);
                        setChecked(array);
                    }
                });
            }
        } else {
            let index = checked.indexOf(e.target.value);
            let array = [...checked];
            array.splice(index, 1);
            setChecked(array);
        }
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

    const sendMail = async (e) => {
        e.preventDefault();
        console.log(contactName + ' ' + contactDetail + ' ' + checked);

        if (isFormValid) {
            axios
                .post('/api/email', {
                    contactName,
                    contactDetail,
                    checked,
                })
                .then((res) => {
                    alert('Спасибо! Мы получили вашу заявку');
                    setContactName('');
                    setContactDetail('');
                    setChecked([]);
                    console.log(contactName, contactDetail, checked);
                })
                .catch((e) => console.log(e));
        } else {
            console.log('Form is not valid');
        }
    };

    const contactContent = {
        textName: 'Имя',
        textContact: 'Email или телефон',
        textSend: 'Отправить',
    };

    const { textName, textContact, textSend } = contactContent;

    return (
        <div className={styles.Overlay} style={{ display: showForm ? 'block' : 'none' }}>
            <div className={styles.Modal}>
                <div className={styles.ContactContent}>
                    <form className={styles.ContactForm} onSubmit={sendMail}>
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
                        {orderData.map((order, index) => {
                            return (
                                <div key={index} className={styles.CheckBox}>
                                    <div className={styles.CheckBoxWrapper}>
                                        <input
                                            id={order.id}
                                            type="checkbox"
                                            value={order.name}
                                            onChange={ordersHandler}
                                        />
                                        <label htmlFor={order.id}>{order.name}</label>
                                    </div>
                                </div>
                            );
                        })}

                        <button
                            type="submit"
                            disabled={isFormValid ? false : true}
                            onClick={clickHandler}>
                            {textSend}
                        </button>
                    </form>
                </div>

                <button onClick={clickHandler}>
                    <svg height="200" viewBox="0 0 200 200" width="200">
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
