import { FC, PropsWithChildren } from 'react';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className='container f f-direction-column'>{children}</div>;
};

export default BaseLayout;
