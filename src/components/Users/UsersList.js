import React from "react";
import User from "./User";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles.usersList}>
      <ul>
        {props.items.map((user) => {
          return (
            <li>
              <User key={user.id} name={user.name} age={user.age} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
