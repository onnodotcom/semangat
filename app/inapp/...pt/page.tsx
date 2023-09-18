"use client";

import { MsPT } from "@/lib/MsPT";
import { Card as CardAntd } from "antd";
import { Button as ButtonDX } from "devextreme-react/button";
import {
  Column as ColumnDataGridDX,
  DataGrid as DataGridDX,
  Export as ExportDataGridDX,
  FilterRow as FilterRowDataGridDX,
  Item as ItemDataGridDX,
  Pager as PagerDataGridDX,
  Paging as PagingDataGridDX,
  SearchPanel as SearchPanelDataGridDX,
  Selection as SelectionDataGridDX,
  Toolbar as ToolbarDataGridDX,
} from "devextreme-react/data-grid";
import {
  Item as ItemTabPanelDX,
  TabPanel as TabPanelDX,
} from "devextreme-react/tab-panel";
import ZPTDataGrid from "./ZPTDataGrid";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd
          style={{
            borderRadius: "10px",
            marginRight: "24px",
            boxShadow: "1px 2px 15px 1px rgba(208, 216, 243, 0.6)",
          }}
        >
          <ZPTDataGrid />
        </CardAntd>
      </div>
    </>
  );
}
