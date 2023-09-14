"use client";

import { Card as CardAntd } from "antd";
import { Button as ButtonDX } from "devextreme-react/button";
import {
  Button as ButtonDataGridDX,
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  FilterRow as FilterRowDX,
  Form as FormDataGridDX,
  Item as ItemDataGridDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";
import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
} from "devextreme-react/form";
import { Popup as PopupDX } from "devextreme-react/popup";
import { TabPanel as TabPanelDX } from "devextreme-react/tab-panel";
import { useState } from "react";

export default function ZPT() {
  const [isDisplayPT, setIsDisplayPT] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState("Maintain PT");
  const [isEditPT, setIsEditPT] = useState(false);
  const [dmyPTAttCurr, setDmyPTAttCurr] = useState(dmyPTAtt);

  const doFilterDmy = (kodePT: number) => {
    setDmyPTAttCurr(
      dmyPTAtt.filter((rec) => {
        return rec.KodePT === kodePT;
      })
    );
  };

  return (
    <>
      <DataGridDX
        dataSource={dmyPT}
        keyExpr="ID"
        showBorders={true}
        wordWrapEnabled={true}
        width={"100%"}
        onInitNewRow={() => {
          setIsEditPT(false);
          setPopUpTitle("Add New PT");
          doFilterDmy(1000);
        }}
        onEditingStart={(e) => {
          setIsEditPT(true);
          setPopUpTitle("Change PT");
          doFilterDmy(e.data.KodePT);
        }}
      >
        <ToolbarDX>
          <ItemDataGridDX name="addRowButton" location="before" />
          <ItemDataGridDX name="exportButton" location="before" />
          <ItemDataGridDX name="searchPanel" location="after" />
        </ToolbarDX>
        <SearchPanelDX visible={true} width={240} />
        <ExportDX enabled />
        <FilterRowDX visible applyFilter={"auto"} />
        {/*
        <PagingDX defaultPageSize={999} />
        <PagerDX
          visible={true}
          displayMode={"compact"}
          showPageSizeSelector={true}
          showInfo={true}
          showNavigationButtons={true}
        />
        */}
        <EditingDX
          mode="popup"
          useIcons={true}
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        >
          <PopupDataGridDX
            title={popUpTitle}
            showTitle={true}
            fullScreen={true}
          />
          <FormDataGridDX>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <GroupItemFormDX colSpan={12}>
              <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX
                dataField="ID"
                caption="ID"
                disabled={true}
                visible={isEditPT}
                colSpan={2}
              />
              <ItemFormDX colSpan={10} visible={isEditPT} />
              <ItemFormDX dataField="Alias" caption="Alias" colSpan={3} />
              <ItemFormDX dataField="KodePT" caption="Kode PT" colSpan={3} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="NamaPT" caption="Nama PT" colSpan={6} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="Alamat" caption="Alamat" colSpan={6} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX colSpan={12}>
                <div className="p-2"></div>
              </ItemFormDX>
              <ItemFormDX colSpan={12}>
                <CardAntd>
                  <DataGridDX
                    showBorders={true}
                    keyExpr="ID"
                    dataSource={dmyPTAttCurr}
                    wordWrapEnabled={true}
                    width={"100%"}
                  >
                    <EditingDX
                      mode="row"
                      allowUpdating
                      allowAdding
                      allowDeleting
                    />
                    <SearchPanelDX visible={true} width={240} />
                    <ExportDX enabled />
                    <FilterRowDX visible applyFilter={"auto"} />
                    <PagingDX defaultPageSize={50} />
                    <PagerDX
                      visible={true}
                      displayMode={"compact"}
                      showPageSizeSelector={true}
                      showInfo={true}
                      showNavigationButtons={true}
                    />
                    <ColumnDX
                      dataField="ID"
                      visible={false}
                      allowEditing={false}
                    />
                    <ColumnDX
                      dataField="ValidFrom"
                      width={100}
                      defaultSortOrder="desc"
                      headerCellRender={() => {
                        return (
                          <div className="text-gray-900 text-xs font-bold">
                            Valid From
                          </div>
                        );
                      }}
                    />
                    <ColumnDX
                      dataField="ValidTo"
                      width={100}
                      headerCellRender={() => {
                        return (
                          <div className="text-gray-900 text-xs font-bold">
                            Valid To
                          </div>
                        );
                      }}
                    />
                    <ColumnDX
                      dataField="NPWPPT"
                      width={140}
                      headerCellRender={() => {
                        return (
                          <div className="text-gray-900 text-xs font-bold">
                            NPWP PT
                          </div>
                        );
                      }}
                    />
                    <ColumnDX
                      dataField="NamaPemotong"
                      width={100}
                      headerCellRender={() => {
                        return (
                          <div className="text-gray-900 text-xs font-bold">
                            Nama Pemotong
                          </div>
                        );
                      }}
                    />
                    <ColumnDX
                      dataField="NPWPPemotong"
                      width={100}
                      headerCellRender={() => {
                        return (
                          <div className="text-gray-900 text-xs font-bold">
                            NPWP Pemotong
                          </div>
                        );
                      }}
                    />
                  </DataGridDX>
                </CardAntd>
              </ItemFormDX>
            </GroupItemFormDX>
          </FormDataGridDX>
        </EditingDX>
        <ColumnDX type="buttons" fixed={true} fixedPosition="left">
          <ButtonDataGridDX
            icon="eyeopen"
            name="edit"
            onClick={() => {
              setIsDisplayPT(true);
              setPopUpTitle("Display");
            }}
          />
          <ButtonDataGridDX icon="edit" name="edit" />
          <ButtonDataGridDX icon="trash" name="delete" />
        </ColumnDX>
        <ColumnDX dataField="ID" visible={false} allowEditing={false} />
        <ColumnDX
          dataField="Alias"
          dataType="string"
          width={60}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          fixed={true}
          fixedPosition="left"
          allowEditing={true}
          headerCellRender={() => {
            return <div className="text-gray-900 text-xs font-bold">Alias</div>;
          }}
        />
        <ColumnDX
          dataField="NamaPT"
          dataType="string"
          width={230}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          headerCellRender={() => {
            return (
              <div className="text-gray-900 text-xs font-bold">Nama PT</div>
            );
          }}
        />
        <ColumnDX
          dataField="KodePT"
          dataType="string"
          width={60}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          headerCellRender={() => {
            return (
              <div className="text-gray-900 text-xs font-bold">Kode PT</div>
            );
          }}
        />
        <ColumnDX
          dataField="Alamat"
          dataType="string"
          width={500}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          headerCellRender={() => {
            return (
              <div className="text-gray-900 text-xs font-bold">Alamat</div>
            );
          }}
        />
        <ColumnDX
          dataField="NPWPPT"
          dataType="string"
          width={140}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          headerCellRender={() => {
            return (
              <div className="text-gray-900 text-xs font-bold">NPWP (PT)</div>
            );
          }}
        />
        <ColumnDX
          dataField="NamaPemotong"
          dataType="string"
          width={200}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          headerCellRender={() => {
            return (
              <div className="text-gray-900 text-xs font-bold">
                Nama (Pemotong)
              </div>
            );
          }}
        />
        <ColumnDX
          dataField="NPWPPemotong"
          dataType="string"
          width={140}
          allowSorting={true}
          allowFiltering={true}
          allowSearch={true}
          headerCellRender={() => {
            return (
              <div className="text-gray-900 text-xs font-bold">
                NPWP (Pemotong)
              </div>
            );
          }}
        />
      </DataGridDX>

      <PopupDX
        title={popUpTitle}
        showTitle={true}
        width={700}
        height={525}
        fullScreen={true}
        visible={isDisplayPT}
        hideOnOutsideClick={true}
        onHiding={() => {
          setIsDisplayPT(false);
        }}
      ></PopupDX>
    </>
  );
}

