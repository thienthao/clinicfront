import React from "react";
import MaterialTable from "material-table";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

let columnList = [
  {
    title: "Tên Khách Hàng",
    field: "name",
    cellStyle: {
      textAlign: "left",

      fontSize: "16px"
    },
    headerStyle: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "20px"
    }
  },
  {
    title: "Dịch vụ",
    field: "service",
    cellStyle: {
      textAlign: "left",

      fontSize: "16px"
    },
    headerStyle: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "20px"
    }
  },
  {
    title: "Đánh Giá",
    field: "description",
    cellStyle: {
      textAlign: "left",

      fontSize: "16px"
    },
    headerStyle: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "20px"
    }
  },
  {
    title: "Rating",
    field: "star",
    type: "numeric",
    cellStyle: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "16px"
    },
    headerStyle: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px"
    }
  }
];

const dataList = [
  {
    name: "Thiên Thảo",
    service: "Trám răng",
    description: "Dịch vụ rất tốt, bác sĩ thân thiện",
    star: (
      <span>
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
      </span>
    )
  },
  {
    name: "Phong Hà",
    service: "Nhổ răng",
    description: "Được cụa ló",
    star: (
      <span>
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
      </span>
    )
  },
  {
    name: "Nam Per",
    service: "Khám tổng quát",
    description: "Dù đã đặt nhưng vẫn phải chờ khá lâu, dịch vụ thì ok",
    star: (
      <span>
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
      </span>
    )
  },
  {
    name: "Lê Bảo",
    service: "Niềng răng",
    description: "Bác sĩ mạnh tay em đau quáaa",
    star: (
      <span>
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
      </span>
    )
  },
  {
    name: "Vũ Anh",
    service: "Trám răng",
    description: "Cũng đc.",
    star: (
      <span>
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarIcon style={{ color: "#FFCF00" }} />
        <StarHalfIcon style={{ color: "#FFCF00" }} />
      </span>
    )
  },
  {
    name: "Quách Tuấn",
    service: "Trám răng",
    description: "Bác sĩ mặt hầm hầm, chán",
    star: (
      <span>
        <StarIcon style={{ color: "#FFCF00" }} />
      </span>
    )
  }
];

export default function Rating() {
  return (
    <div style={{ marginLeft: 100, marginTop: 50, marginRight: 30, zIndex: 0 }}>
      <MaterialTable
        columns={columnList}
        data={dataList}
        localization={{
          header: { actions: "" },
          toolbar: { searchPlaceholder: "Tìm" },
          pagination: { labelRowsSelect: "" }
        }}
        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            fontSize: "20px"
          }
        }}
        title="Khách hàng đánh giá"
      />
    </div>
  );
}
