import { Row, Col, Input, Button, Typography, Space } from "antd";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import "./Footer.scss";

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Row gutter={[16, 16]} justify="space-between" align="top">
                    {/* Thông tin shop */}
                    <Col xs={24} md={6} className="footer__column">
                        <Title level={4}>Eco Farm</Title>
                        <Text>Địa chỉ: Tòa nhà A1 Tầng 1 </Text>
                        <br />
                        <Text>Phone: 0912-345-678</Text>
                        <br />
                        <Text>Email: hello204@gmail.com</Text>
                    </Col>

                    {/* Danh mục cửa hàng */}
                    <Col xs={12} md={4} className="footer__column">
                        <Title level={5}>Cửa hàng</Title>
                        <Text>Liên hệ</Text>
                        <br />
                        <Text>Thông tin về chúng tôi</Text>
                        <br />
                        <Text>Sản phẩm kinh doanh</Text>
                    </Col>

                    {/* Tài khoản */}
                    <Col xs={12} md={4} className="footer__column">
                        <Title level={5}>Tài khoản</Title>
                        <Text>Thông tin tài khoản</Text>
                        <br />
                        <Text>Giỏ hàng</Text>
                        <br />
                        <Text>Danh sách yêu thích</Text>
                    </Col>

                    {/* Đăng ký nhận tin */}
                    <Col xs={24} md={8} className="footer__column">
                        <Title level={5}>Khuyến mãi & ưu đãi</Title>
                        <Text>Đăng ký nhận thông tin tại đây</Text>
                        <div className="footer__subscribe">
                            <Input placeholder="Nhập email" />
                            <Button type="primary">ĐĂNG KÝ</Button>
                        </div>
                        <Space size="middle" className="footer__social">
                            <FacebookOutlined className="footer__icon" />
                            <InstagramOutlined className="footer__icon" />
                            <TwitterOutlined className="footer__icon" />
                            <LinkedinOutlined className="footer__icon" />
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
