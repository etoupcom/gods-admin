import React, { useState, useEffect } from 'react';
import { Drawer, Button, Row, Col, Form, Input, Select, TreeSelect, DatePicker, message } from 'antd';
import { RoleItem } from '../data.d';
import { UpdatedFormItem } from '../data.d';
import { FormInstance } from 'antd/lib/form';
import { info } from '../service'
import moment from 'moment';

interface UpdatedFormProps {
    visible: boolean;
    fields: UpdatedFormItem;
    onCancel: () => void;
    onUpdated: (values: UpdatedFormItem, form: FormInstance) => void;
}

const UpdatedForm: React.FC<UpdatedFormProps> = (props) => {
    const { visible, fields, onCancel, onUpdated } = props;
    const [department, setDepartment] = useState<any>();
    const [date, setDate] = useState<any>();
    const [role, setRole] = useState<RoleItem[]>([]);
    const [project, setProject] = useState<any>([]);
    const [form] = Form.useForm();

    useEffect(() => {
        if (Object.keys(fields).length > 0) {
            if (fields.roles) {
                const role = fields.roles.map((v: any) => v.name)
                if (fields.birthday) {
                    form.setFieldsValue({ ...fields, role, birthday: moment(fields.birthday) })
                } else {
                    form.setFieldsValue({ ...fields, role })
                }
            } else {
                form.setFieldsValue({ ...fields, project_id: fields.project_id ? fields.project_id : undefined })
            }
            info().then((res: any) => {
                if (res.status === 'success') {
                    setDepartment(res.data.department)
                    setProject(res.data.project.map((v: any) => { return { value: v.id, label: v.name } }))
                    setRole(res.data.role)
                }
            })
        }
    }, [props.fields]);

    const onFinish = () => {
        form.validateFields().then((item: any) => {
            onUpdated({ ...fields, ...item, birthday: date }, form)
        }).catch(err => {
            const { errorFields } = err
            if (errorFields.length > 0) {
                message.error('????????????????????????')
            }
        })
    }

    const handleChange = () => {

    }

    const handleBirthdayChange = (v: any, vs: any) => {
        setDate(vs)
    }

    const onChange = (value: any) => {
        console.log(value);

    }

    return (
        <Drawer
            title="????????????"
            width={450}
            visible={visible}
            onClose={onCancel}
            maskClosable={false}
            footer={
                <div
                    style={{
                        textAlign: 'right',
                        marginRight: 10
                    }}
                >
                    <>
                        <Button
                            onClick={onCancel}
                            style={{
                                marginRight: 10
                            }}
                        >
                            ??????
                        </Button>
                        <Button
                            type="primary"
                            onClick={onFinish}
                        >
                            ??????
                        </Button>
                    </>
                </div>
            }
        >
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Form.Item
                            name="mobile"
                            label="????????????"
                            rules={[{ required: true, message: '?????????????????????????????????' }]}
                        >
                            <Input key='mobile' allowClear disabled placeholder="?????????????????????????????????" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="real_name"
                            label="????????????"
                            rules={[{ required: true, message: '???????????????????????????' }]}
                        >
                            <Input allowClear placeholder="???????????????????????????" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="department_id"
                            label="????????????"
                            rules={[{ required: true, message: '?????????????????????' }]}
                        >
                            <TreeSelect
                                style={{ width: '100%' }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={department}
                                placeholder="?????????????????????"
                                treeDefaultExpandAll
                                onChange={onChange}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="role"
                            label="????????????"
                            rules={[{ required: true, message: '?????????????????????' }]}
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="?????????????????????"
                                onChange={handleChange}
                            >
                                {
                                    role.length > 0 && role.map((v: RoleItem) => <Select.Option key={v.code} value={v.code}>{v.name}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="password"
                            label="????????????"
                        >
                            <Input type='password' allowClear placeholder="?????????????????????" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="confirm"
                            label="????????????"
                        >
                            <Input type='password' allowClear placeholder="?????????????????????" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="project_id"
                            label="????????????"
                        >
                            <Select allowClear style={{ width: '100%' }} placeholder='???????????????????????????' options={project} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="sex"
                            label="????????????"
                        >
                            <Select style={{ width: '100%' }} placeholder='?????????????????????' onChange={handleChange}>
                                <Select.Option value="10">???</Select.Option>
                                <Select.Option value="20">???</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="birthday"
                            label="????????????"
                        >
                            <DatePicker style={{ width: '100%' }} onChange={handleBirthdayChange} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="telephone"
                            label="????????????"
                        >
                            <Input allowClear placeholder="?????????????????????" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            label="????????????"
                        >
                            <Input allowClear placeholder="?????????????????????" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="remark"
                            label="????????????"
                        >
                            <Input.TextArea rows={4} placeholder="?????????????????????" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
};

export default UpdatedForm;
