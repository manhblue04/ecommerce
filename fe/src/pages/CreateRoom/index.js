import { Form, Input, Button, InputNumber, Select, Switch, message } from "antd";
import { createRoom } from "../../services/roomsServices";
const { Option } = Select;

function CreateRoom() {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const rules = [
        {
            required: true,
            message: 'Bắt buộc!',
        },
    ];

    const handleSubmit = async (values) => {
        const response = await createRoom(values);
        // const response = undefined;
        // console.log(response);
        if (response) {
            form.resetFields();
            messageApi.open({
                type: 'success',
                content: 'Tạo phòng mới thành công!',
                duration: 3,
            });
        } else {
            messageApi.open({
                type: 'error',
                content: 'Tạo phòng mới không thành công!',
                duration: 6,
            });
        }
    }

    return (
        <>
            {contextHolder}
            <h2>Thêm phòng mới</h2>

            <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form}>
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
                        Tạo mới
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CreateRoom;