import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { deleteRoom } from "../../services/roomsServices";

function DeleteRoom(props) {
    const { record, onReload } = props;

    const handleDelete = async () => {
        // console.log(record.id);
        const response = await deleteRoom(record.id);
        if(response) {
            onReload();
            alert("Xóa bản ghi thành công!");
        } else {
            alert("Xóa bản ghi không thành công!");
        }
    }

    return (
        <>
            <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                <Button danger size="small" icon={<DeleteOutlined />} />
            </Popconfirm>
        </>
    );
}

export default DeleteRoom;