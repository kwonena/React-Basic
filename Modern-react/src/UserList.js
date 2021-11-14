import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
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
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} /> // 원소 구별을 효율적으로 하기 위해 key 필요ㅌ
      ))}
    </div>
  );
}

export default UserList;
