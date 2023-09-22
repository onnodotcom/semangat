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
import {
  TreeList as TreeListDX,
  Column as ColumnTreeListDX,
  Search as SearchTreeListDX,
  SearchPanel as SearchPanelTreeListDX,
} from "devextreme-react/tree-list";
import { HierarchyMenu } from "@/lib/HierarchyMenu";

export default function ZRolePermissionAdd({
  setIsPopupAdd,
  setAction,
  isPopupAdd,
  action,
}: any) {
  const [isSaveDone, setIsSaveDone] = useState(false);

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };
  return (
    <>
      <PopupDX
        visible={isPopupAdd}
        hideOnOutsideClick={true}
        fullScreen={true}
        title={action.title}
        onHiding={() => {
          setIsPopupAdd(false);
          setIsSaveDone(false);
        }}
        contentRender={() => {
          return (
            <>
              <FormDX>
                <GroupItemFormDX colCount={12}>
                  <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
                  <ItemFormDX
                    dataField="NamaRole"
                    colSpan={4}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: isSaveDone }}
                  />
                  <ItemFormDX colSpan={8} />
                  <ItemFormDX colSpan={2} disabled={isSaveDone}>
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
                      onClick={() => {
                        setIsSaveDone(true);
                      }}
                    />
                  </ItemFormDX>
                </GroupItemFormDX>
              </FormDX>
              <div className="p-5"></div>
              <TabPanelDX disabled={!isSaveDone}>
                <ItemTabPanelDX title="Menu Permission">
                  <div className="p-3">
                    <DataGridDX
                      dataSource={MsMenu}
                      keyExpr="IDMsMenu"
                      showBorders
                      wordWrapEnabled
                      focusedRowEnabled
                    >
                      <SearchPanelDX visible width={240} />
                      <EditingDX
                        mode="batch"
                        useIcons
                        allowUpdating
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
              </TabPanelDX>
              {/**
              <div className="p-3"></div>
              <TreeListDX
                id="id"
                dataSource={HierarchyMenu}
                autoExpandAll
                showRowLines
                showBorders
                columnAutoWidth
                itemsExpr="items"
                dataStructure="tree"
              >
                <SearchPanelTreeListDX visible width={240} />
                <ColumnTreeListDX dataField="text" caption="Menu" />
              </TreeListDX>
               */}
            </>
          );
        }}
      />
    </>
  );
}
