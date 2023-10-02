import React from "react";

import styles from "./User.module.css";

const User = (props) => {
    return (
        <div className={styles.user}>        
            <h2>{props.name} ({props.age} years old)</h2>
        </div>
    )
}

export default User;