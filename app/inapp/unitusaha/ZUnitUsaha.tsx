"use client";

import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
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
  Form as FormDX,
  Item,
} from "devextreme-react/form";
import { useState } from "react";
import ZUnitUsahaAtt from "./ZUnitUsahaAtt";
import { MsUnitUsahaAtt } from "@/lib/MsUnitUsahaAtt";
import { SelectBox as SelectBoxDX } from "devextreme-react/select-box";
import { MsPT } from "@/lib/MsPT";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import { Popup as PopupDX, ToolbarItem } from "devextreme-react/popup";
import { Button as ButtonDX } from "devextreme-react/button";
import { Divider } from "antd";

import notify from "devextreme/ui/notify";

export default function ZUnitUsaha() {
  const [popUpTitle, setPopUpTitle] = useState("Maintain Unit Usaha");
  const [isDisplay, setIsDisplay] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [dmyUnitUsahaAttCurr, setDmyUnitUsahaAttCurr] =
    useState(MsUnitUsahaAtt);
  const [dmyUnitUsahaCurr, setDmyUnitUsahaCurr] = useState(Object);

  const doFilterDmy = (KodeUnitUsaha: string) => {
    setDmyUnitUsahaAttCurr(
      MsUnitUsahaAtt.filter((rec) => {
        return rec?.KodeUnitUsaha === KodeUnitUsaha;
      })
    );

    setDmyUnitUsahaCurr(
      MsUnitUsaha.filter((rec) => {
        return rec.KodeUnitUsaha === KodeUnitUsaha;
      })
    );
  };

  const doSave = () => {
    notify(
      {
        message: "Data tersimpan",
        width: 230,
        displayTime: 3500,
        position: {
          at: "top right",
          my: "bottom center",
          offset: "-130 80",
        },
      },
      "success",
      500
    );
  };

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <DataGridDX
        dataSource={MsUnitUsaha}
        keyExpr="IDMsUnitUsaha"
        showBorders
        wordWrapEnabled
        width={"100%"}
        onInitNewRow={() => {
          setIsDisplay(false);
          setIsEdit(false);
          setPopUpTitle("Add New Unit Usaha");
          doFilterDmy("E999");
        }}
        onEditingStart={(e) => {
          setIsDisplay(false);
          setIsEdit(true);
          setPopUpTitle("Change Unit Usaha");
          doFilterDmy(e.data.KodeUnitUsaha);
        }}
      >
        <ToolbarDX>
          <ItemDataGridDX name="addRowButton" location="before" />
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
          <PopupDataGridDX title={popUpTitle} showTitle fullScreen>
            {/**
            <ToolbarItem toolbar="bottom" visible={false} />
            */}
          </PopupDataGridDX>
          <FormDataGridDX>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <GroupItemFormDX colSpan={12}>
              <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX
                dataField="IDMsUnitUsaha"
                colSpan={2}
                visible={isEdit}
              />
              <ItemFormDX colSpan={10} visible={isEdit} />
              <ItemFormDX dataField="KodeUnitUsaha" colSpan={3} />
              <ItemFormDX dataField="Alias" colSpan={3} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="NamaUnitUsaha" colSpan={6} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="Alamat" colSpan={6} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="AliasPT" colSpan={3}>
                <SelectBoxDX
                  dataSource={MsPT}
                  showClearButton
                  searchEnabled
                  displayExpr={"Alias"}
                  visible={!isEdit}
                  defaultValue={MsUnitUsaha[0].AliasPT}
                />
                <TextBoxDX
                  visible={isEdit}
                  defaultValue={MsUnitUsaha[0].AliasPT}
                  readOnly
                />
              </ItemFormDX>
              <ItemFormDX colSpan={9} />
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              {/**
              <ItemFormDX colSpan={2}>
                <ButtonDX
                  text="Save"
                  width={"100%"}
                  height={30}
                  type="default"
                  icon="save"
                  onClick={doSave}
                />
              </ItemFormDX>
              <ItemFormDX colSpan={10} />
               */}
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX colSpan={12}>
                <ZUnitUsahaAtt
                  dmyUnitUsahaAttCurr={dmyUnitUsahaAttCurr}
                  isDisplay={false}
                />
              </ItemFormDX>
            </GroupItemFormDX>
          </FormDataGridDX>
        </EditingDX>

        <ColumnDX type="buttons" fixedPosition="left">
          <ButtonDataGridDX
            icon="eyeopen"
            onClick={(e) => {
              setPopUpTitle("Display Unit Usaha");
              doFilterDmy(e.row.data.KodeUnitUsaha);
              setIsDisplay(true);
            }}
          />
          <ButtonDataGridDX icon="edit" name="edit" />
          <ButtonDataGridDX icon="trash" name="delete" />
        </ColumnDX>
        <ColumnDX
          dataField="IDMsUnitUsaha"
          dataType="string"
          visible={false}
          allowEditing={false}
        />
        <ColumnDX
          dataField="Alias"
          dataType="string"
          width={60}
          allowSorting
          allowFiltering
          allowSearch
          fixed
          fixedPosition="left"
          allowEditing
          defaultSortOrder="asc"
          headerCellRender={() => {
            return renderGridHeader("Alias");
          }}
        />
        <ColumnDX
          dataField="NamaUnitUsaha"
          dataType="string"
          width={230}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Nama Unit Usaha");
          }}
        />
        <ColumnDX
          dataField="KodeUnitUsaha"
          dataType="string"
          width={90}
          allowSorting
          allowFiltering
          allowSearch
          allowEditing={!isEdit}
          headerCellRender={() => {
            return renderGridHeader("Kode Unit Usaha");
          }}
        />
        <ColumnDX
          dataField="AliasPT"
          dataType="string"
          width={60}
          allowSorting
          allowFiltering
          allowSearch
          allowEditing={!isEdit}
          headerCellRender={() => {
            return renderGridHeader("PT");
          }}
        />
        <ColumnDX
          dataField="Alamat"
          dataType="string"
          width={360}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Alamat Unit Usaha");
          }}
        />
        <ColumnDX
          dataField="Manager"
          dataType="string"
          width={200}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Manager");
          }}
        />
        <ColumnDX
          dataField="KasiePembukuan"
          dataType="string"
          width={200}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Kasie Pembukuan");
          }}
        />
        <ColumnDX
          dataField="KasieTanaman"
          dataType="string"
          width={200}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Kasie Tanaman");
          }}
        />
      </DataGridDX>
      <PopupDX
        title={popUpTitle}
        showTitle={true}
        visible={isDisplay}
        hideOnOutsideClick={true}
        fullScreen={true}
        onHiding={() => {
          setIsDisplay(false);
        }}
        contentRender={() => {
          console.log(dmyUnitUsahaCurr);
          return (
            <>
              <FormDX
                formData={dmyUnitUsahaCurr[0]}
                defaultFormData={dmyUnitUsahaCurr[0]}
              >
                <GroupItemFormDX cssClass="first-group" colCount={12}>
                  <ItemFormDX colSpan={12}>
                    <div className="p-1"></div>
                  </ItemFormDX>
                  <ItemFormDX
                    dataField="IDMsUnitUsaha"
                    colSpan={2}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={10} visible />
                  <ItemFormDX
                    dataField="KodeUnitUsaha"
                    colSpan={3}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX
                    dataField="Alias"
                    colSpan={3}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX
                    dataField="NamaUnitUsaha"
                    colSpan={6}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX
                    dataField="Alamat"
                    colSpan={6}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX
                    dataField="AliasPT"
                    colSpan={3}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />

                  <ItemFormDX colSpan={9} />
                  <ItemFormDX colSpan={12}>
                    <div className="p-2"></div>
                  </ItemFormDX>
                </GroupItemFormDX>
              </FormDX>
              <ZUnitUsahaAtt
                dmyUnitUsahaAttCurr={dmyUnitUsahaAttCurr}
                isDisplay={true}
              />
            </>
          );
        }}
      />
    </>
  );
}
