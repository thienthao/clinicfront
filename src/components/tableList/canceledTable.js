import React, { useState } from "react";
import MaterialTable from "material-table";

export default function CanceledTable() {
  let list = [
    {
      time: "09:00 Thứ 7 04/04/2020",
      service: "Trám răng",
      patientName: "Thiên Thảo",
      code: "CD10239",
      reason: "Khách đột nhiên bỏ về",
    },
    {
      time: "10:30 Thứ 7 04/04/2020",
      service: "Nhổ răng",
      patientName: "Lê Bảo",
      code: "CD10239",
      reason: "Khách bận việc gấp",
    },
    {
      time: "18:30 Thứ 7 04/04/2020",
      service: "Khám tổng quát",
      patientName: "Huấn Rose",
      code: "CD10239",
      reason: "Có làm thì mới có ăn, khách bận công việc nên bỏ về",
    },
    {
      time: "11:30 Chủ Nhật 05/04/2020",
      service: "Trám răng",
      patientName: "Nam Per",
      code: "CD10239",
      reason: "Cảm thấy cuộc đời bất công nên bỏ về",
    },
    {
      time: "14:00 Chủ Nhật 05/04/2020",
      service: "Niềng răng implant",
      patientName: "Khá Bảnh",
      code: "CD10239",
      reason: "Đó là dấu hiệu của dương tính với Covid 19",
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
      title: "Lý do hủy hẹn",
      field: "reason",
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
  ];
  let [listInit, setList] = useState(list);
  return (
    <MaterialTable
      columns={columnsList}
      data={listInit}
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
      title="Đơn Hủy"
    />
  );
}
