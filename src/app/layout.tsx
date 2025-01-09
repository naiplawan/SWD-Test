'use client';

import localFont from 'next/font/local';
import '@/styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Provider } from 'react-redux';
import store from '@/store';
import {metadata} from './metadata';

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
          <AntdRegistry>{children}</AntdRegistry>
        </Provider>
      </body>
    </html>
  );
}
