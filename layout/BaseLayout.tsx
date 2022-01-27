import { FC, UIEventHandler } from 'react';
import Notification from '../components/Notification';

const BaseLayout: FC = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default BaseLayout;
