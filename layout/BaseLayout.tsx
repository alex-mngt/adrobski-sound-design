import { FC, UIEventHandler } from 'react';

const BaseLayout: FC = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default BaseLayout;
