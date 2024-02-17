import styles from "../styles/Home.module.css";
import TodoForm from "@/components/TodoForm";
import ImageSection from "@/components/ImageSection";
import { useEffect, useState } from "react";
import EditTodo from "@/components/EditTodo";
import Todos from "@/components/Todos";
import axios from "axios";
import Link from "next/link";

export default function Viewtodo() {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch();
  }, [isEditing]);
  const [result, setResult] = useState([]);
  const [editForm, setEditForm] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.get("/api/gettodos");
      let result = await response.data.todo;
      setResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id) => {
    try {
      const response = await axios.post("/api/gettodo", {
        id,
      });
      let result = await response.data.todo;
      setEditForm(result);
    } catch (error) {
      console.log(error);
    }
    setIsEditing(!isEditing);
  };

  return (
    <main className={styles.container}>
      <ImageSection />
      {isEditing ? (
        <EditTodo editForm={editForm} setIsEditing={setIsEditing} />
      ) : (
        <div className={styles.todos}>
          <Link href={"/"}>
            <button className={styles.signInBtn}>ADD TODO'S</button>
          </Link>
          {result &&
            result?.map((todo) => {
              return (
                <Todos
                  key={todo._id}
                  todo={todo.todo}
                  id={todo._id}
                  editTodo={editTodo}
                />
              );
            })}
          {!result.length && <p>Its Empty, Please Add Something!</p>}
        </div>
      )}
    </main>
  );
}
