import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const GeneralLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default GeneralLayout;
