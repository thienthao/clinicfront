import React, { useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import styled from "styled-components";
import Form from "../form/createForm";
import Popup from "reactjs-popup";
// import EditIcon from "@material-ui/icons/Edit";

import EditForm from "../form/editForm";
import VisibilityIcon from "@material-ui/icons/Visibility";

const CreateButton = styled.button`
  position: absolute;
  left: 60%;
  top: 8px;
  z-index: 6;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #585858;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default function Services() {
  let columnList = [
    {
      title: "Tên Dịch Vụ",
      field: "name",
      cellStyle: {
        textAlign: "left",
        fontSize: "16px",
      },
      headerStyle: {
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    {
      title: "Giá dịch vụ",
      field: "price",
      cellStyle: {
        textAlign: "left",

        fontSize: "16px",
      },
      headerStyle: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: "20px",
      },
    },
    {
      title: "Đang Giảm",
      field: "discount",
      cellStyle: {
        textAlign: "center",
        fontSize: "16px",
      },
      headerStyle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
      },
    },

    {
      title: "Giảm Còn",
      field: "onSale",
      cellStyle: {
        textAlign: "left",
        fontSize: "16px",
      },
      headerStyle: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: "20px",
      },
    },
  ];

  let dataList = [
    {
      name: "Trám răng",
      price: "200.000",
      discount: "50%",
      onSale: "100.000",
    },

    {
      name: "Khám tổng quát",
      price: "200.000",
      discount: "50%",
      onSale: "100.000",
    },
    {
      name: "Nhổ răng",
      price: "500.000",
      discount: "50%",
      onSale: "250.000",
    },
    {
      name: "Chữa nướu",
      price: "500.000",
      discount: "20%",
      onSale: "400.000",
    },
    {
      name: "Cạo vôi răng",
      price: "500.000",
      discount: "20%",
      onSale: "400.000",
    },
  ];
  const [listInit, setList] = useState(dataList);
  return (
    <div style={{ marginLeft: 100, marginTop: 50, marginRight: 30, zIndex: 0 }}>
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div>
                <Popup
                  trigger={<CreateButton>Thêm Dịch Vụ</CreateButton>}
                  modal
                  closeOnDocumentClick
                  contentStyle={{
                    borderWidth: 4,
                    border: "black",
                    backgroundColor: "transparent",
                    width: 300,
                    height: 430,
                  }}
                >
                  {(close) => (
                    <div>
                      <Form close={() => close()} />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          ),
        }}
        columns={columnList}
        data={listInit}
        actions={[
          (rowData) => ({
            icon: () => (
              <Popup
                trigger={<VisibilityIcon />}
                modal
                closeOnDocumentClick
                contentStyle={{
                  borderWidth: 4,
                  border: "black",
                  backgroundColor: "transparent",
                  width: 300,
                  height: 430,
                }}
              >
                {(close) => (
                  <div>
                    <EditForm
                      name={rowData.name}
                      price={rowData.price}
                      onSale={rowData.onSale}
                      discount={rowData.discount}
                      edit={(x, y, z) => {
                        close();
                        setList(
                          listInit.map((service) => {
                            return service.name === rowData.name
                              ? { ...service, name: x, price: y, discount: z }
                              : service;
                          })
                        );
                      }}
                      close={() => close()}
                    />
                  </div>
                )}
              </Popup>
            ),
            tooltip: "Chi tiết",
          }),
          (rowData) => ({
            icon: "delete",
            tooltip: "Xóa",
            onClick: () =>
              setList(
                listInit.filter((service) => service.name !== rowData.name)
              ),
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
            fontSize: "20px",
          },
        }}
        title="Dịch Vụ Đang Có"
      />
    </div>
  );
}

// export default Services;
