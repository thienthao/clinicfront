import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Container = styled.div`
  width: 450px;
  height: 350px;
  font-size: 1em;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 2px solid #585858;
  border-radius: 3px;
  align-items: center;
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  border-width: 5px;
  border-color: "red";
  width: 80%;
`;

const Row = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  width: 80%;
  justify-content: space-between;
`;

export default function ReasonForm(props) {
  return (
    <Container>
      <CreateForm>
        <Row>
          <h2>Khách muốn hủy hẹn</h2>
        </Row>
        <TextField
          id="outlined-multiline-static"
          label="Lý do"
          multiline
          rows="4"
          placeholder="Nhập lý do khách muốn hủy hẹn"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <ButtonWrapper>
          <Button onClick={() => props.done()}>Hủy Hẹn</Button>
          <Button onClick={() => props.close()}>Bỏ Qua</Button>
        </ButtonWrapper>
      </CreateForm>
    </Container>
  );
}
