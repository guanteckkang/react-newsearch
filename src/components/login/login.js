import "./login.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  // navigate
  const navigate = useNavigate();
  // isLogIn
  useEffect(() => {
    const isLogIn = JSON.parse(localStorage.getItem("isLogIn")) || [];
    if (isLogIn === true) {
      navigate("/home");
    } else {
      localStorage.setItem(
        "account",
        JSON.stringify({ id: "admin", password: "admin" })
      );
      localStorage.setItem("isLogIn", JSON.stringify(false));
    }
  }, []);
  // fetch account detail from storage
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account")) || []
  );
  // loading
  const [loading, setLoading] = useState(false);
  // log in form
  const [form, setForm] = useState({ id: "", pass: "" });
  const { id, pass } = form;
  // validate account
  function validate(e) {
    e.preventDefault();
    if (account.id === id && account.password === pass) {
      localStorage.setItem("isLogIn", JSON.stringify(true));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Login Successful");
        navigate("/home");
      }, 2000);
    } else {
      setForm({ id: "", pass: "" });
      alert("Either ID or/and Password is incorrect");
    }
  }

  return (
    <div>
      <h1 className="title">MyNewsToday</h1>
      <div className="loginform">
        <form onSubmit={validate}>
          <fieldset>
            <legend>Login</legend>
            <input
              type="text"
              placeholder="username"
              value={id}
              onChange={(e) => {
                setForm({ ...form, id: e.target.value });
              }}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              value={pass}
              onChange={(e) => {
                setForm({ ...form, pass: e.target.value });
              }}
            />
            <br />
            <Button type="submit">{loading ? "loading..." : "Submit"}</Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
