import './ContactForm.scss';

import React from 'react';

import {useState} from 'react';

type IFormElem = {
    value: string;
    error: string;
}

type IForm = {
    name: IFormElem;
    email: IFormElem;
    message: IFormElem;
}

const ContactForm: React.FC = () => {

    const initialData: IForm = {
        name: {value: '', error: ''},
        email: {value: '', error: ''},
        message: {value: '', error: ''}
    }

    const [formData, setFormData] = useState<IForm>(initialData);
    const [status, setStatus] = useState<'sent' | 'sending' | ''>('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        const changedItem = e.target.name;
        const newValue = e.target.value;

        setFormData({
            ...formData,
            [changedItem]: {
                ...formData[changedItem as keyof IForm],
                value: newValue
            }
        })
    }

    const validateInputs = () => {

        let validatedFormData = {...formData};
        let success = true;

        // EMPTY FIELDS VALIDATION
        for (let formItem in validatedFormData) {
            if (validatedFormData[formItem as keyof IForm].value !== '') {
                validatedFormData[formItem as keyof IForm].error = '';
            } else {
                validatedFormData[formItem as keyof IForm].error = 'This field is required';
                success = false;
            }
        }

        // EMAIL REGEX VALIDATION
        if (!validatedFormData.email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && validatedFormData.email.value !== '') {
            validatedFormData.email.error = 'Please use a valid email address';
            success = false;
        }

        setFormData(validatedFormData);
        return success;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validated = validateInputs();
        if (validated) {
            setStatus('sending');

            setTimeout(() => {
                setStatus('sent');
                setTimeout(() => {
                    setStatus('');
                    setFormData(initialData);
                }, 500);
            }, 2000);

        } else {
            setStatus('');
        }
    }

    return (
        <div className="contact contact-grid">
            <h2 className="contact__title">Contact Me</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <label className={`contact__form-item ${formData.name.error !== '' ? 'contact__form-item-failed' : ''}`}>
                    Name
                    <input
                        type="text"
                        className="contact__form-itemInput"
                        placeholder="Jane Appleseed"
                        name="name"
                        value={formData.name.value}
                        onChange={handleChange}/>
                    <p className="contact__form-itemError"><i>{formData.name.error}</i></p>
                </label>
                <label className={`contact__form-item ${formData.email.error !== '' ? 'contact__form-item-failed' : ''}`}>
                    Email Address
                    <input
                        type="text"
                        className="contact__form-itemInput"
                        placeholder="email@example.com"
                        name="email"
                        value={formData.email.value}
                        onChange={handleChange}/>
                    <p className="contact__form-itemError"><i>{formData.email.error}</i></p>
                </label>
                <label className={`contact__form-item ${formData.message.error !== '' ? 'contact__form-item-failed' : ''}`}>
                    Message
                    <textarea
                        className="contact__form-itemInput"
                        placeholder="How can I help?"
                        name="message"
                        value={formData.message.value}
                        onChange={handleChange}/>
                    <p className="contact__form-itemError"><i>{formData.message.error}</i></p>
                </label>
                <button type="submit" className={`contact__btn navlink ${status !== '' ? `contact__btn-${status}` : ''}`}>
                    <div>
                        <p>send message</p>
                        <p>message sent</p>
                        <p>send message</p>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
