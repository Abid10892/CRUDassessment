import { useContext, useState } from "react";
import HashLoader from "react-spinners/HashLoader.js";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import "react-toastify/dist/ReactToastify.css";
import { CountContext } from "@/context/context";

export default function EditTodo({ editForm, setIsEditing }) {
  const [loading, setLoading] = useState(false);
  const { count, setCount } = useContext(CountContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: editForm.todo,
    },
  });

  const onSubmit = async (data) => {
    let id = editForm._id;

    try {
      const response = await axios.put("/api/updatetodo", {
        username: data.username,
        id: id,
      });
      toast.success("Updated Successfully");
      setCount((count) => count + 1);
      setTimeout(() => {
        setIsEditing(false);
      }, 1000);
    } catch (error) {
      toast.error("Something Wrong, Try Again");
    }
  };

  return (
    <section className={styles.section}>
      <ToastContainer
        position="top-right"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className={styles.box}>
        <button
          className={styles.signInBtn}
          onClick={() => setIsEditing(false)}
        >
          VIEW TODO'S
        </button>
        <div className={styles.header}>
          <h1 id="linear" className={styles.h1}>
            Explore & Experience
          </h1>
          <h5 className={styles.h5}>
            Get onto your most comfortable journey yet. All the way up.
          </h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            type="text"
            placeholder="Type here..."
            id="username"
            className={styles.input}
            {...register("username", {
              required: "please type something",
            })}
          />
          <p className={styles.error}>
            {errors.username && errors.username.message}
          </p>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!isValid}
          >
            {loading ? <HashLoader size={25} color="#fff" /> : "UPDATE TODO"}
          </button>
        </form>
      </div>
    </section>
  );
}
