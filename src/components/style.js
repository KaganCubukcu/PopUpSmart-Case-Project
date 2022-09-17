import styled from "@emotion/styled";

const InputBar = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Input = styled("input")`
  border: none;
  width: 100vh;
  padding-left: 30px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
const IconBar = styled("div")`
  display: flex;
  margin-right: 10px;
`;
const DeleteIcon = styled("div")`
  cursor: pointer;
`;
const AddIcon = styled("div")`
  cursor: pointer;
`;

const TodoItemUl = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
const TodoLi = styled("li")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
`;
const TodoText = styled("p")`
  font-size: 22px;

  @media (max-width: 768px) {
    width: 150px;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Checkbox = styled("input")`
  margin-right: 20px;
`;

const Logo = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-family: "Yellowtail", cursive;
  font-size: 30px;
  padding-bottom: 10px;
`;

export {
  Checkbox,
  TodoText,
  TodoLi,
  TodoItemUl,
  AddIcon,
  DeleteIcon,
  IconBar,
  Input,
  InputBar,
  Logo,
};
