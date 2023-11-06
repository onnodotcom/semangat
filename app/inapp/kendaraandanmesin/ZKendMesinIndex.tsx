import { MsKendaraanDanMesin } from "@/lib/MsKendaraanDanMesin";
import {
  Button as ButtonDataGridDX,
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  FilterRow as FilterRowDX,
  Form as FormDataGridDX,
  GroupPanel as GroupPanelDataGridDX,
  Grouping,
  Item as ItemDataGridDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  Scrolling as ScrollingDataGRidDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";
import { Button as ButtonDX } from "devextreme-react/button";
import { useState } from "react";
import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
  Form as FormDX,
  Label as LabelFormDX,
} from "devextreme-react/form";
import { Card as CardAntd } from "antd";
import { SelectBox as SelectBoxDX } from "devextreme-react/select-box";
import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
import { Popup as PopupDX } from "devextreme-react/popup";

export default function ZKendMesinIndex() {
  const [popUpTitle, setPopUpTitle] = useState("");
  const [isPopupAdd, setIsPopupAdd] = useState(false);
  const [isDisplayPT, setIsDisplayPT] = useState(false);
  const [isEditPT, setIsEditPT] = useState(false);
  const [dmyKendMesin, setDmyKendMesin] = useState(Array);

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <ButtonDX
        type="default"
        icon="add"
        text="Add New Kendaraan/Mesin"
        height={30}
        width={190}
        onClick={() => {
          setIsDisplayPT(false);
          setIsPopupAdd(true);
          setPopUpTitle("Add New Kendaraan dan Mesin");
        }}
      />
      <div className="p-2" />
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <FormDX defaultFormData={dmyDefault}>
          <GroupItemFormDX colCount={12}>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <ItemFormDX dataField="Unit Usaha" colSpan={4}>
              <SelectBoxDX
                dataSource={MsUnitUsaha}
                valueExpr={"Alias"}
                displayExpr={"Alias"}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={8} />

            <ItemFormDX colSpan={2}>
              <LabelFormDX
                render={() => {
                  return <></>;
                }}
              />
              <ButtonDX
                text="Filter"
                icon="filter"
                height={30}
                width={100}
                type="default"
                onClick={() => {
                  setDmyKendMesin(MsKendaraanDanMesin);
                }}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={10} />
          </GroupItemFormDX>
        </FormDX>
      </CardAntd>
      <div className="p-3"></div>
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <DataGridDX
          dataSource={dmyKendMesin}
          keyExpr="IDMsKendaraanDanMesin"
          showBorders
          wordWrapEnabled
          width={"100%"}
          onInitNewRow={() => {
            setPopUpTitle("Add New Kendaraan dan Mesin");
          }}
          onEditingStart={(e) => {
            setPopUpTitle("Update Kendaraan dan Mesin");
          }}
        >
          <ScrollingDataGRidDX mode="virtual" />
          <PagingDX defaultPageSize={0} />
          <ToolbarDX>
            {/**<ItemDataGridDX name="addRowButton" location="before" />*/}
            <ItemDataGridDX name="exportButton" location="before" />
            <ItemDataGridDX name="searchPanel" location="after" />
          </ToolbarDX>
          <SearchPanelDX visible width={240} />
          <ExportDX enabled />
          <FilterRowDX visible applyFilter={"auto"} />
          <EditingDX
            mode="popup"
            useIcons
            allowUpdating
            allowAdding
            allowDeleting
          >
            <PopupDataGridDX
              title={popUpTitle}
              showTitle={true}
              fullScreen={true}
            />
            <FormDataGridDX>
              <GroupItemFormDX colCount={12}>
                <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
                <ItemFormDX dataField="Tipe" colSpan={6} />
                <ItemFormDX dataField="JenisKendaraanDanMesin" colSpan={6} />
                <ItemFormDX dataField="KodeOperasional" colSpan={6} />
                <ItemFormDX dataField="InternalOrder" colSpan={6} />
                <ItemFormDX dataField="NamaUnitUsaha" colSpan={6} />
                <ItemFormDX dataField="TahunPerolehan" colSpan={6} />
                <ItemFormDX dataField="NomorPolisi" colSpan={8} />
                <ItemFormDX colSpan={4} />
                <ItemFormDX dataField="NomorRangka" colSpan={8} />
                <ItemFormDX colSpan={4} />
                <ItemFormDX dataField="NomorMesin" colSpan={8} />
                <ItemFormDX colSpan={4} />
                <ItemFormDX dataField="Merk" colSpan={8} />
                <ItemFormDX colSpan={4} />
                <ItemFormDX dataField="Model" colSpan={8} />
                <ItemFormDX colSpan={4} />
              </GroupItemFormDX>
            </FormDataGridDX>
          </EditingDX>
          {/** */}
          <ColumnDX type="buttons" fixed fixedPosition="left" width={80}>
            <ButtonDataGridDX
              icon="eyeopen"
              onClick={() => {
                setIsDisplayPT(true);
                setIsPopupAdd(true);
                setPopUpTitle("Display Kendaraan dan Mesin");
              }}
            />
            <ButtonDataGridDX icon="edit" name="edit" />
            <ButtonDataGridDX icon="trash" name="delete" />
          </ColumnDX>
          <ColumnDX
            dataField="Tipe"
            width={120}
            headerCellRender={() => {
              return renderGridHeader("Tipe");
            }}
          />
          <ColumnDX
            dataField="JenisKendaraanDanMesin"
            width={160}
            headerCellRender={() => {
              return renderGridHeader("Jenis");
            }}
          />
          <ColumnDX
            dataField="KodeOperasional"
            width={160}
            headerCellRender={() => {
              return renderGridHeader("Kode Operasional");
            }}
          />
          <ColumnDX
            dataField="InternalOrder"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Internal Order");
            }}
          />
          <ColumnDX
            dataField="NamaUnitUsaha"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Unit Usaha");
            }}
          />
          <ColumnDX
            dataField="NomorPolisi"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Nomor Polisi");
            }}
          />
          <ColumnDX
            dataField="NomorRangka"
            width={200}
            headerCellRender={() => {
              return renderGridHeader("Nomor Rangka");
            }}
          />
          <ColumnDX
            dataField="NomorMesin"
            width={200}
            headerCellRender={() => {
              return renderGridHeader("Nomor Mesin");
            }}
          />
          <ColumnDX
            dataField="TahunPerolehan"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Tahun Perolehan");
            }}
          />
          <ColumnDX
            dataField="Merk"
            width={150}
            headerCellRender={() => {
              return renderGridHeader("Merk");
            }}
          />
          <ColumnDX
            dataField="Model"
            width={150}
            headerCellRender={() => {
              return renderGridHeader("Model");
            }}
          />

          <ColumnDX width={80} />
          {/** */}
        </DataGridDX>
      </CardAntd>
      <PopupDX
        title={popUpTitle}
        showTitle={true}
        visible={isPopupAdd}
        hideOnOutsideClick={true}
        fullScreen={true}
        onHiding={() => {
          setIsPopupAdd(false);
        }}
        contentRender={() => {
          const dmyKendMesin = {
            IDMsKendaraanDanMesin: Math.floor(Math.random() * 9999),
            KodeOperasional: "DT01-AGI",
            InternalOrder: "E001KRD901",
            NomorPolisi: "B 9471 BDB",
            NomorRangka: "4D34TG21725",
            NomorMesin: "MHMFE74P5BK044568",
            Merk: "Mitsubishi",
            Model: "HDX",
            JenisKendaraanDanMesin: "Dump Truck (Kecil)",
            Tipe: "Kendaraan",
            NamaUnitUsaha: "TSE",
            TahunPerolehan: 2023,
          };
          const dmyKendMesinNull = {
            IDMsKendaraanDanMesin: Math.floor(Math.random() * 9999),
            KodeOperasional: "",
            InternalOrder: "",
            NomorPolisi: "",
            NomorRangka: "",
            NomorMesin: "",
            Merk: "",
            Model: "",
            JenisKendaraanDanMesin: "",
            Tipe: "",
            NamaUnitUsaha: "",
            TahunPerolehan: null,
          };
          return (
            <>
              <FormDX
                readOnly={isDisplayPT}
                formData={isDisplayPT ? dmyKendMesin : dmyKendMesinNull}
              >
                <GroupItemFormDX cssClass="first-group" colCount={12}>
                  <ItemFormDX colSpan={12}>
                    <div className="p-1"></div>
                  </ItemFormDX>
                  <ItemFormDX dataField="Tipe" colSpan={4} />
                  <ItemFormDX dataField="JenisKendaraanDanMesin" colSpan={4} />
                  <ItemFormDX colSpan={4} />
                  <ItemFormDX dataField="KodeOperasional" colSpan={4} />
                  <ItemFormDX dataField="InternalOrder" colSpan={4} />
                  <ItemFormDX colSpan={4} />
                  <ItemFormDX dataField="NamaUnitUsaha" colSpan={4} />
                  <ItemFormDX dataField="TahunPerolehan" colSpan={4} />
                  <ItemFormDX colSpan={4} />
                  <ItemFormDX dataField="NomorPolisi" colSpan={6} />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX dataField="NomorRangka" colSpan={6} />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX dataField="NomorMesin" colSpan={6} />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX dataField="Merk" colSpan={6} />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX dataField="Model" colSpan={6} />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX colSpan={2} visible={!isDisplayPT}>
                    <LabelFormDX
                      render={() => {
                        return <></>;
                      }}
                    />
                    <ButtonDX
                      text="Save"
                      icon="save"
                      height={30}
                      width={100}
                      type="default"
                    />
                  </ItemFormDX>
                </GroupItemFormDX>
              </FormDX>
            </>
          );
        }}
      ></PopupDX>
    </>
  );
}

const dmyDefault = {
  NamaScope: "",
  Username: "",
  MaxRows: 500,
};
