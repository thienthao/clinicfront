import React, { useState, useEffect } from "react";
import "./ForgotPass.css";
import { Link } from "react-router-dom";

export default function ForgotPass() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    function focusFunc() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);

  return (
    <div className="login-container">
      <img className="wave" src="img/wave.png" alt="wave" />
      <div className="login-outside-container">
        <div className="img">
          <img src="img/clinic.svg" alt="background" />
        </div>
        <div className="login-inside-container">
          <form>
            <img className="avatar" src="img/profile.svg" alt="avatar" />
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-inbox-out"></i>
              </div>
              <div>
                <h5>Xin nhập Email phòng khám</h5>
                <input className="input" type="text" />
              </div>
            </div>
            {status ? <p>Mật khẩu mới đã được gửi về email của bạn</p> : null}
            <button
              onClick={(e) => {
                e.preventDefault();
                window.alert("Mật khẩu mới đã được gửi về email của bạn");
                window.history.back();
                setStatus(!status);
              }}
              type="submit"
              className="login-btn"
            >
              Khôi phục
            </button>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                position: "relative",
                right: "110px",
              }}
            >
              <ul>Quay lại đăng nhập</ul>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
