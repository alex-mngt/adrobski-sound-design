import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { MouseEventHandler, useRef, useState } from 'react';
import { Check, Icon, Loader, X } from 'react-feather';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Button from '../components/Inputs/Button';
import TextInput from '../components/Inputs/TextInput';
import BaseLayout from '../layout/BaseLayout';

import s from '/styles/pages/contact.module.scss';

const Contact: NextPage = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('Send');
  const [buttonIcon, setButtonIcon] = useState<Icon>();

  const form = useRef<HTMLFormElement>(null);

  const hanldeSubmit: MouseEventHandler = async () => {
    setButtonText('Sending');
    setButtonIcon(Loader);

    const res = await axios
      .post('/api/send-mail', {
        firstName,
        lastName,
        email,
        message,
      })
      .catch(err => console.log(err));

    if (!res || res.status !== 200) {
      setButtonText('Error sending your message, Reload + Try again');
      setButtonIcon(X);
      return;
    }

    setButtonText('Messsage sent');
    setButtonIcon(Check);
  };

  return (
    <>
      <Head>
        <title>Contact - Adrobski Sound Design</title>
      </Head>
      <Header />
      <BaseLayout>
        <Form
          id='form'
          reference={form}
          isValid={isFormValid}
          setIsValid={setIsFormValid}
        >
          <TextInput
            className='mb-3'
            form={form}
            index={1}
            type='text'
            name='firstname'
            label='Firstname'
            value={firstName}
            setValue={setFirstName}
            placeholder='John'
            required
          />
          <TextInput
            className='mb-3'
            form={form}
            index={2}
            type='text'
            name='lastname'
            label='Lastname'
            value={lastName}
            setValue={setLastName}
            placeholder='Doe'
            required
          />
          <TextInput
            className='mb-3'
            form={form}
            index={3}
            type='email'
            name='email'
            label='Email'
            value={email}
            setValue={setEmail}
            placeholder='John.Doe@provider.com'
            required
            validateOnBlur
          />
          <TextInput
            className='mb-5'
            form={form}
            index={4}
            type='textarea'
            name='message'
            label='Message'
            value={message}
            setValue={setMessage}
            placeholder={`Hey, I'd really like to work with you on some projects ...`}
            rows={5}
            required
          />
          <Button
            onClick={hanldeSubmit}
            className={s['contact__button']}
            disabled={!isFormValid}
            text={buttonText}
            icon={buttonIcon}
            type='button'
            fullWidth
            primary
          />
        </Form>
        <Footer />
      </BaseLayout>
    </>
  );
};

export default Contact;