const dmyPT = [
  {
    ID: 1,
    KodePT: 1100,
    NamaPT: "Tanjung Buyu Perkasa Plantation",
    Alias: "TBP",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.110",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 2,
    KodePT: 1200,
    NamaPT: "Inti Enegi Kaltim",
    Alias: "INK",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.120",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 3,
    KodePT: 1300,
    NamaPT: "Telen",
    Alias: "TLN",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.130",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 4,
    KodePT: 1400,
    NamaPT: "Sawit Prima Nusantara",
    Alias: "SPN",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.140",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 5,
    KodePT: 1500,
    NamaPT: "Gemilang Sejahtera Abadi",
    Alias: "GSA",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.150",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 6,
    KodePT: 1600,
    NamaPT: "Telen Prima Sawit",
    Alias: "TPS",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.160",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 7,
    KodePT: 1610,
    NamaPT: "Multi Jayantara Abadi",
    Alias: "MJA",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.161",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 8,
    KodePT: 1800,
    NamaPT: "Cahaya Anugerah Plantation",
    Alias: "CAP",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.180",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 9,
    KodePT: 3100,
    NamaPT: "Sawit Sukses Sejahtera",
    Alias: "SSS",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.310",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 10,
    KodePT: 3200,
    NamaPT: "Prima Cipta Selaras",
    Alias: "PCS",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.320",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: 11,
    KodePT: 3300,
    NamaPT: "Tan",
    Alias: "TAN",
    Alamat:
      "Jl. TB. Simatupang No.41 Lt. 7 Gedung B Beltway Office Park, Jakarta Selatan",
    NPWPPT: "99.999.999.9-999.330",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
];

const dmyPTAtt = [
  {
    ID: Math.floor(Math.random() * 999),
    KodePT: 1100,
    ValidFrom: "01/01/2018",
    ValidTo: "31/12/2022",
    NPWPPT: "99.999.999.9-999.110",
    NamaPemotong: "Bin Bin",
    NPWPPemotong: "99.999.999.1-111.000",
  },
  {
    ID: Math.floor(Math.random() * 999),
    KodePT: 1100,
    ValidFrom: "01/01/2023",
    ValidTo: "31/12/9999",
    NPWPPT: "99.999.999.9-999.110",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
  {
    ID: Math.floor(Math.random() * 999),
    KodePT: 1100,
    ValidFrom: "01/01/2006",
    ValidTo: "31/12/2017",
    NPWPPT: "99.999.999.9-999.110",
    NamaPemotong: "Mr X Fulan",
    NPWPPemotong: "99.999.999.1-111.123",
  },
  {
    ID: Math.floor(Math.random() * 999),
    KodePT: 1200,
    ValidFrom: "01/01/2006",
    ValidTo: "31/12/9999",
    NPWPPT: "99.999.999.9-999.110",
    NamaPemotong: "Fulan Fulan",
    NPWPPemotong: "99.999.999.1-111.111",
  },
];
