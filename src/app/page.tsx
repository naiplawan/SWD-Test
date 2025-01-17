'use client';
import React from 'react';
import Link from 'next/link';
import { Button, Space } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';
import styles from './page.module.css';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '@/enum/translation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <div className={styles.page}>
        <main className={styles.main}>
          <Space direction="vertical">
            <Link href="/layoutpage" passHref>
              <Button type="primary" className={styles.button}>
              {t(TranslationKeys.LayoutPage)}
              </Button>
            </Link>
            <Link href="/formpage" passHref>
              <Button type="primary" className={styles.button}>
              {t(TranslationKeys.FormPage)}
              </Button>
            </Link>
          </Space>
        </main>
      </div>
    </Provider>
  );
}
