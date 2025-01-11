import React from 'react';
import { Table, Button, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSelectedSubmission, deleteSubmission, setCurrentPage } from '@/store/formSlice';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '@/enum/translation';

interface FormData {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: string;
  citizenID?: string;
  gender: string;
  mobilePhone: string;
  passportNo?: string;
  expectedSalary: number;
}

const FormTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { submissions, currentPage, pageSize } = useSelector((state: RootState) => state.form);

  const columns = [
    { title: t(TranslationKeys.Title), dataIndex: 'title', key: 'title' },
    { title: t(TranslationKeys.FirstName), dataIndex: 'firstName', key: 'firstName' },
    { title: t(TranslationKeys.LastName), dataIndex: 'lastName', key: 'lastName' },
    { title: t(TranslationKeys.Birthday), dataIndex: 'birthday', key: 'birthday' },
    { title: t(TranslationKeys.Nationality), dataIndex: 'nationality', key: 'nationality' },
    { title: t(TranslationKeys.Gender), dataIndex: 'gender', key: 'gender' },
    { title: t(TranslationKeys.MobilePhone), dataIndex: 'mobilePhone', key: 'mobilePhone' },
    {
      title: t(TranslationKeys.ExpectedSalary),
      dataIndex: 'expectedSalary',
      key: 'expectedSalary',
      render: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: unknown, record: FormData) => (
        <Space>
          <Tooltip title="Edit">
            <Button
              onClick={() => dispatch(setSelectedSubmission(record))}
              type="text"
              icon={<EditOutlined style={{ fontSize: '16px', color: '#1890ff' }} />}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              onClick={() => dispatch(deleteSubmission(record.id))}
              type="text"
              danger
              icon={<DeleteOutlined style={{ fontSize: '16px' }} />}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={submissions}
      columns={columns}
      pagination={{
        current: currentPage,
        pageSize,
        onChange: (page) => dispatch(setCurrentPage(page)),
        total: submissions.length,
      }}
      rowKey="id"
      scroll={{ x: true }}
    />
  );
};

export default FormTable;
