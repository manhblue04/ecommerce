import { Button, Checkbox, Col, DatePicker, Input, Radio, Row, Select, Space } from 'antd';
import { useState } from 'react';
import { bookRoom } from '../../services/bookRoomService';
const { RangePicker } = DatePicker;

function BookRoom() {
    const [data, setData] = useState({
        time: "14 giờ"
    });

    const optionsTime = [];

    for(let i = 7; i <= 24; i++) {
        optionsTime.push({
            value: i > 9 ? `${i} giờ` : `0${i} giờ`,
            label: i > 9 ? `${i} giờ` : `0${i} giờ`,
        })
    }

    const handleChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(object);
    }

    const handleChangeCheckbox = (e) => {
        const object = {
            ...data,
            services: e
        };
        setData(object);
    }

    const handleChangeDate = (dates, dateStrings) => {
        const object = {
            ...data,
            date: dateStrings
        };
        setData(object);
    }

    const handleChangeSelect = (e) => {
        const object = {
            ...data,
            time: e
        };
        setData(object);
    }

    const handleSubmit = async () => {
        const response = await bookRoom(data);
        // console.log(response);
        if(response) {
            alert("Chúc mừng bạn đã đặt phòng thành công!");
        } else {
            alert("Xin lỗi, vui lòng đặt lại sau!");
        }
    }

    return (
        <>
            <h2>Đặt phòng</h2>

            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <p>Họ tên</p>
                    <Input name='fullName' placeholder="Ví dụ: Le Van A" onChange={handleChangeInput} />
                </Col>
                <Col span={12}>
                    <p>Số điện thoại</p>
                    <Input name='phone' placeholder="Ví dụ: 0123456789" onChange={handleChangeInput} />
                </Col>
                <Col span={12}>
                    <p>Email</p>
                    <Input name='email' placeholder="Ví dụ: levana@gmail.com" onChange={handleChangeInput} />
                </Col>
                <Col span={12}>
                    <p>Dịch vụ thêm</p>
                    <Checkbox.Group onChange={handleChangeCheckbox}>
                        <Space direction='vertical'>
                            <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                            <Checkbox value="Thuê xe ô tô 4 chỗ">Thuê xe ô tô 4 chỗ</Checkbox>
                            <Checkbox value="Thuê xe ô tô 7 chỗ">Thuê xe ô tô 7 chỗ</Checkbox>
                            <Checkbox value="Thuê xe ô tô 16 chỗ">Thuê xe ô tô 16 chỗ</Checkbox>
                        </Space>
                    </Checkbox.Group>
                </Col>
                <Col span={12}>
                    <p>Quà tặng</p>
                    <Radio.Group name='gift' onChange={handleChangeInput}>
                        <Space direction='vertical'>
                            <Radio value="Áo phông">Áo phông</Radio>
                            <Radio value="Mũ">Mũ</Radio>
                            <Radio value="Khăn">Khăn</Radio>
                        </Space>
                    </Radio.Group>
                </Col>
                <Col span={12}>
                    <p>Chọn ngày</p>
                    <RangePicker placeholder={["Nhận phòng", "Trả phòng"]} format="DD/MM/YYYY" onChange={handleChangeDate} />
                </Col>
                <Col span={12}>
                    <p>Giờ nhận phòng</p>
                    <Select
                        style={{
                            width: "50%",
                        }}
                        defaultValue={data.time}
                        options={optionsTime}
                        onChange={handleChangeSelect} />
                </Col>
                <Col span={24}>
                    <Button type='primary' onClick={handleSubmit}>Đặt phòng</Button>
                </Col>
            </Row>
        </>
    );
}

export default BookRoom;