import { useState } from "react";
import { Container } from "@mui/system";
import { Puff } from "react-loading-icons";
import { useSelector } from "react-redux";
import { DeleteOutlined, AddOutlined } from "@mui/icons-material";

import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../redux/api/apiSlice";
import {
  Checkbox,
  TodoText,
  TodoLi,
  TodoItemUl,
  AddIcon,
  DeleteIcon,
  IconBar,
  Input,
  InputBar,
} from "./style";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");

  const theme = useSelector((state) => state.theme);

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useUpdateTodoMutation();
  const handleInput = (e) => {
    e.preventDefault();

    if (newTodo.length > 3) {
      addTodo({ todo: newTodo, isCompleted: false });
      setNewTodo("");
    }
  };
  const editTodoHendler = async (e, id) => {
    e.target.contentEditable = true;
  };
  const saveEditedTodoHendler = async (e, todo) => {
    editTodo({ ...todo, todo: e.target.textContent });
  };
  let content;

  if (isLoading) {
    content = (
      <div
        style={{ display: "flex", justifyContent: "center" }}
        value={newTodo}
      >
        <Puff stroke="#fff" />
      </div>
    );
  } else if (isSuccess) {
    content = todos.map((todo) => {
      return (
        <TodoItemUl
          key={todo.id}
          style={{
            border: theme.darkTheme ? "1px solid #E0E1DD" : "1px solid #0D1B2A",
            borderRadius: "15px 0px 0px 15px",
          }}
        >
          <Checkbox
            type="checkbox"
            checked={todo.isCompleted}
            id={todo.id}
            onChange={() =>
              updateTodo({ ...todo, isCompleted: !todo.isCompleted })
            }
          />
          <TodoLi key={todo.id}>
            <TodoText
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
              onClick={editTodoHendler}
              onBlur={(e) => {
                saveEditedTodoHendler(e, todo);
              }}
            >
              {todo.todo}
            </TodoText>
          </TodoLi>

          <IconBar>
            <DeleteIcon onClick={() => deleteTodo({ id: todo.id })}>
              <DeleteOutlined />
            </DeleteIcon>
          </IconBar>
        </TodoItemUl>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <Container>
      {/* input bar Start */}
      <InputBar
        style={{
          borderBottom: theme.darkTheme ? "1px solid #E0E1DD" : "#0D1B2A",
        }}
      >
        <Input
          placeholder="Todo Ekle"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          style={{
            backgroundColor: theme.darkTheme ? "#0D1B2A" : "#E0E1DD",
            color: theme.darkTheme ? "#E0E1DD" : "#0D1B2A",
          }}
        ></Input>
        <IconBar>
          <AddIcon onClick={handleInput}>
            <AddOutlined />
          </AddIcon>
        </IconBar>
      </InputBar>
      {/* input bar End */}
      {/* Todo bar Start */}
      {content}
      {/* Todo bar End */}
    </Container>
  );
};

export default Todo;
