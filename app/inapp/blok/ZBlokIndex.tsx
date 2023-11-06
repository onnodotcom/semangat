"use client";
import { MsAfdeling } from "@/lib/MsAfdeling";
import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
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
import { Msblok } from "@/lib/MsBlok";
import { useState } from "react";
import {
  Popup as PopupDX,
  ToolbarItem as ToolbarItemPopupDX,
} from "devextreme-react/popup";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import {
  TabPanel as TabPanelDX,
  Item as ItemTabPanelDX,
} from "devextreme-react/tab-panel";
import { MsBlokAtt } from "@/lib/MsBlokAtt";
import { MsBlokPrasarana } from "@/lib/MsBlokPrasarana";
import { MsBlokBJR } from "@/lib/MsBlokBJR";
import { MsJenisPra } from "@/lib/MsJenisPrasarana";

export default function ZBlokIndex() {
  const [dmyBlok, setDmyBlok] = useState(Array);
  const [dmyBlokAtt, setDmyBlokAtt] = useState(Array);
  const [popUpTitle, setPopUpTitle] = useState("");
  const [isPopupAdd, setIsPopupAdd] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [formKodeUnitUsaha, setFormKodeUnitUsaha] = useState("");
  const [formBlok, setFormBlok] = useState("");
  const [action, setAction] = useState<{
    action: "CREATE" | "DISPLAY" | "EDIT" | "DELETE" | undefined;
    title: string;
  }>({ action: undefined, title: "" });
  const [test, setTest] = useState("");

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  const renderPopupAddContent = () => {
    return (
      <>
        <FormDX readOnly={isDisplay}>
          <GroupItemFormDX cssClass="first-group" colCount={12}>
            <ItemFormDX colSpan={12}>
              <div className="p-1"></div>
            </ItemFormDX>
            <ItemFormDX dataField="UnitUsaha" colSpan={4}>
              <SelectBoxDX
                dataSource={MsUnitUsaha}
                valueExpr={"KodeUnitUsaha"}
                displayExpr={"Alias"}
                onValueChange={(e) => {
                  setFormKodeUnitUsaha(e);
                }}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="Blok" colSpan={4}>
              <TextBoxDX
                valueChangeEvent="keyup"
                onValueChange={(e) => setFormBlok(e)}
                maxLength={4}
              />
            </ItemFormDX>
            <ItemFormDX
              dataField=""
              colSpan={4}
              editorType="dxTextBox"
              editorOptions={{
                readOnly: true,
                value: formKodeUnitUsaha + formBlok.toUpperCase(),
              }}
            />
            <ItemFormDX colSpan={4} />
            {/*
            <ItemFormDX colSpan={2} visible={!isDisplay}>
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
            */}
          </GroupItemFormDX>
        </FormDX>
        <div className="p-5"></div>
        <TabPanelDX>
          <ItemTabPanelDX title="General">
            <div className="p-3">
              <RenderTabGeneral />
            </div>
          </ItemTabPanelDX>
          <ItemTabPanelDX title="Prasarana">
            <div className="p-3">
              <RenderTabPrasarana />
            </div>
          </ItemTabPanelDX>
          <ItemTabPanelDX title="BJR">
            <div className="p-3">
              <RenderTabBJR />
            </div>
          </ItemTabPanelDX>
        </TabPanelDX>
      </>
    );
  };

  const RenderTabGeneral = () => {
    return (
      <>
        <DataGridDX
          dataSource={action.action === "CREATE" ? dmyBlokAtt : MsBlokAtt}
          keyExpr="IDMsBlokAtt"
          showBorders
          wordWrapEnabled
          onInitNewRow={(e: any) => {
            e.data.IsCurrentlyUse = true;
            e.data.ValidFrom = new Date("2022-01-1");
            e.data.ValidTo = new Date("9999-12-31");
          }}
        >
          <ToolbarDX>
            <ItemDataGridDX name="addRowButton" location="before" />
            <ItemDataGridDX name="searchPanel" location="after" />
          </ToolbarDX>
          <SearchPanelDX visible width={240} />
          <ExportDX enabled />
          <FilterRowDX visible applyFilter={"auto"} />
          <EditingDX
            mode="row"
            useIcons
            allowDeleting={action.action != "DISPLAY"}
            allowAdding={action.action != "DISPLAY"}
          />
          <ColumnDX
            dataField="IsCurrentlyUse"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Currently Use");
            }}
            dataType="boolean"
          />
          <ColumnDX
            dataField="ValidFrom"
            width={100}
            defaultSortOrder="desc"
            headerCellRender={() => {
              return renderGridHeader("Valid From");
            }}
            dataType="date"
            format={"dd-MM-yyyy"}
          />
          <ColumnDX
            dataField="ValidTo"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Valid To");
            }}
            dataType="date"
          />
          <ColumnDX
            dataField="Afdeling"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Afdeling");
            }}
          />
          <ColumnDX
            dataField="StatusTanaman"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Status Tanaman");
            }}
          />
          <ColumnDX
            dataField="Topografi"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Topografi");
            }}
          />
          <ColumnDX
            dataField="JenisBibit"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Jenis Bibit");
            }}
          />
          <ColumnDX
            dataField="TanggalTanam"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Tanggal Tanam");
            }}
          />
          <ColumnDX
            dataField="TanggalTM"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Tanggal TM");
            }}
          />
          <ColumnDX
            dataField="LuasTanah"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Luas Tanah");
            }}
          />
          <ColumnDX
            dataField="LuasTanahTertanam"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Luas Tertanam");
            }}
          />
          <ColumnDX type="buttons" fixedPosition="right">
            <ButtonDataGridDX icon="todo" name="save" hint="item Ok" />
            <ButtonDataGridDX icon="edit" name="edit" />
            <ButtonDataGridDX icon="trash" name="delete" hint="Remove Item" />
            <ButtonDataGridDX icon="revert" name="cancel" />
          </ColumnDX>
        </DataGridDX>
      </>
    );
  };

  const RenderTabPrasarana = () => {
    const setCellValue = (newData: any, value: any, currentRowData: any) => {
      currentRowData.Kuantitas = value;
      console.log(value);
    };

    return (
      <>
        <DataGridDX
          dataSource={action.action === "CREATE" ? dmyBlokAtt : MsBlokPrasarana}
          keyExpr="IDMsBlokPra"
          showBorders
          wordWrapEnabled
        >
          <ToolbarDX>
            <ItemDataGridDX name="addRowButton" location="before" />
            <ItemDataGridDX name="searchPanel" location="after" />
          </ToolbarDX>
          <SearchPanelDX visible width={240} />
          <ExportDX enabled />
          <FilterRowDX visible applyFilter={"auto"} />
          <EditingDX
            mode="row"
            useIcons
            allowDeleting={action.action != "DISPLAY"}
            allowUpdating={action.action != "DISPLAY"}
            allowAdding={action.action != "DISPLAY"}
          />
          {/*
          <ColumnDX
            dataField="IsCurrentlyUse"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Currently Use");
            }}
            dataType="boolean"
          />
          <ColumnDX
            dataField="ValidFrom"
            width={100}
            defaultSortOrder="desc"
            headerCellRender={() => {
              return renderGridHeader("Valid From");
            }}
          />
          <ColumnDX
            dataField="ValidTo"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Valid To");
            }}
          />
          */}
          <ColumnDX
            dataField="NamaPrasarana"
            width={400}
            headerCellRender={() => {
              return renderGridHeader("Jenis Prasarana");
            }}
            setCellValue={setCellValue}
          >
            <LookupDataGridDX
              dataSource={MsJenisPra}
              displayExpr="NamaPrasarana"
              valueExpr="NamaPrasarana"
              allowClearing
            />
          </ColumnDX>
          <ColumnDX
            dataField="Kuantitas"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Jumlah");
            }}
          />
          <ColumnDX
            dataField="Satuan"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Satuan");
            }}
          />
          <ColumnDX
            dataField="Catatan"
            width={400}
            headerCellRender={() => {
              return renderGridHeader("Catatan");
            }}
          />
          <ColumnDX type="buttons">
            <ButtonDataGridDX icon="edit" name="edit" />
            <ButtonDataGridDX icon="todo" name="save" />
            <ButtonDataGridDX icon="revert" name="cancel" />
          </ColumnDX>
        </DataGridDX>
      </>
    );
  };

  const RenderTabBJR = () => {
    return (
      <>
        <DataGridDX
          dataSource={MsBlokBJR}
          keyExpr="MsBlokBJR"
          showBorders
          wordWrapEnabled
        >
          <ToolbarDX>
            <ItemDataGridDX name="addRowButton" location="before" />
            <ItemDataGridDX name="searchPanel" location="after" />
          </ToolbarDX>
          <SearchPanelDX visible width={240} />
          <ExportDX enabled />
          <FilterRowDX visible applyFilter={"auto"} />
          <EditingDX
            mode="row"
            useIcons
            allowDeleting={action.action != "DISPLAY"}
            allowAdding={action.action != "DISPLAY"}
            allowUpdating={action.action != "DISPLAY"}
          />
          <ColumnDX
            dataField="IsCurrentlyUse"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Currently Use");
            }}
            dataType="boolean"
          />
          <ColumnDX
            dataField="ValidFrom"
            width={100}
            defaultSortOrder="desc"
            headerCellRender={() => {
              return renderGridHeader("Valid From");
            }}
          />
          <ColumnDX
            dataField="ValidTo"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("Valid To");
            }}
          />
          <ColumnDX
            dataField="BJRSensus"
            width={180}
            headerCellRender={() => {
              return renderGridHeader("BJR Sensus");
            }}
          />
          <ColumnDX
            dataField="BJRPabrik"
            width={180}
            headerCellRender={() => {
              return renderGridHeader("BJR Sensus");
            }}
          />
        </DataGridDX>
      </>
    );
  };

  return (
    <>
      <ButtonDX
        type="default"
        icon="add"
        text="Add New Blok"
        height={30}
        width={150}
        onClick={() => {
          setIsDisplay(false);
          setIsPopupAdd(true);
          setPopUpTitle("Add New Blok");
          setAction({ action: "CREATE", title: "Add New Blok" });
        }}
      />
      <div className="p-2" />
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <FormDX defaultFormData={dmyDefault}>
          <GroupItemFormDX colCount={12}>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <ItemFormDX
              dataField="KodeUnitUsaha"
              colSpan={4}
              editorType="dxTextBox"
              editorOptions={{ readOnly: true }}
            />
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="Afdeling" colSpan={4}>
              <SelectBoxDX
                dataSource={MsAfdeling}
                valueExpr={"KodeAfdeling"}
                displayExpr={"KodeAfdeling"}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="Blok" colSpan={2} />
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
                  setDmyBlok(Msblok);
                }}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={10} />
          </GroupItemFormDX>
        </FormDX>
        <div className="p-3" />
        <DataGridDX
          dataSource={dmyBlok}
          keyExpr="IDBlok"
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
          ></EditingDX>
          <ColumnDX type="buttons" fixed fixedPosition="left" width={80}>
            <ButtonDataGridDX
              icon="eyeopen"
              onClick={() => {
                setIsDisplay(true);
                setIsPopupAdd(true);
                setAction({ action: "DISPLAY", title: "Display Blok" });
              }}
            />
            <ButtonDataGridDX
              icon="edit"
              onClick={() => {
                //setIsDisplay(true);
                setIsPopupAdd(true);
                setAction({ action: "EDIT", title: "Edit Blok" });
              }}
            />
            <ButtonDataGridDX icon="trash" name="delete" />
          </ColumnDX>
          <ColumnDX
            dataField="KodeBlok"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Kode Blok");
            }}
          />
          <ColumnDX
            dataField="UnitUsaha"
            width={60}
            headerCellRender={() => {
              return renderGridHeader("Unit Usaha");
            }}
          />
          <ColumnDX
            dataField="Afdeling"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Afdeling");
            }}
          />
          <ColumnDX
            dataField="Owner"
            width={60}
            headerCellRender={() => {
              return renderGridHeader("Owner");
            }}
          />
          <ColumnDX
            dataField="StatusTanaman"
            width={70}
            headerCellRender={() => {
              return renderGridHeader("Status Tanaman");
            }}
          />
          <ColumnDX
            dataField="Topografi"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Topografi");
            }}
          />
          <ColumnDX
            dataField="LuasTanah"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Luas Tanah");
            }}
            dataType="string"
          />
          <ColumnDX
            dataField="LuasTanahTertanam"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Luas Tertanam");
            }}
            dataType="string"
          />
          <ColumnDX
            dataField="JumlahPohon"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Jumlah Pohon");
            }}
            dataType="string"
          />
        </DataGridDX>
      </CardAntd>
      <PopupDX
        title={action.title}
        showTitle={true}
        visible={isPopupAdd}
        hideOnOutsideClick={true}
        fullScreen={true}
        onHiding={() => {
          setIsPopupAdd(false);
        }}
        contentRender={renderPopupAddContent}
      >
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
      </PopupDX>
    </>
  );
}

const dmyDefault = {
  KodeUnitUsaha: "E001 - TSE (sesuai pilihan unit usaha diatas)",
  MaxRows: 500,
};
