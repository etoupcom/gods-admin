import { useState, useEffect } from 'react';
import { Button, Divider, Card, Table, Empty, Popconfirm, Tag, message } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { PermissionState, ConnectRC, Loading, connect, useAccess, Access } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { CreatedFormItem, UpdatedFormItem } from './data.d';
import Created from './components/Created'
import Updated from './components/Updated'

interface PageProps {
    permission: PermissionState;
    loading: boolean;
}

const TableList: ConnectRC<PageProps> = props => {
    const {
        loading,
        dispatch,
        permission: { list },
    } = props;

    const [parent, setParent] = useState<UpdatedFormItem>();
    const [expandable] = useState<any>({ defaultExpandAllRows: true });
    const [createdVisible, handleCreatedVisible] = useState<boolean>(false);
    const [updatedVisible, handleUpdatedVisible] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<UpdatedFormItem>();
    const access = useAccess();

    useEffect(() => {
        handleFetch()
    }, []);

    const handleFetch = () => {
        dispatch({
            type: 'permission/fetch',
        });
    };

    const handleCreated = (fields: CreatedFormItem, form: FormInstance) => {
        dispatch({
            type: 'permission/created',
            payload: { ...fields },
            callback: (res: any) => {
                if (res.status === 'success') {
                    handleCreatedVisible(false)
                    handleFetch()
                    form.resetFields()
                }
            }
        });
    }

    const handleUpdated = (fields: UpdatedFormItem, form: FormInstance) => {
        dispatch({
            type: 'permission/updated',
            payload: { ...fields },
            callback: (res: any) => {
                if (res.status === 'success') {
                    handleUpdatedVisible(false)
                    handleFetch()
                    form.resetFields()
                }
            }
        });
    }

    const handleDeleted = (id: number) => {
        if (id) {
            dispatch({
                type: 'permission/deleted',
                payload: { id },
                callback: (res: any) => {
                    if (res.status === 'success') {
                        handleFetch()
                    }
                }
            });
        }
    }

    const columns: any = [
        {
            title: '??????',
            dataIndex: 'title',
            key: 'title',
            width: '20%',
            rules: [
                {
                    required: true,
                    message: '??????????????????',
                },
            ],
        },
        {
            title: '??????',
            dataIndex: 'icon',
            key: 'icon',
            hideInForm: true,
            width: '10%',
            render: (val: string) => val ? val : '-'
        },
        {
            title: '????????????',
            dataIndex: 'path',
            key: 'path',
        },
        {
            title: '??????',
            dataIndex: 'component',
            key: 'component',
        },
        {
            title: '??????',
            dataIndex: 'type',
            hideInForm: true,
            render: (v: number) => v == 10 ? <Tag color="#87d068">??????</Tag> : <Tag color="#2db7f5">??????</Tag>
        },
        {
            title: '??????',
            dataIndex: 'option',
            valueType: 'option',
            render: (_: string, record: any, index: number) => (
                <>
                    <Access accessible={access.canPermissionCreated} fallback={
                        <a
                            style={{ padding: 0 }}
                            onClick={() => message.error('???????????????')}
                        >
                            -
                        </a>
                    }>
                        <a
                            style={{ padding: 0 }}
                            onClick={() => {
                                setParent(record)
                                handleCreatedVisible(true)
                            }}
                        >
                            ????????????
                        </a>
                    </Access>
                    <Divider type="vertical" />
                    <Access accessible={access.canPermissionUpdated} fallback={
                        <a
                            style={{ padding: 0 }}
                            onClick={() => message.error('???????????????')}
                        >
                            -
                        </a>
                    }>
                        <a
                            style={{ padding: 0 }}
                            onClick={() => {
                                setParent(record)
                                setFormValues(record)
                                handleUpdatedVisible(true)
                            }}
                        >
                            ??????
                        </a>
                    </Access>
                    <Divider type="vertical" />
                    <Access accessible={access.canPermissionDeleted} fallback={
                        <a
                            style={{ padding: 0 }}
                            onClick={() => message.error('???????????????')}
                        >
                            -
                        </a>
                    }>
                        <Popconfirm
                            title="?????????????????????????"
                            onConfirm={() => handleDeleted(record.id)}
                            okText="??????"
                            cancelText="??????"
                        >
                            <a
                                style={{ padding: 0 }}
                            >
                                ??????
                            </a>
                        </Popconfirm>
                    </Access>
                </>
            ),
        },
    ];

    const CreatedButton = () => {
        const { canPermissionCreated } = access
        return canPermissionCreated ? <Button type="primary" onClick={() => handleCreatedVisible(true)}>??????</Button> : null
    }

    return (
        <PageContainer>
            <Card title="??????" extra={<><CreatedButton /></>}>
                {
                    list && list.length > 0 ? (
                        <Table
                            rowKey='id'
                            pagination={false}
                            loading={loading}
                            columns={columns}
                            dataSource={list}
                            expandable={expandable}
                        />
                    ) : (
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={
                                <span>
                                    ????????????
                                </span>
                            }
                        >
                        </Empty>
                    )
                }
                {
                    parent ? (
                        <Created
                            visible={createdVisible}
                            parent={parent}
                            onCreated={handleCreated}
                            onCancel={(form: FormInstance) => {
                                handleCreatedVisible(false)
                                setParent(undefined)
                                form.resetFields()
                            }}

                        />
                    ) : (
                        <Created
                            visible={createdVisible}
                            onCreated={handleCreated}
                            onCancel={(form: FormInstance) => {
                                handleCreatedVisible(false)
                                form.resetFields()
                            }}

                        />
                    )
                }
                {
                    formValues && (
                        <Updated
                            visible={updatedVisible}
                            fields={formValues}
                            onUpdated={handleUpdated}
                            onCancel={(form: FormInstance) => {
                                handleUpdatedVisible(false)
                                form.resetFields()
                            }}
                        />
                    )
                }
            </Card>
        </PageContainer>
    )
};

export default connect(
    ({ permission, loading }: { permission: PermissionState; loading: Loading }) => ({
        permission,
        loading: loading.models.permission,
    }),
)(TableList);