import { useState } from "react";
import HashLoader from "react-spinners/HashLoader.js";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

export default function TodoForm({ setIsEditing }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    default: {
      username: "",
    },
  });

  const handleSubmits = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/addtodo", data);
      let result = await response?.data;
      if (response.status === 200) {
        reset();
        toast.success("Added Successfully");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something Wrong, Try Again");
    }
  };

  return (
    <section className={styles.section}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
        <Link href={"/viewtodo"}>
          <button className={styles.signInBtn}>VIEW TODO'S</button>
        </Link>
        <div className={styles.header}>
          <h1
            id="linear"
            className={styles.h1}
            onClick={() => setIsEditing(true)}
          >
            Explore & Experience
          </h1>
          <h5 className={styles.h5}>
            Get onto your most comfortable journey yet. All the way up.
          </h5>
        </div>
        <form onSubmit={handleSubmit(handleSubmits)} noValidate>
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
            {loading ? <HashLoader size={25} color="#fff" /> : "ADD TODO"}
          </button>
        </form>
      </div>
    </section>
  );
}
