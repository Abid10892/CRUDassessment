import React from "react";
import styles from "./page.module.css";

import axios from "axios";

export default function Todos({ todo, id, editTodo }) {
  return (
    <div className={styles.Todo}>
      <p>{todo}</p>
      <button className={styles.editBtn} onClick={() => editTodo(id)}>
        Edit
      </button>
    </div>
  );
}
