"use client";

import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
  Form as FormDX,
  Label as LabelFormDX,
} from "devextreme-react/form";
import { Button as ButtonDX } from "devextreme-react/button";
import { Card as CardAntd } from "antd";
import {
  TabPanel as TabPanelDX,
  Item as ItemTabPanelDX,
} from "devextreme-react/tab-panel";
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
  Lookup as LookupDataGridDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";
import { MsRolePermission } from "@/lib/MsRolePermission";
import { MsMenu } from "@/lib/MsMenu";
import {
  Popup as PopupDX,
  Position,
  ToolbarItem as ToolbarItemPopupDX,
} from "devextreme-react/popup";
import { useRef, useState } from "react";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import { MsUserAssignRole } from "@/lib/MsUserAssignRole";
import { MsUser } from "@/lib/MsUser";

export default function ZRolePermissionEdit({
  setIsPopupEdit,
  setAction,
  isPopupEdit,
  action,
}: any) {
  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };
  return (
    <>
      <PopupDX
        visible={isPopupEdit}
        hideOnOutsideClick={true}
        fullScreen={true}
        title={action.title}
        onHiding={() => {
          setIsPopupEdit(false);
        }}
        contentRender={() => {
          return (
            <>
              <FormDX
                formData={dmyRole}
                readOnly={
                  action.action === "DISPLAY" || action.action === "DELETE"
                }
              >
                <GroupItemFormDX colCount={12}>
                  <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
                  <ItemFormDX
                    dataField="NamaRole"
                    colSpan={4}
                    editorType="dxTextBox"
                  />
                  <ItemFormDX
                    colSpan={8}
                    visible={action.action === "UPDATE"}
                  />
                  <ItemFormDX colSpan={2} visible={action.action === "UPDATE"}>
                    <LabelFormDX
                      render={() => {
                        return <></>;
                      }}
                    />
                    <ButtonDX
                      text="Save Update"
                      icon="save"
                      height={30}
                      width={130}
                      type="default"
                      onClick={() => {}}
                    />
                  </ItemFormDX>
                  <ItemFormDX
                    colSpan={8}
                    visible={action.action === "DELETE"}
                  />
                  <ItemFormDX colSpan={2} visible={action.action === "DELETE"}>
                    <LabelFormDX
                      render={() => {
                        return <></>;
                      }}
                    />
                    <ButtonDX
                      text="Delete"
                      icon="trash"
                      height={30}
                      width={130}
                      type="default"
                      onClick={() => {}}
                    />
                  </ItemFormDX>
                </GroupItemFormDX>
              </FormDX>
              <div className="p-5"></div>
              <TabPanelDX>
                <ItemTabPanelDX title="Menu Permission">
                  <div className="p-3">
                    <DataGridDX
                      dataSource={dmyMenuPermision}
                      keyExpr="IDMsRolePermission"
                      showBorders
                      wordWrapEnabled
                      focusedRowEnabled
                    >
                      <SearchPanelDX visible width={240} />
                      <EditingDX
                        mode="batch"
                        useIcons
                        allowUpdating={action.action != "DISPLAY"}
                        selectTextOnEditStart
                        startEditAction={"click"}
                      />
                      <ColumnDX
                        dataField="Menu"
                        width={700}
                        allowSorting={false}
                        allowEditing={false}
                        headerCellRender={() => {
                          return renderGridHeader("Menu");
                        }}
                        cellRender={(e) => {
                          console.log(e.data.Level);
                          return (
                            <div className={"ml-" + e.data.Level * 5}>
                              {e.data.Menu}
                            </div>
                          );
                        }}
                      />
                      <ColumnDX
                        dataField="IsRead"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Display");
                        }}
                      />
                      <ColumnDX
                        dataField="IsCreate"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Create");
                        }}
                      />
                      <ColumnDX
                        dataField="IsUpdate"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Update");
                        }}
                      />
                      <ColumnDX
                        dataField="IsDelete"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Delete");
                        }}
                      />
                      <ColumnDX
                        dataField="IsPark"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Park");
                        }}
                      />
                      <ColumnDX
                        dataField="IsPost"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Post");
                        }}
                      />
                      <ColumnDX
                        dataField="IsUndo"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Undo");
                        }}
                      />
                      <ColumnDX
                        dataField="IsExport"
                        width={60}
                        allowSorting={false}
                        headerCellRender={() => {
                          return renderGridHeader("Export");
                        }}
                      />
                    </DataGridDX>
                  </div>
                </ItemTabPanelDX>
                <ItemTabPanelDX title="Assign to User">
                  <div className="p-3">
                    <DataGridDX
                      dataSource={dmyUserAssignRole}
                      keyExpr="IDMsUserAssignRole"
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
                      />
                      <ColumnDX
                        type="buttons"
                        fixed
                        fixedPosition="left"
                        width={60}
                      />
                      <ColumnDX
                        dataField="Username"
                        width={500}
                        headerCellRender={() => {
                          return renderGridHeader("Username");
                        }}
                      >
                        <LookupDataGridDX
                          dataSource={MsUser}
                          displayExpr="Username"
                          valueExpr="Username"
                          allowClearing
                        />
                      </ColumnDX>
                    </DataGridDX>
                  </div>
                </ItemTabPanelDX>
              </TabPanelDX>
            </>
          );
        }}
      />
    </>
  );
}

const dmyRole = {
  NamaRole: "DUMMY NAMA ROLE",
};

const dmyMenuPermision = [
  {
    IDMsRolePermission: Math.floor(Math.random() * 999),
    Menu: "Dashboard",
    IsCreate: false,
    IsRead: true,
    IsUpdate: false,
    IsDelete: false,
    IsPark: false,
    IsPost: false,
    IsUndo: false,
    IsExport: false,
  },
  {
    IDMsRolePermission: Math.floor(Math.random() * 999),
    Menu: "Master Data",
    IsCreate: false,
    IsRead: true,
    IsUpdate: false,
    IsDelete: false,
    IsPark: false,
    IsPost: false,
    IsUndo: false,
    IsExport: false,
  },
  {
    IDMsRolePermission: Math.floor(Math.random() * 999),
    Menu: "PT",
    IsCreate: false,
    IsRead: true,
    IsUpdate: false,
    IsDelete: false,
    IsPark: false,
    IsPost: false,
    IsUndo: false,
    IsExport: true,
  },
  {
    IDMsRolePermission: Math.floor(Math.random() * 999),
    Menu: "Unit Usaha",
    IsCreate: false,
    IsRead: true,
    IsUpdate: false,
    IsDelete: false,
    IsPark: false,
    IsPost: false,
    IsUndo: false,
    IsExport: true,
  },
  {
    IDMsRolePermission: Math.floor(Math.random() * 999),
    Menu: "Afdeling",
    IsCreate: true,
    IsRead: true,
    IsUpdate: true,
    IsDelete: false,
    IsPark: false,
    IsPost: false,
    IsUndo: false,
    IsExport: true,
  },
];

const dmyUserAssignRole = [
  {
    IDMsUserAssignRole: Math.floor(Math.random() * 9999),
    Username: "Administrator",
  },
  {
    IDMsUserAssignRole: Math.floor(Math.random() * 9999),
    Username: "Kasie TS1",
  },
  {
    IDMsUserAssignRole: Math.floor(Math.random() * 9999),
    Username: "Ahdiana",
  },
];
