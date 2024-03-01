import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import classnames from "classnames/bind";
import styles from "./MailTo.module.scss";

const cx = classnames.bind(styles);

function MailTo() {
    const { t } = useTranslation()
    const textNameFocus = useRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        const data = {
            nameData: name,
            emailData: email,
            phoneData: phone,
            contentData: content,
        }

        if (data.nameData === '') {
            alert('Please enter full name\nXin hãy nhập tên đầy đủ')
        } else if (data.emailData === '') {
            alert('Please enter your email\nXin hãy nhập email')
        } else if (data.phoneData === '') {
            alert('Please enter your phone number\nXin hãy nhập SDT')
        } else {
            alert('Email sent successfully\nGửi email thành công')
            setName('')
            setEmail('')
            setPhone('')
            setContent('')
            textNameFocus.current.focus()
            postGoogle(data)
        }
    }

    const postGoogle = async (data) => {
        const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfudeTbMu807WwXzrfeuQ2kUTliNJguleS06izeOOYPbjOKXQ/formResponse'
        const postName = 'entry.342595382'
        const postEmail = 'entry.1862052268'
        const postPhone = 'entry.597968350'
        const postContent = 'entry.1770921687'

        const formData = new FormData()
        formData.append(postName, data.nameData)
        formData.append(postEmail, data.emailData)
        formData.append(postPhone, data.phoneData)
        formData.append(postContent, data.contentData)

        try {
            await fetch(formURL, {
                method: "POST",
                mode: "no-cors",
                body: formData
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div id={cx('form')}>
                <input placeholder={t('main.contact_page.your_name')} name='name' value={name} onChange={e => setName(e.target.value)} ref={textNameFocus} />
                <input placeholder={t('main.contact_page.your_email')} name='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder={t('main.contact_page.your_phone')} name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                <textarea placeholder={t('main.contact_page.message')} name='content' value={content} onChange={e => setContent(e.target.value)} rows="10" />
                <button id={cx('submit')} onClick={handleSubmit}>{t('main.contact_page.send_message')}</button>
            </div>
        </>
    );
}

export default MailTo;
