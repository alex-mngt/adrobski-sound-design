import { NextPage } from 'next';
import { ChangeEvent, useReducer, useRef, useState } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Button from '../components/inputs/Button';
import TextAreaInput from '../components/inputs/TextAreaInput';
import TextInput from '../components/inputs/TextInput';
import BaseLayout from '../layout/BaseLayout';

import s from '/styles/pages/contact.module.scss';

const Contact: NextPage = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  return (
    <>
      <Header />
      <BaseLayout>
        <Form id='form' reference={form} setIsValid={setIsFormValid}>
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
          <TextAreaInput
            className='mb-5'
            form={form}
            index={4}
            name='message'
            label='Message'
            value={message}
            setValue={setMessage}
            placeholder=''
            required
            maxLength={500}
          />
          <Button
            className={s['contact__button']}
            disabled={!isFormValid}
            text='Submit'
            type='button'
            fullWidth
            primary
          />
        </Form>
      </BaseLayout>
    </>
  );
};

export default Contact;
