import React, { useState } from "react";
import MaterialTable from "material-table";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CancelIcon from "@material-ui/icons/Cancel";
import Popup from "reactjs-popup";
import CheckOutForm from "../form/checkOutForm";
import ReasonForm from "../form/reasonForm";

export default function DoingTable() {
  let list = [
    {
      time: "09:00 Thứ 7 04/04/2020",
      name: "Trám răng",
      code: "CD10243",
      patientName: "Thiên Thảo",
      price: "100.000",
      discount: "50%",
    },
    {
      time: "10:30 Thứ 7 04/04/2020",
      name: "Nhổ răng",
      code: "CD10244",
      patientName: "Lê Bảo",
      price: "300.000",
      discount: "20%",
    },
    {
      time: "18:30 Thứ 7 04/04/2020",
      name: "Khám tổng quát",
      code: "CD10245",
      patientName: "Thế Anh",
      price: "400.000",
      discount: "10%",
    },
    {
      time: "11:30 Chủ Nhật 05/04/2020",
      name: "Trám răng",
      code: "CD10246",
      patientName: "Nam Per",
      price: "500.000",
      discount: "5%",
    },
    {
      time: "14:00 Chủ Nhật 05/04/2020",
      name: "Niềng răng implant",
      code: "CD10247",
      patientName: "Khá Bảnh",
      price: "25.00.000",
      discount: "5%",
    },
    {
      time: "17:30 Chủ Nhật 05/04/2020",
      name: "Bọc răng sứ",
      code: "CD10248",
      patientName: "Huấn Hồng",
      price: "500.000",
      discount: "10%",
    },
    {
      time: "14:30 Thứ 2 06/04/2020",
      name: "Lấy tủy",
      code: "CD10249",
      patientName: "Lionel Messi",
      price: "500.000",
      discount: "10%",
    },
  ];
  let columnsList = [
    {
      title: "Thời gian",
      field: "time",
      cellStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "15.2px",
      },
      headerStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "18px",
      },
    },
    {
      title: "Mã đặt chỗ",
      field: "code",
      cellStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "15.2px",
      },
      headerStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "18px",
      },
    },
    {
      title: "Tên khách hàng",
      field: "patientName",
      cellStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "15.2px",
      },
      headerStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "18px",
      },
    },
    {
      title: "Dịch vụ được đặt",
      field: "name",
      cellStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "15.2px",
      },
      headerStyle: {
        textAlign: "left",
        color: "#585858",
        fontSize: "18px",
      },
    },

    {
      title: "Được giảm giá",
      field: "discount",
      cellStyle: {
        textAlign: "center",
        color: "#585858",
        fontSize: "15.2px",
      },
      headerStyle: {
        textAlign: "right",
        color: "#585858",
        fontSize: "18px",
      },
    },
  ];
  let [listInit, setList] = useState(list);
  return (
    <MaterialTable
      columns={columnsList}
      data={listInit}
      actions={[
        (rowData) => ({
          icon: () => (
            <Popup
              trigger={<AssignmentTurnedInIcon style={{ color: "green" }} />}
              modal
              closeOnDocumentClick
              contentStyle={{
                borderWidth: 4,
                border: "black",
                backgroundColor: "gray",
                width: 300,
                height: 430,
              }}
            >
              {(close) => (
                <div>
                  <CheckOutForm
                    name={rowData.name}
                    price={rowData.price}
                    patientName={rowData.patientName}
                    close={() => close()}
                    done={() => {
                      close();
                      setList(
                        listInit.filter(
                          (user) => user.patientName !== rowData.patientName
                        )
                      );
                    }}
                  />
                </div>
              )}
            </Popup>
          ),
          tooltip: "Hoàn Thành",
        }),
        (rowData) => ({
          icon: () => (
            <Popup
              trigger={<CancelIcon style={{ color: "#B80026" }} />}
              modal
              closeOnDocumentClick
              contentStyle={{
                borderWidth: 4,
                border: "black",
                backgroundColor: "gray",
                width: 450,
                height: 350,
              }}
            >
              {(close) => (
                <div>
                  <ReasonForm
                    close={() => close()}
                    done={() => {
                      close();
                      setList(
                        listInit.filter(
                          (user) => user.patientName !== rowData.patientName
                        )
                      );
                    }}
                  />
                </div>
              )}
            </Popup>
          ),
          tooltip: "Hủy Hẹn",
        }),
      ]}
      localization={{
        header: { actions: "" },
        toolbar: { searchPlaceholder: "Tìm" },
        pagination: { labelRowsSelect: "" },
      }}
      options={{
        actionsColumnIndex: -1,
        headerStyle: {
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
        },
      }}
      title="Khách Đang Khám"
    />
  );
}
