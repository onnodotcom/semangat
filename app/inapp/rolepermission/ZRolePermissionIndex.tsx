"use client";

import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
  Form as FormDX,
  Label as LabelFormDX,
} from "devextreme-react/form";
import {
  TabPanel as TabPanelDX,
  Item as ItemTabPanelDX,
} from "devextreme-react/tab-panel";
import { SelectBox as SelectBoxDX } from "devextreme-react/select-box";
import { MsRole } from "@/lib/MsRoles";
import { HierarchyMenu } from "@/lib/HierarchyMenu";
import { DropDownBox as DropDownBoxDX } from "devextreme-react/drop-down-box";
import { TreeView as TreeViewDX } from "devextreme-react/tree-view";
import { Button as ButtonDX } from "devextreme-react/button";
import { Card as CardAntd } from "antd";
import ZPT from "../pt/ZPT";
import {
  Button as ButtonDataGridDX,
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  FilterRow as FilterRowDX,
  Form as FormDataGridDX,
  GroupPanel as GroupPanelDataGridDX,
  Item as ItemDataGridDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";
import { MsRolePermission } from "@/lib/MsRolePermission";
import { Popup as PopupDX, ToolbarItem } from "devextreme-react/popup";
import { useState } from "react";
import ZRolePermissionAdd from "./ZRolePermissionAdd";
import ZRolePermissionEdit from "./ZRolePermissionEdit";
import {
  TreeList as TreeListDX,
  Column as ColumnTreeListDX,
} from "devextreme-react/tree-list";

export default function ZRolePermissionIndex() {
  const [isPopupAdd, setIsPopupAdd] = useState(false);
  const [isPopupEdit, setIsPopupEdit] = useState(false);
  const [action, setAction] = useState({ action: "", title: "" });

  const [dmyRolePermission, setDmyRolePermission] = useState(Array);

  const renderTabHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };
  return (
    <>
      <ButtonDX
        type="default"
        icon="add"
        text="Add New Role"
        height={30}
        width={150}
        onClick={() => {
          setAction({ action: "CREATE", title: "Add New Role" });
          setIsPopupAdd(true);
        }}
      />
      <div className="p-2" />
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <FormDX formData={dmyDefault}>
          <GroupItemFormDX colCount={12}>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <ItemFormDX dataField="NamaRole" colSpan={4} />
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="Menu" colSpan={4} />
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="Username" colSpan={4} />
            <ItemFormDX colSpan={8} />
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
                onClick={()=>{setDmyRolePermission(MsRolePermission)}}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={10} />
          </GroupItemFormDX>
        </FormDX>
      </CardAntd>
      <div className="p-3"></div>
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <ZGridRolePermission
          dmyData={dmyRolePermission}
          setIsPopupAdd={setIsPopupAdd}
          setIsPopupEdit={setIsPopupEdit}
          setAction={setAction}
        />
      </CardAntd>
      {/**
      <PopupDX
        visible={isPopup}
        hideOnOutsideClick={true}
        fullScreen={true}
        title={action.title}
        onHiding={() => {
          setIsPopup(false);
        }}
        contentRender={() => {
          return (
            <>
              {action.action === "CREATE" && (
                <>
                  <ZRolePermissionAdd />
                </>
              )}
              {action.action === "DISPLAY" && <>ini display</>}
            </>
          );
        }}
      ></PopupDX>
       */}
      <ZRolePermissionAdd
        setIsPopupAdd={setIsPopupAdd}
        setAction={setAction}
        isPopupAdd={isPopupAdd}
        action={action}
      />
      <ZRolePermissionEdit
        setIsPopupEdit={setIsPopupEdit}
        setAction={setAction}
        isPopupEdit={isPopupEdit}
        action={action}
      />
    </>
  );
}

function ZGridRolePermission({ dmyData, setIsPopupEdit, setAction }: any) {
  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <DataGridDX
        dataSource={dmyData}
        keyExpr="IDMsRolePermission"
        showBorders
        wordWrapEnabled
        width={"100%"}
      >
        <GroupPanelDataGridDX visible={true} allowColumnDragging={false} />
        <ToolbarDX>
          <ItemDataGridDX name="addRowButton" location="before" />
          <ItemDataGridDX name="exportButton" location="before" />
          <ItemDataGridDX name="searchPanel" location="after" />
        </ToolbarDX>
        <SearchPanelDX visible width={240} />
        <ExportDX enabled />
        <FilterRowDX visible applyFilter={"auto"} />
        <EditingDX mode="popup" useIcons allowUpdating />
        {/** */}
        <ColumnDX type="buttons" fixed fixedPosition="left" width={80}>
          <ButtonDataGridDX
            icon="eyeopen"
            onClick={() => {
              setIsPopupEdit(true);
              setAction({ action: "DISPLAY", title: "Diplay Role" });
            }}
          />
          <ButtonDataGridDX
            icon="edit"
            onClick={() => {
              setIsPopupEdit(true);
              setAction({ action: "UPDATE", title: "Update Role" });
            }}
          /><ButtonDataGridDX
          icon="trash"
          onClick={() => {
            setIsPopupEdit(true);
            setAction({ action: "DELETE", title: "Delete Role" });
          }}
        />
        </ColumnDX>
        <ColumnDX
          dataField="IDMsRolePermission"
          allowEditing={false}
          visible={false}
        />
        <ColumnDX dataField="NamaRole" groupIndex={0} sortOrder="asc" />
        <ColumnDX
          dataField="Menu"
          width={490}
          headerCellRender={() => {
            return renderGridHeader("Menu");
          }}
        />
        <ColumnDX
          dataField="IsCreate"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Create");
          }}
        />
        <ColumnDX
          dataField="IsRead"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Create");
          }}
        />
        <ColumnDX
          dataField="IsUpdate"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Update");
          }}
        />
        <ColumnDX
          dataField="IsDelete"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Delete");
          }}
        />
        <ColumnDX
          dataField="IsPark"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Park");
          }}
        />
        <ColumnDX
          dataField="IsPost"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Post");
          }}
        />
        <ColumnDX
          dataField="IsUndo"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Undo");
          }}
        />
        <ColumnDX
          dataField="IsExport"
          width={100}
          headerCellRender={(e) => {
            return renderGridHeader("Export");
          }}
        />
      </DataGridDX>
    </>
  );
}

const dmyDefault = {
  NamaRole: "",
  Menu: "",
  Username: "",
  MaxRows: 500,
};
