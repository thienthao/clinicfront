import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Container = styled.div`
  width: 1020px;
  height: 600px;
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 2px solid #585858;
  border-radius: 3px;
  position: absolute;
  bottom: -21%;
  right: -135%;
`;
const Row = styled.div`
  margin-top: 12px;
  justify-content: right;
  flex-direction: column;
  display: flex;
  width: 100%;
  text-align: left;
`;

const Button = styled.button`
  font-size: 1em;
  text-align: center;
  padding: 0.2;
  border: 2px solid #585858;
  border-radius: 3px;
  width: 5.5em;
  height: 2em;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
  margin: 20px;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CreateForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 95%;
  height: 90%;
  text-align: center;
  /* border: 2px solid red; */
`;

export default function Form(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [unit, setUnit] = useState("");
  const [tech, setTech] = useState("");
  const [condi, setCondi] = useState("");
  const [des, setDes] = useState("");
  return (
    <Container>
      <CreateForm>
        <h2>Thêm mới dịch vụ</h2>
        <FormWrapper>
          <FormContainer>
            <Row>
              <p>Tên dịch vụ</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue=""
                placeholder="Nhập tên dịch vụ"
                variant="outlined"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Row>
            <Row>
              <p>Giá dịch vụ</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                placeholder="Nhập giá của dịch vụ"
                variant="outlined"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Row>
            <Row>
              <p>Giảm giá</p>
              <TextField
                id="outlined-required"
                placeholder="Nhập % giảm giá"
                variant="outlined"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
              />
            </Row>
            <Row>
              <p>Đơn vị tính</p>
              <TextField
                id="outlined-required"
                placeholder="Nhập đơn vị tính"
                variant="outlined"
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
              />
            </Row>
          </FormContainer>
          <FormContainer>
            <Row>
              <p>Công nghệ</p>
              <TextField
                id="outlined-required"
                placeholder="Nhập công nghệ của dịch vụ"
                variant="outlined"
                value={tech}
                onChange={(event) => setTech(event.target.value)}
              />
            </Row>
            <Row>
              <p>Mô tả dịch vụ</p>
              <TextField
                id="outlined-multiline-static"
                label="Mô tả"
                multiline
                rows="4"
                placeholder="Nhập mô tả chi tiết dịch vụ"
                variant="outlined"
                style={{ width: "100%" }}
                value={des}
                onChange={(event) => setDes(event.target.value)}
              />
            </Row>
            <Row>
              <p>Điều kiện giảm giá</p>
              <TextField
                id="outlined-multiline-static"
                label="Điều kiện"
                multiline
                rows="4"
                placeholder="Nhập điều kiện giảm giá"
                variant="outlined"
                style={{ width: "100%" }}
                value={condi}
                onChange={(event) => setCondi(event.target.value)}
              />
            </Row>
          </FormContainer>
        </FormWrapper>

        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // paddingTop: "px",
          }}
        >
          <Button onClick={() => props.close()} style={{ marginLeft: 6 }}>
            Cập nhật
          </Button>
          <Button onClick={() => props.close()} style={{ marginLeft: 20 }}>
            Hủy
          </Button>
        </Row>
      </CreateForm>
    </Container>
  );
}
