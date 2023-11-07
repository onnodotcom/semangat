"use client";

import { CardStyles } from "@/lib/AntdCardStyles";
import { Card as CardAntd } from "antd";
import { Button as ButtonDX } from "devextreme-react/button";
import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
  Form as FormDX,
  Label as LabelFormDX,
} from "devextreme-react/form";
import { SelectBox as SelectBoxDX } from "devextreme-react/select-box";
import {
  Button as ButtonDataGridDX,
  ColumnChooser as ColumnChooserDataGridDX,
  ColumnChooserSearch as ColumnChooserSearchDataGridDX,
  ColumnChooserSelection as ColumnChooserSelectionDataGridDX,
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  FilterRow as FilterRowDX,
  Form as FormDataGridDX,
  GroupPanel as GroupPanelDataGridDX,
  Grouping,
  Item as ItemDataGridDX,
  Lookup as LookupDataGridDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  Position as PositionDataGridDX,
  Scrolling as ScrollingDataGRidDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";
import { MsKegiatanDetail } from "@/lib/MsKegiatanDetail";
import {
  Popup as PopupDX,
  ToolbarItem as ToolbarItemPopupDX,
} from "devextreme-react/popup";
import { useState } from "react";
import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
import { MsKegiatanHeader } from "@/lib/MsKegiatanHeader";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import { MsKegiatan } from "@/lib/MsKegiatan";
import { MsSatuan } from "@/lib/MsSatuan";

export default function Page() {
  const [action, setAction] = useState<{
    action: "CREATE" | "DISPLAY" | "EDIT" | "DELETE" | undefined;
    title: string;
  }>({ action: undefined, title: "" });
  const [isPopupAdd, setIsPopupAdd] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [formKegiatanHeader, setFormKegiatanHeader] = useState("");
  const [formKegiatan, setFormKegiatan] = useState("");

  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ButtonDX
            type="default"
            icon="add"
            text="Add New Kegiatan"
            height={30}
            width={150}
            onClick={() => {
              setIsDisplay(false);
              setIsPopupAdd(true);
              setAction({ action: "CREATE", title: "Add New Kegiatan" });
            }}
          />
          <div className="p-2" />
          <CardAntd style={{ borderColor: "#dbdbdb" }}>
            <FormDX formData={dmyDefault}>
              <GroupItemFormDX colCount={12}>
                <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
                <ItemFormDX dataField="KegiatanHeader" colSpan={4} />
                <ItemFormDX dataField="Kegiatan" colSpan={4} />
                <ItemFormDX colSpan={4} />
                <ItemFormDX dataField="AktifitasLapangan" colSpan={6} />
                <ItemFormDX colSpan={6} />
                <ItemFormDX dataField="MainGL" colSpan={2} />
                <ItemFormDX colSpan={10} />
                <ItemFormDX dataField="MaxRows" colSpan={2} />
                <ItemFormDX colSpan={10} />
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
                      //setDmyBlok(Msblok);
                    }}
                  />
                </ItemFormDX>
                <ItemFormDX colSpan={10} />
              </GroupItemFormDX>
            </FormDX>
            <div className="p-3" />
            <DataGridDX
              dataSource={MsKegiatanDetail}
              keyExpr="IDMsKegiatan"
              showBorders
              wordWrapEnabled
              width={"100%"}
              onInitNewRow={() => {
                //setPopUpTitle("Add New Kendaraan dan Mesin");
              }}
              onEditingStart={(e) => {
                //setPopUpTitle("Update Kendaraan dan Mesin");
              }}
            >
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
              />
              <ColumnDX type="buttons" fixed fixedPosition="left" width={80}>
                <ButtonDataGridDX
                  icon="eyeopen"
                  onClick={() => {
                    setIsDisplay(true);
                    setIsPopupAdd(true);
                    setAction({ action: "DISPLAY", title: "Display Kegiatan" });
                  }}
                />
                <ButtonDataGridDX
                  icon="edit"
                  onClick={() => {
                    setIsDisplay(true);
                    setIsPopupAdd(true);
                    setAction({ action: "EDIT", title: "Edit Kegiatan" });
                  }}
                />
                <ButtonDataGridDX icon="trash" name="delete" />
              </ColumnDX>
              <ColumnDX
                dataField="KegiatanHeader"
                width={120}
                headerCellRender={() => {
                  return renderGridHeader("Kegiatan Header");
                }}
              />
              <ColumnDX
                dataField="Kegiatan"
                width={200}
                headerCellRender={() => {
                  return renderGridHeader("Kegiatan");
                }}
              />
              <ColumnDX
                dataField="AktifitasLapangan"
                width={500}
                headerCellRender={() => {
                  return renderGridHeader("Aktifitas Lapangan");
                }}
              />
              <ColumnDX
                dataField="Output01"
                width={70}
                headerCellRender={() => {
                  return renderGridHeader("Output 1");
                }}
              />
              <ColumnDX
                dataField="Output02"
                width={70}
                headerCellRender={() => {
                  return renderGridHeader("Output 2");
                }}
              />
              <ColumnDX
                dataField="Output03"
                width={70}
                headerCellRender={() => {
                  return renderGridHeader("Output 3");
                }}
              />
              <ColumnDX
                dataField="IsMaterial"
                width={60}
                headerCellRender={() => {
                  return renderGridHeader("Dengan Material");
                }}
              />
              <ColumnDX
                dataField="MainGL"
                width={100}
                headerCellRender={() => {
                  return renderGridHeader("Main GL");
                }}
              />
            </DataGridDX>
          </CardAntd>
        </CardAntd>
      </div>
      <PopupDX
        title={action.title}
        showTitle={true}
        visible={isPopupAdd}
        hideOnOutsideClick={true}
        fullScreen={true}
        onHiding={() => {
          setIsPopupAdd(false);
        }}
        contentRender={() => {
          return renderPopupAddContent({ isDisplay, setFormKegiatanHeader });
        }}
        toolbarItems={[
          {
            location: "after",
            toolbar: "bottom",
            widget: "dxButton",
            visible: action.action === "DISPLAY" ? false : true,
            options: {
              text: "Save",
              icon: "save",
              type: "default",
            },
          },
          {
            location: "after",
            toolbar: "bottom",
            widget: "dxButton",
            options: {
              text: "Cancel",
            },
          },
        ]}
      >
        {/*
        <ToolbarItemPopupDX
          options={{
            text: "Save",
            onClick: function () {
              setIsPopupAdd(false);
            },
            icon: "save",
            type: "default",
          }}
          widget="dxButton"
          location="after"
          toolbar="bottom"
        />
        <ToolbarItemPopupDX
          options={{
            text: "Cancel",
            onClick: function () {
              setIsPopupAdd(false);
            },
          }}
          widget="dxButton"
          location="after"
          toolbar="bottom"
        />
        */}
      </PopupDX>
    </>
  );
}

