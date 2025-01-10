'use client';

import localFont from 'next/font/local';
import '@/styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import store from '@/store';
import Navbar from '@/app/components/Navbar';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/i18n';
const { Content } = Layout;

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <AntdRegistry>
              <Layout style={{ minHeight: '100vh' }}>
                <Navbar />
                <Content style={{ padding: '24px' }}>{children}</Content>
              </Layout>
            </AntdRegistry>
          </I18nextProvider>
        </Provider>
      </body>
    </html>
  );
}
