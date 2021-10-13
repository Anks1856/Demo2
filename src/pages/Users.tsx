import React from "react";
import { useUsersQuery } from "generated/graphql";
import { useHistory } from "react-router-dom";
import { Button, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Vet?",
    dataIndex: "isVet",
    key: "isVet",
  },
  {
    title: "Active?",
    dataIndex: "isActive",
    key: "isActive",
    render: (active: boolean) => (active ? "True" : "False"),
  },
];

export const Users = () => {
  const history = useHistory();
  const { data } = useUsersQuery();

  return (
    <div>
      <Button type="primary" onClick={() => history.push("/add-user")}>
        Add a user
      </Button>
      <div className="mt-6">
        {data?.Users.length === 0 ? (
          <h6>No users yet</h6>
        ) : (
          <Table dataSource={data?.Users} columns={columns} />
        )}
      </div>
    </div>
  );
};
