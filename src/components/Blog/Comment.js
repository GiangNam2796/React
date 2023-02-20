import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../error/Error";

function Comment(props) {
  const data = props.data;
  let params = useParams();
  const [errors, setErrors] = useState({});
  const [comment, setComment] = useState("");
  const [ten, setName] = useState("");

  console.log(params.id);
  const handleInput = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  useEffect(() => {
    const y = localStorage.getItem("auth_token");
    const userData = JSON.parse(y);
    setName(userData.Auth.name)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};

    const y = localStorage.getItem("auth_token");
    if (y) {
      if (comment == "") {
        errorSubmit.email = "vui long nhap binh luan";
        setErrors(errorSubmit);
      } else {
        setErrors({});

        const userData = JSON.parse(y);
        console.log("user data", userData);
        console.log("data", data);

        // console.log(data.comment[0].id_blog)

        let url =
          "http://localhost/laravel/laravel/public/api/blog/comment/" +
          params.id;
        let accessToken = userData.success.token;

        let config = {
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        };

        if (comment) {
          const formData = new FormData();
          formData.append("id_blog", params.id);
          formData.append("id_user", userData.Auth.id);
          formData.append("id_comment", props.getId ? props.getId : 0);
          formData.append("comment", comment);
          formData.append("image_user", userData.Auth.avatar);
          formData.append("name_user", userData.Auth.name);

          axios
            .post(url, formData, config)
            .then((res) => {
              console.log(res);
              props.getDataCmt(res.data.data);
            })
            .then(() => {
              setComment("");
            });
        }
      }
    } else {
      alert("Please login.");
    }
  };

  return (
    <div className="col-sm-12">
      <h2>Leave a reply</h2>
      <div className="text-area">
        <div className="blank-arrow">
          <Error errors={errors} />
          <label>ten cua bo may la "{ten}"</label>
        </div>
        <span>*</span>
        <form onSubmit={handleSubmit} id="cmt">
          <textarea
            name="message"
            rows={11}
            defaultValue={""}
            onChange={handleInput}
          />

          <button type="submit" className="btn btn-default">
            post comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comment;
