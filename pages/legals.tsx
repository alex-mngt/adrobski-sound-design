import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BaseLayout from '../layout/BaseLayout';

const Legals: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legals - Adrobski Sound Design</title>
      </Head>
      <Header />
      <BaseLayout>
        <h1 className='mb-2'>Legals</h1>
        <p className='mb-5'>Effective 04/04/2022</p>
        <p className='mb-2'>
          In accordance with the provisions of Articles 6-III and 19 of the Law
          n°2004-575 of June 21, 2004 for the Confiance dans l&apos;économie
          numérique, known as L.C.E.N., users and visitors, hereinafter the
          visitors, hereinafter the &quot;User&quot;, of the site
          https://soundesign.adrobski.fr, hereinafter the &quot;Site&quot;, the
          the present legal notice.
        </p>
        <p className='mb-2'>
          The connection and the navigation on the Site by the User implies full
          acceptance and without reserve of the present legal notice.
        </p>
        <p>
          The latter are accessible on the Site under the heading
          &quot;Legals&quot;.
        </p>
        <h2 className='mt-3 mb-3'>ARTICLE 1 - THE EDITOR</h2>
        <p className='mb-2'>
          The editing and the direction of the publication of the Site is
          ensured by Tanguy Drobniewski, domiciled at 11 rue de Dijon, 21121,
          Val Suzon, France, whose telephone number is 0778325716, and whose
          email address is adrobski.music@gmail.com.
        </p>
        <p>hereinafter the &quot;Publisher&quot;.</p>
        <h2 className='mt-3 mb-3'>ARTICLE 2 - THE HOST</h2>
        <p className='mb-2'>
          The host of the Site is the company Vercel, Cloud provider whose site
          is accessible at the following address: htpps://vercel.com
        </p>
        <h2 className='mt-3 mb-3'>ARTICLE 3 - ACCESS TO THE SITE</h2>
        <p className='mb-2'>
          The Site is accessible at any place, 7 days a week, 24 hours a day,
          except in cases of force majeure, scheduled or unscheduled
          interruption scheduled or not and which may arise from a need for
          maintenance.
        </p>
        <p>
          In case of modification, interruption or suspension of the Site, the
          Editor could not be held responsible.
        </p>
        <h2 className='mb-3 mt-3'>SECTION 4 - DATA COLLECTION</h2>
        <p className='mb-2'>
          The site is exempt from declaration to the Commission Nationale
          Informatique et Libertés (CNIL) insofar as it does not insofar as it
          does not collect any data concerning the users.
        </p>
        <p>
          Any use, reproduction, distribution, marketing, modification of all or
          part of the Site, without the authorization of the Editor is
          prohibited and may result in legal action and prosecution such as
          notably envisaged by the Code of the intellectual property and the
          Civil code.
        </p>
        <Footer />
      </BaseLayout>
    </>
  );
};

export default Legals;
