import { Layout, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/">
        <Button
          type="text"
          icon={<HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />}
        />
      </Link>
      <LanguageSelector />
    </Header>
  );
};

export default Navbar;
