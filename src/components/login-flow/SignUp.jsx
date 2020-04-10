import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
// import wave from "./assests/img/wave.png";
// import profile from "./assests/img/avatar.svg";
// import background from "./assests/img/background.svg";

class SignUp extends React.Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <div className="login-container">
        <img className="wave" src="img/wave.png" alt="wave" />
        <div className="login-outside-container">
          <div className="img">
            <img src="img/clinic.svg" alt="background" />
          </div>
          <div className="login-inside-container">
            <form onSubmit={this.handleSubmit}>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h5>Tên đăng nhập</h5>
                  <input className="input" type="text" />
                </div>
              </div>
              <div className="input-div two">
                <div className="i">
                  <i className="fas fa-id-badge"></i>
                </div>
                <div>
                  <h5>Tên phòng khám</h5>
                  <input className="input" type="text" />
                </div>
              </div>
              <div className="input-div">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div>
                  <h5>Mật khẩu</h5>
                  <input className="input" type="password" />
                </div>
              </div>
              <div className="input-div">
                <div className="i">
                  <i className="fas fa-check-double"></i>
                </div>
                <div>
                  <h5>Nhập lại mật khẩu</h5>
                  <input className="input" type="password" />
                </div>
              </div>
              <div className="input-div">
                <div className="i">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div>
                  <h5>Địa chỉ phòng khám</h5>
                  <input className="input" type="text" />
                </div>
              </div>
              <div className="input-div">
                <div className="i">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h5>Số điện thoại liên hệ</h5>
                  <input className="input" type="number" />
                </div>
              </div>

              <Link to={"/login"}>
                <input type="submit" className="login-btn" value="Đăng ký" />
              </Link>
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
}

export default SignUp;
