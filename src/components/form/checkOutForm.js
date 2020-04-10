import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 530px;
  font-size: 1em;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 2px solid #585858;
  border-radius: 3px;
  align-items: center;
`;
const Row = styled.div`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
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

const CreateForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function CheckOutForm(props) {
  return (
    <Container>
      <CreateForm>
        <h2>Khám Hoàn Thành</h2>
        <Row>
          <p>Khách Hàng</p>
          <TextField
            required
            id="outlined-required"
            InputProps={{
              readOnly: true
            }}
            defaultValue=""
            placeholder="Nhập tên dịch vụ"
            variant="outlined"
            name="name"
            value={props.patientName}
          />
        </Row>
        <Row>
          <p>Tên dịch vụ</p>
          <TextField
            required
            id="outlined-required"
            InputProps={{
              readOnly: true
            }}
            defaultValue=""
            placeholder="Nhập tên dịch vụ"
            variant="outlined"
            name="name"
            value={props.name}
          />
        </Row>

        <Row>
          <p>Khách phải trả</p>
          <TextField
            id="outlined-read-only-input"
            defaultValue=""
            placeholder="Nhập giá của dịch vụ"
            variant="outlined"
            name="price"
            InputProps={{
              readOnly: true
            }}
            value={props.price}
          />
        </Row>
        <Row style={{ display: "flex", flexDirection: "row" }}>
          <Button onClick={() => props.done()} style={{ marginLeft: 6 }}>
            Tạm Tính
          </Button>
          <Button onClick={() => props.close()} style={{ marginLeft: 20 }}>
            Hủy
          </Button>
        </Row>
      </CreateForm>
    </Container>
  );
}
