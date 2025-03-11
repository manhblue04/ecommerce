import { Form, Input, Button, InputNumber, Select, Switch, message, Modal, notification, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../services/roomsServices";
const { Option } = Select;

function EditRoom(props) {
    const { record, onReload } = props;

    const [showModal, setShowModal] = useState(false);
    const [form] = Form.useForm();
    const [notiApi, contextHolder] = notification.useNotification();
    const [spinning, setSpinning] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
        form.resetFields();
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    const rules = [
        {
            required: true,
            message: 'Bắt buộc!',
        },
    ];

    const handleSubmit = async (values) => {
        setSpinning(true);
        
        const response = await updateRoom(record.id, values);
        // const response = undefined;
        setTimeout(() => {
            if (response) {
                notiApi.success({
                    message: 'Cập nhật phòng thành công!',
                    description: `Bạn đã cập nhật thành công phòng ${record.name}`,
                });
                setShowModal(false);
                onReload();
            } else {
                notiApi.error({
                    message: 'Cập nhật phòng thất bại!',
                    description: `Bạn đã cập nhật thất bại phòng ${record.name}`,
                });
            }
            setSpinning(false);
        }, 3000)
    }

    return (
        <>
            {contextHolder}
            <Button size="small" type="primary" icon={<EditOutlined />} onClick={handleShowModal} />
            <Modal title="Chỉnh sửa phòng" open={showModal} onCancel={handleCancel} footer={null}>
                <Spin spinning={spinning} tip="Đang cập nhật...">
                    <Form layout="vertical" name="edit-room" onFinish={handleSubmit} form={form} initialValues={record}>
                        <Form.Item
                            label="Tên phòng"
                            name="name"
                            rules={rules}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Số lượng giường"
                            name="quantityBed"
                            rules={rules}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                        <Form.Item
                            label="Số người tối đa"
                            name="quantityPeople"
                            rules={rules}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label="Tiện ích" name="utils">
                            <Select
                                style={{
                                    width: "100%",
                                }}
                                mode="multiple"
                                allowClear
                            >
                                <Option value="Wifi">Wifi</Option>
                                <Option value="Nóng lạnh">Nóng lạnh</Option>
                                <Option value="Điều hòa">Điều hòa</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item valuePropName="checked" label="Trạng thái" name="status">
                            <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
                        </Form.Item>
                        <Form.Item valuePropName="checked" label="Loại phòng" name="typeRoom">
                            <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        </>
    );
}

export default EditRoom;