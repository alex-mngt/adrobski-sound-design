import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { COLLABORATIONS } from '../constants/collaborations';
import BaseLayout from '../layout/BaseLayout';
import s from '/styles/pages/collaborations.module.scss';

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
        <div className={`${s['collaborations']} mt-6 f f-center f-wrap`}>
          {COLLABORATIONS.map((collaboration, idx) => (
            <>
              <p>{collaboration}</p>
              {idx !== COLLABORATIONS.length - 1 ? (
                <div className={s['collaborations__separator']}>•</div>
              ) : null}
            </>
          ))}
        </div>
      </BaseLayout>
    </>
  );
};

export default Collaborations;
