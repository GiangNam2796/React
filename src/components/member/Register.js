import { useState } from "react";
import Error from "../error/Error";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState("");
  const [errors, setErrors] = useState("");
  const [inputsFile, setInputsFile] = useState("");
  const [inputsAvatar, setInputsAvatar] = useState("");
  //const useWatch = useWatch("email");

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;

    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  const handleInputFile = (e) => {
    const file = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      setInputsFile(file[0]); // file xu li
      setInputsAvatar(e.target.result); // API222222
    };
    reader.readAsDataURL(file[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (inputs.name == undefined || inputs.name == "") {
      flag = false;
      errorSubmit.name = "nhap ten";
    }
    if (inputs.email == undefined || inputs.email == "") {
      flag = false;
      errorSubmit.email = "nhap gmail";
    }
    if (inputs.password == undefined || inputs.password == "") {
      flag = false;
      errorSubmit.password = "nhap password";
    }
    if (inputs.phone == undefined || inputs.phone == "") {
      flag = false;
      errorSubmit.phone = "nhap sdt";
    }
    if (inputs.address == undefined || inputs.address == "") {
      flag = false;
      errorSubmit.phone = "nhap dia chi";
    }
    if (inputsFile) {
      const a = inputsFile.type.split(".").pop().toLowerCase();
      const b = a.split("/").pop();
      const c = ["png", "gif", "jpeg", "jpg"];

      if (inputsFile.size > 1024 * 1024) {
        flag = false;
        errorSubmit.avatar = "chon anh co size nho hon";
      }
      if (c.includes(b)) {
      } else {
        flag = false;
        errorSubmit.avatar = "file anh chua hop le";
      }
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});

      const data = {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        address: inputs.address,
        level: 0,
        avatar: inputsAvatar,
      };

      axios
        .post("http://localhost/laravel/laravel/public/api/register", data)
        .then((res) => {
          if (res.data.errors) {
            setErrors(res.data.errors);
          } else {
            alert("dang ki thanh cong");
            console.log(res.data[0]);
          }
        });

      // const infor = {
      //     'email': inputs.email,
      //     'password': inputs.password,
      //     'level': 0,
      // };
      // localStorage.setItem('infor', JSON.stringify(infor));
    }
  };

  return (
    <div className="col-sm-4">
      <div className="signup-form">
        <h2>New User Signup!</h2>
        <Error errors={errors} />
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onChange={handleInput}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleInput}
          />
          <input type="file" name="avatar" onChange={handleInputFile} />

          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
