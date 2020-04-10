import React from "react";
import styled from "styled-components";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Setting.css";
import { Link } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ContentDiv = styled.div`
  background: #fff;
  width: 1000px;
  height: 800px;
  margin: 20px auto;
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledForm = styled(Form)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const StyledTextField = styled(TextField)({
  marginLeft: "70px",
  marginTop: "15px",
  width: "400px",
});

const StyledTextField2 = styled(TextField)({
  marginLeft: "200px",
  marginTop: "15px",
});

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledTextField
        id="outlined-search"
        label="required"
        type="search"
        variant="outlined"
        className="text-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyMultilineTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledTextField
        id="outlined-multiline-static"
        label=""
        multiline
        rows="7"
        defaultValue=""
        variant="outlined"
        className="text-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledTextField
        id="time"
        label="Alarm clock"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </div>
  );
};

const MySelect2 = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledTextField
        className="thao-textfield"
        id="outlined-select-currency-native"
        select
        variant="outlined"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </div>
  );
};

const SignupForm = () => {
  return (
    <div>
      <h1 className="my-h1">Thông tin phòng khám</h1>
      <Formik
        initialValues={{
          clinicName: "Nha Khoa Lan Anh",
          description:
            "Nha Khoa Lan Anh có bề dày kinh nghiệm phục hình răng sứ thẩm mỹ hơn 20 năm và đã trải qua rất nhiều dòng sứ khác nhau. Đến nay, nha khoa Lan Anh đã khẳng định được thương hiệu là nha khoa uy tín trong phục hình răng sứ thẩm mỹ cao cấp tại Thành Phố Hồ Chí Minh.",
          address:
            "292 đường Huỳnh Văn Bánh, Phường 11, Quận Phú Nhuận, TP.HCM, Việt Nam",
          phone: "+842838 44 28 38",
          acceptedTerms: false, // added for our checkbox
          openTime: "07:30", // added for our select
          closeTime: "20:00",
          separateTime: "30",
          maxPatient: 10,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <StyledForm>
          <MyTextInput
            className="text-style"
            label="Tên phòng khám"
            name="clinicName"
            type="text"
            placeholder="Nha khoa Lan Anh"
            required
          />
          <MyTextInput
            className="text-style"
            label="Địa chỉ"
            name="address"
            type="text"
            placeholder="24/1 đường Hòa Hưng, phường 10, quận Bình Chánh"
            required
          />
          <MyTextInput
            className="text-style"
            label="Số điện thoại"
            name="phone"
            type="text"
            placeholder="09183290123"
            required
          />
          <MySelect
            required
            label="Giờ mở cửa"
            name="openTime"
            className="text-style"
          >
            <option value="">Chọn giờ mở cửa</option>
            <option value="0">00:00</option>
            <option value="1">01:00</option>
            <option value="2">02:00</option>
            <option value="3">03:00</option>
            <option value="4">04:00</option>
            <option value="5">05:00</option>
            <option value="6">06:00</option>
            <option value="7">07:00</option>
            <option value="8">08:00</option>
            <option value="9">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
            <option value="24">24:00</option>
          </MySelect>
          <MySelect
            required
            label="Giờ đóng cửa"
            name="closeTime"
            className="text-style"
          >
            <option value="">Chọn giờ đóng cửa</option>
            <option value="0">00:00</option>
            <option value="1">01:00</option>
            <option value="2">02:00</option>
            <option value="3">03:00</option>
            <option value="4">04:00</option>
            <option value="5">05:00</option>
            <option value="6">06:00</option>
            <option value="7">07:00</option>
            <option value="8">08:00</option>
            <option value="9">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
            <option value="24">24:00</option>
          </MySelect>
          <MySelect2
            label="Khoảng cách giữa hai giờ hẹn"
            name="separateTime"
            className="text-style"
          >
            <option value="">15 phút</option>
            <option value="30">30 phút</option>
            <option value="45">45 phút</option>
            <option value="60">60 phút</option>
          </MySelect2>
          <MyTextInput
            className="text-style"
            label="Số khách tối đa trong một ca khám"
            name="maxPatient"
            type="number"
            placeholder="Nhập số lượng"
          />
          <MyMultilineTextInput
            label="Giới thiệu về phòng khám"
            name="description"
            type="text"
            placeholder="Giới thiệu"
            className="text-style"
          />
          <Link to="/setting" style={{ textDecoration: "none" }}>
            <Button style={{ marginTop: "10px" }} variant="outlined">
              Lưu
            </Button>
          </Link>
        </StyledForm>
      </Formik>
    </div>
  );
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//       marginLeft: "30px",
//     },
//   },
// }));

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
});

export default function Setting() {
  const classes = useStyles();
  return (
    <ContentDiv>
      <SignupForm classes={{ root: classes.root, label: classes.label }} />
    </ContentDiv>
  );
}