const renderGridHeader = (title: string) => {
  return <div className="text-gray-900 text-xs font-bold">{title}</div>;
};

const renderPopupAddContent = ({
  isDisplay,
  setFormKegiatanHeader,
  setFormKegiatan,
}: any) => {
  return (
    <>
      <FormDX readOnly={isDisplay}>
        <GroupItemFormDX cssClass="first-group" colCount={12}>
          <ItemFormDX colSpan={12}>
            <div className="p-1"></div>
          </ItemFormDX>
          <ItemFormDX dataField="KegiatanHeader" colSpan={3}>
            <SelectBoxDX
              dataSource={MsKegiatanHeader}
              valueExpr={"IDMsKegiatanHeader"}
              displayExpr={"KegiatanHeader"}
              onValueChange={(e) => {
                setFormKegiatanHeader(e);
              }}
            />
          </ItemFormDX>
          <ItemFormDX dataField="Kegiatan" colSpan={4}>
            <SelectBoxDX
              dataSource={MsKegiatan}
              valueExpr={"IDMsKegiatan"}
              displayExpr={"Kegiatan"}
              onValueChange={(e) => {
                setFormKegiatanHeader(e);
              }}
            />
          </ItemFormDX>
          <ItemFormDX colSpan={5} />
          <ItemFormDX
            dataField="AktifitasLapangan"
            colSpan={5}
            editorType="dxTextBox"
          />
          <ItemFormDX colSpan={7} />
          <ItemFormDX dataField="Output1" colSpan={2}>
            <SelectBoxDX
              dataSource={MsSatuan}
              valueExpr={"IDMsSatuan"}
              displayExpr={"Satuan"}
            />
          </ItemFormDX>
          <ItemFormDX dataField="Output2" colSpan={2}>
            <SelectBoxDX
              dataSource={MsSatuan}
              valueExpr={"IDMsSatuan"}
              displayExpr={"Satuan"}
            />
          </ItemFormDX>
          <ItemFormDX dataField="Output3" colSpan={2}>
            <SelectBoxDX
              dataSource={MsSatuan}
              valueExpr={"IDMsSatuan"}
              displayExpr={"Satuan"}
            />
          </ItemFormDX>
          <ItemFormDX colSpan={6} />
        </GroupItemFormDX>
      </FormDX>
    </>
  );
};

const dmyDefault = {
  KegiatanHeader: "",
  Kegiatan: "",
  AktifitasLapangan: "",
  MainGL: "",
  MaxRows: 500,
};
