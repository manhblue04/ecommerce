import { Badge, Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

function RoomTable(props) {
    const { rooms, onReload } = props;

    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số giường',
            dataIndex: 'quantityBed',
            key: 'quantityBed',
        },
        {
            title: 'Số người',
            dataIndex: 'quantityPeople',
            key: 'quantityPeople',
        },
        {
            title: 'Loại phòng',
            dataIndex: 'typeRoom',
            key: 'typeRoom',
            render: (_, record) => {
                // console.log(record.typeRoom);
                return <>
                    {record.typeRoom ? (
                        <>
                            <Tooltip title="Phòng chuẩn 5 sao" color="blue">
                                <Tag color="yellow">VIP</Tag>
                            </Tooltip>
                            {/* <Badge color="yellow" text="VIP" /> */}
                        </>
                    ) : (
                        <>
                            <Tooltip title="Phòng chuẩn 2 sao">
                                <Tag color="gray">Thường</Tag>
                            </Tooltip>
                            {/* <Badge color="gray" text="Thường" /> */}
                        </>
                    )}
                </>;
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return <>
                    {record.status ? (
                        <>
                            <Tooltip title="Phòng chưa có khác đặt">
                                <Tag color="green">Còn phòng</Tag>
                            </Tooltip>
                            {/* <Badge color="green" text="Còn phòng" /> */}
                        </>
                    ) : (
                        <>
                            <Tooltip title="Phòng đã có khách đặt">
                                <Tag color="red">Hết phòng</Tag>
                            </Tooltip>
                            {/* <Badge color="red" text="Hết phòng" /> */}
                        </>
                    )}
                </>;
            }
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (_, record) => {
                return <>
                    <DeleteRoom record={record} onReload={onReload} />
                    <EditRoom record={record} onReload={onReload} />
                </>;
            }
        },
    ];

    return (
        <>
            <Table dataSource={rooms} columns={columns} rowKey="id" />;
        </>
    );
}

export default RoomTable;