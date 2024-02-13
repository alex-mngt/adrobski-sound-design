import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { COLLABORATIONS } from '../constants/collaborations';
import BaseLayout from '../layout/BaseLayout';
import s from '/styles/pages/collaborations.module.scss';
import Bubbles from '../components/Bubbles';
import Footer from '../components/Footer';

const Collaborations: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrobski - Collaborations</title>
        <meta
          name='description'
          content='Check out all the talented people and companies Adrobski has worked with over the years.'
        />
      </Head>
      <Header />
      <BaseLayout>
        <div className={`${s['collaborations']} f f-center mt-6`}>
          <div className={`${s['collaborations__grid']}`}>
            {COLLABORATIONS.map(collaboration => (
              <p key={collaboration}>{collaboration}</p>
            ))}
          </div>
        </div>
        <Footer />
      </BaseLayout>
      <Bubbles collabs />
    </>
  );
};

export default Collaborations;
