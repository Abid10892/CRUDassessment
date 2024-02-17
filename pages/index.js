import styles from "../styles/Home.module.css";
import TodoForm from "@/components/TodoForm";
import ImageSection from "@/components/ImageSection";
import { useState } from "react";
import EditTodo from "@/components/EditTodo";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageSection />

      <TodoForm />
    </main>
  );
}
