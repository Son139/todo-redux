import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    searchFilter,
    selectPriorityFilter,
    selectStatusFilter,
} from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [selectStatus, setSelectStatus] = useState("All");
    const [selectPriority, setSelectPriority] = useState([]);
    console.log(selectPriority);
    const handleSearch = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilter(e.target.value));
    };

    const handleStatusChange = (e) => {
        setSelectStatus(e.target.value);
        dispatch(selectStatusFilter(e.target.value));
    };

    const handlePriorityChange = (value) => {
        console.log(value);
        setSelectPriority(value);
        dispatch(selectPriorityFilter(value));
    };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder="input search text"
                    value={searchText}
                    onChange={handleSearch}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group
                    onChange={handleStatusChange}
                    defaultValue={selectStatus}
                >
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: "100%" }}
                    value={selectPriority}
                    onChange={handlePriorityChange}
                >
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
