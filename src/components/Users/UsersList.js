import React from "react";
import User from "./User";

const UsersList = (props) => {
    return (
        <div>
            {props.items.map((user) => {
                return <User key={user.id} name={user.name} age={user.age} />;
            })}
        </div>
    );
};

export default UsersList;
