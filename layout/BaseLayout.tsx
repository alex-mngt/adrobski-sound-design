import { FC } from 'react';

const BaseLayout: FC = ({ children }) => {
  return <div className='container f f-direction-column'>{children}</div>;
};

export default BaseLayout;
