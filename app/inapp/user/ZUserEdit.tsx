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
import { MsUserAssignScope } from "@/lib/MsUserAssignScope";
import { MsScope } from "@/lib/MsScope";
import { MsRole } from "@/lib/MsRoles";

export default function ZUserEdit({
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
                readOnly={
                  action.action === "DISPLAY" || action.action === "DELETE"
                }
              >
                <GroupItemFormDX colCount={12}>
                  <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
                  <ItemFormDX
                    dataField="Username"
                    colSpan={6}
                    editorType="dxTextBox"
                  />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX
                    dataField="NIK"
                    colSpan={2}
                    editorType="dxTextBox"
                  />
                  <ItemFormDX
                    dataField="Email"
                    colSpan={4}
                    editorType="dxTextBox"
                  />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX
                    dataField="Nama Depan"
                    colSpan={3}
                    editorType="dxTextBox"
                  />
                  <ItemFormDX
                    dataField="Nama Belakang"
                    colSpan={3}
                    editorType="dxTextBox"
                  />
                  <ItemFormDX colSpan={6} />
                  <ItemFormDX colSpan={4} visible={action.action != "DISPLAY"}>
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
                      visible={action.action === "UPDATE"}
                    />
                    <ButtonDX
                      text="Delete"
                      icon="trash"
                      height={30}
                      width={130}
                      type="default"
                      visible={action.action === "DELETE"}
                    />{" "}
                    <ButtonDX
                      icon="key"
                      hint="Reset Password"
                      height={30}
                      width={30}
                      visible={action.action === "UPDATE"}
                    />
                  </ItemFormDX>
                </GroupItemFormDX>
              </FormDX>
              <div className="p-5"></div>
              <TabPanelDX>
                <ItemTabPanelDX title="Assign to Role">
                  <div className="p-3">
                    <DataGridDX
                      dataSource={MsUserAssignRole}
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
                        allowDeleting={action.action === "UPDATE"}
                        allowAdding={action.action === "UPDATE"}
                      />
                      <ColumnDX
                        type="buttons"
                        fixed
                        fixedPosition="left"
                        width={60}
                      />
                      <ColumnDX
                        dataField="NamaRole"
                        width={500}
                        headerCellRender={() => {
                          return renderGridHeader("Nama Role");
                        }}
                      >
                        <LookupDataGridDX
                          dataSource={MsRole}
                          displayExpr="NamaRole"
                          valueExpr="NamaRole"
                          allowClearing
                        />
                      </ColumnDX>
                    </DataGridDX>
                  </div>
                </ItemTabPanelDX>
                <ItemTabPanelDX title="Assign to Scope">
                  <div className="p-3">
                    <DataGridDX
                      dataSource={MsUserAssignScope}
                      keyExpr="IDMsUserAssignScope"
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
                        allowDeleting={action.action === "UPDATE"}
                        allowAdding={action.action === "UPDATE"}
                      />
                      <ColumnDX
                        type="buttons"
                        fixed
                        fixedPosition="left"
                        width={60}
                      />
                      <ColumnDX
                        dataField="NamaScope"
                        width={500}
                        headerCellRender={() => {
                          return renderGridHeader("Nama Scope");
                        }}
                      >
                        <LookupDataGridDX
                          dataSource={MsScope}
                          displayExpr="NamaScope"
                          valueExpr="NamaScope"
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
