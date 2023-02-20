import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error/Error";
import { useNavigate } from "react-router-dom";

function Login() {
  // const y = localStorage.getItem('infor');
  // const x = JSON.parse(y);

  const [inputs, setInputs] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (inputs.email == undefined || inputs.email == "") {
      flag = false;
      errorSubmit.email = "vui long nhap email";
    }
    if (inputs.password == undefined || inputs.password == "") {
      flag = false;
      errorSubmit.password = "vui long nhap mat khau";
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});

      const data = {
        email: inputs.email,
        password: inputs.password,
        level: 0,
      };

      axios
        .post("http://localhost/laravel/laravel/public/api/login", data)
        .then((res) => {
          if (res.data.success) {
            const user_infor = res.data;

            localStorage.setItem("auth_token", JSON.stringify(user_infor));

            console.log(res);
            alert("dang nhap thanh cong");
            navigate("/");
          } else {
            console.log(res);
            setErrors(res.data.errors);
          }
        });
    }
  };

  return (
    <div className="login-form">
      <h2>Login to your account</h2>
      <Error errors={errors} />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}
        />
        <span>
          <input type="checkbox" className="checkbox" />
          Keep me signed in
        </span>
        <button type="submit" className="btn btn-default">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
