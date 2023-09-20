"use client";

import { MsKoperasi } from "@/lib/MsKoperasi";
import { Card as CardAntd } from "antd";
import {
  Button as ButtonDataGridDX,
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  FilterRow as FilterRowDX,
  Form as FormDataGridDX,
  Item as ItemDataGridDX,
  Lookup as LookupDataGRidDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";

export default function ZAfdelingAtt({
  dmyAfdelingAttCurr: dmyAfdelingAttCurr,
  isDisplay,
}: any) {
  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <CardAntd>
        <DataGridDX
          dataSource={dmyAfdelingAttCurr}
          keyExpr="IDMsAfdelingAtribut"
          showBorders
          wordWrapEnabled
          width={"100%"}
        >
          <EditingDX
            mode="row"
            allowUpdating={!isDisplay}
            allowAdding={!isDisplay}
            allowDeleting={!isDisplay}
            useIcons
          />
          <SearchPanelDX visible width={240} />
          <ExportDX enabled />
          <FilterRowDX visible applyFilter={"auto"} />
          <PagingDX defaultPageSize={50} />
          <PagerDX
            visible
            displayMode={"compact"}
            showPageSizeSelector
            showInfo
            showNavigationButtons
          />
          {/**start kolom di grid */}

          <ColumnDX
            type="buttons"
            fixedPosition="left"
            fixed
            visible={!isDisplay}
          >
            <ButtonDataGridDX name="edit" icon="edit" />
            <ButtonDataGridDX name="delete" icon="trash" />
          </ColumnDX>
          <ColumnDX
            dataField="IsCurrentlyUse"
            width={80}
            headerCellRender={() => {
              return renderGridHeader("Currently Use");
            }}
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
            dataField="NIKAsisten"
            width={100}
            headerCellRender={() => {
              return renderGridHeader("NIK Asisten");
            }}
          />
          <ColumnDX
            dataField="Asisten"
            width={250}
            headerCellRender={() => {
              return renderGridHeader("Asisten");
            }}
          />
          <ColumnDX
            dataField="Koperasi"
            width={250}
            headerCellRender={() => {
              return renderGridHeader("Koperasi");
            }}
          >
            <LookupDataGRidDX
              dataSource={MsKoperasi}
              valueExpr="Koperasi"
              displayExpr="Koperasi"
            />
          </ColumnDX>
          {/**end kolom di grid */}
        </DataGridDX>
      </CardAntd>
    </>
  );
}
