import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import {
  ChangeEvent,
  MouseEventHandler,
  useReducer,
  useRef,
  useState,
} from 'react';
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

  const form = useRef<HTMLFormElement>(null);

  const hanldeSubmit: MouseEventHandler = async () => {
    const res = await axios
      .post('/api/send-mail', {
        firstName,
        lastName,
        email,
        message,
      })
      .catch(err => console.log(err));

    if (!res) {
      return;
    }

    console.log(res.data);
  };

  return (
    <>
      <Head>
        <title>Contact - Adrobski Sound Design</title>
      </Head>
      <Header />
      <BaseLayout>
        {/* <div className={`${s['temp']} f f-direction-column f-center`}>
          <p className='ta-center'>
            A contact form will be available soon, meanwhile you can contact me
            via{' '}
            <a className='fw-700' href='https://twitter.com/adrobskimusic'>
              Twitter
            </a>{' '}
            or{' '}
            <a
              className='fw-700'
              href='https://www.instagram.com/adrobskimusic'
            >
              Instagram
            </a>
          </p>
        </div> */}
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
            // disabled={!isFormValid}
            text='Submit'
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
