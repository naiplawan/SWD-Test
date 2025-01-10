import { Layout } from 'antd';
import LanguageSelector from './LanguageSelector';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <LanguageSelector />
    </Header>
  );
};

export default Navbar;
