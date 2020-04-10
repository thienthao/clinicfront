import React, { useState } from "react";
import MaterialTable from "material-table";
import CancelIcon from "@material-ui/icons/Cancel";
import AirlineSeatFlatAngledIcon from "@material-ui/icons/AirlineSeatFlatAngled";
import Popup from "reactjs-popup";
import ReasonForm from "../form/reasonForm";

export default function WaitingTable() {
  let list = [
    {
      time: "09:00 Thứ 7 04/04/2020",
      service: "Trám răng",
      patientName: "Thiên Thảo",
      code: "CD10239",
      discount: "50%",
    },
    {
      time: "10:30 Thứ 7 04/04/2020",
      service: "Nhổ răng",
      code: "CD10219",
      patientName: "Lê Bảo",
      discount: "20%",
    },
    {
      time: "18:30 Thứ 7 04/04/2020",
      service: "Khám tổng quát",
      code: "CD10219",
      patientName: "Thế Anh",
      discount: "10%",
    },
    {
      time: "11:30 Chủ Nhật 05/04/2020",
      service: "Trám răng",
      code: "CD10240",
      patientName: "Nam Per",
      discount: "5%",
    },
    {
      time: "14:00 Chủ Nhật 05/04/2020",
      service: "Niềng răng implant",
      code: "CD10241",
      patientName: "Khá Bảnh",
      discount: "5%",
    },
    {
      time: "17:30 Chủ Nhật 05/04/2020",
      service: "Bọc răng sứ",
      code: "CD10242",
      patientName: "Huấn Hồng",
      discount: "10%",
    },
    {
      time: "14:30 Thứ 2 06/04/2020",
      service: "Lấy tủy",
      code: "CD10243",
      patientName: "Lionel Messi",
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
      field: "service",
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
        {
          icon: () => <AirlineSeatFlatAngledIcon style={{ color: "green" }} />,
          tooltip: "Khám",
          onClick: (e, rowData) =>
            setList(
              listInit.filter(
                (user) => user.patientName !== rowData.patientName
              )
            ),
        },
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
      title="Lịch Hẹn"
    />
  );
}
