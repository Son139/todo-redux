import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { useState, useRef } from "react";
import { todoRemainingSelector } from "../../redux/selector";

export default function TodoList() {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todoRemainingSelector);
    // useEffect(()=> {
    console.log(todoList);
    
    // })
    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setTodoName(e.target.value);
    };

    const handlePriority = (value) => {
        console.log(value);
        setPriority(value);
    };

    const handleAddButtonClick = () => {
        dispatch(
            addTodo({
                id: uuidv4,
                name: todoName,
                priority: priority,
                completed: false,
            }),
        );
        setTodoName("");
        setPriority("Medium");
        ref.current.focus();
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {/* <Todo name="Learn React" priority="High" />
                <Todo name="Learn Redux" priority="Medium" />
                <Todo name="Learn JavaScript" priority="Low" /> */}
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input
                        onChange={handleChangeInput}
                        value={todoName}
                        ref={ref}
                    />
                    <Select defaultValue={priority} onChange={handlePriority}>
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
                    <Button type="primary" onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
