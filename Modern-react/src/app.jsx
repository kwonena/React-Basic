import { useRef, useState } from "react";
import "./app.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name값을 value로 덮어씌움
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "kwon",
      email: "aaa@gmail.com",
    },
    {
      id: 2,
      username: "e",
      email: "bbb@gmail.com",
    },
    {
      id: 3,
      username: "na",
      email: "ccc@gmail.com",
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
    };
    setUsers(users.concat(user)); // concat() : 배열의 값을 합쳐주는 함수
    // setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
