import { useState } from "react";
import Error from "./Error";

function Register() {
  const [inputs, setInputs] = useState("");
  const [inputsFile, setInputsFile] = useState("");
  const [errors, setErrors] = useState({});
  const level = [
    {
      id: "",
      name: "level",
    },
    {
      id: 0,
      name: "0",
    },
    {
      id: 1,
      name: "1",
    },
  ];

  function renderData() {
    return level.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.name}
        </option>
      );
    });
  }

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;

    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  // copy; giu nguyen thang cu
  // [email]:xxxx@xxx
  // [pass]:11@xxx

  const handleInputFile = (e) => {
    const x = e.target.files[0];

    setInputsFile(x);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (inputs.email == undefined) {
      flag = false;
      errorSubmit.email = "nhap gmail";
    }
    if (inputs.password == undefined || inputs.password == "") {
      flag = false;
      errorSubmit.password = "vui long nhap mat khau";
    }

    if (inputs.sex == undefined || inputs.sex == "") {
      flag = false;
      errorSubmit.sex = "chua chon gioi tinh";
    }
    if (inputsFile) {
      const a = inputsFile.type.split(".").pop().toLowerCase();
      const b = a.split("/").pop();
      const c = ["png", "gif", "jpeg", "jpg"];

      console.log(b);

      if (inputsFile.size > 1024 * 1024) {
        flag = false;
        errorSubmit.avatar = "chon anh co size nho hon";
      }
      if (c.includes(b)) {
      } else {
        flag = false;
        errorSubmit.avatar = "file anh chua hop le";
      }
    } else {
      flag = false;
      errorSubmit.avatar = "chua tai anh dai dien";
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      alert("dang ki thanh cong");

      const email = inputs.email;
      const pass = inputs.password;
      const infor = { mail: email, pass: pass };
      console.log(infor);
      localStorage.setItem("infor", JSON.stringify(infor));
    }
  };

  return (
    <div>
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
        <select name="level" onChange={handleInput}>
          {renderData()}
        </select>
        <button type="submit" className="btn btn-default">
          đăng ký
        </button>
      </form>
    </div>
  );
}
export default Register;
