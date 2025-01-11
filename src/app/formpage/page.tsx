'use client';
import React from 'react';
import { Form, Input, Button, Radio, DatePicker, InputNumber, Row, Col } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { updateForm, resetForm } from '@/store/formSlice';
import styles from './formpage.module.scss';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '@/enum/translation';

const FormPage = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(updateForm(values));
  };

  const onReset = () => {
    form.resetFields();
    dispatch(resetForm());
    console.log('Form reset');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Form form={form} name="control-hooks" onFinish={onFinish} layout="vertical" initialValues={formData}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input your title!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label={t(TranslationKeys.FirstName)}
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label={t(TranslationKeys.LastName)}
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="birthday"
                label={t(TranslationKeys.Birthday)}
                rules={[{ required: true, message: 'Please input your birthday!' }]}
              >
                <DatePicker disabledDate={(current) => current && current > moment().endOf('day')} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="nationality"
                label= {t(TranslationKeys.Nationality)}
                rules={[{ required: true, message: 'Please input your nationality!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="citizenID"
              label= {t(TranslationKeys.CitizenID)}
              tooltip="Optional">
                <Input placeholder="Optional" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label={t(TranslationKeys.Gender)}
                rules={[{ required: true, message: t(TranslationKeys.ValidationRequired) }]}
              >
                <Radio.Group>
                  <Radio value="male">{t(TranslationKeys.Male)}</Radio>
                  <Radio value="female">{t(TranslationKeys.Female)}</Radio>
                  <Radio value="other">{t(TranslationKeys.Other)}</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="mobilePhone"
                label= {t(TranslationKeys.MobilePhone)}
                rules={[
                  { required: true, message: 'Please input your mobile phone!' },
                  { pattern: /^\d+$/, message: 'Mobile number must be numeric!' },
                ]}
              >
                <Input maxLength={10} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="passportNo"
                label= {t(TranslationKeys.PassportNo)}
                tooltip="Optional"
                rules={[{ pattern: /^[a-zA-Z0-9]+$/, message: 'Passport number must be alphanumeric!' }]}
              >
                <Input placeholder="Optional" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="expectedSalary"
                label={t(TranslationKeys.ExpectedSalary)}
                rules={[{ required: true, message: 'Please input your expected salary!' }]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, '') : '')}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {t(TranslationKeys.Submit)}
                </Button>
                <Button htmlType="button" onClick={onReset} style={{ marginLeft: '10px' }}>
                  {t(TranslationKeys.Reset)}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default FormPage;
