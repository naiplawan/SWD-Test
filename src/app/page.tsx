'use client';
import Link from 'next/link';
import { Button, Space } from 'antd';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Space direction="vertical">
          <Link href="/layoutpage" passHref>
            <Button type="primary" className={styles.button}>
              LayOutPage
            </Button>
          </Link>
          <Link href="/formpage" passHref>
            <Button type="primary" className={styles.button}>
              FormPage
            </Button>
          </Link>
        </Space>
      </main>
    </div>
  );
}
