import { MsPT } from "@/lib/MsPT";
import { Button as ButtonDX } from "devextreme-react/button";
import {
  Column as ColumnDataGridDX,
  DataGrid as DataGridDX,
  Editing as EditingDataGridDX,
  Export as ExportDataGRidDX,
  FilterRow as FilterRowDataGridDX,
  Item as ItemDataGridDX,
  Pager as PagerDataGRidDX,
  Paging as PagingDataGridDX,
  SearchPanel as SearchPanelDataGridDX,
  Toolbar as ToolbarDataGridDX,
} from "devextreme-react/data-grid";
import { useState } from "react";
import ZPTPopupAdd from "./ZPTPopupAdd";

export default function ZPTDataGrid() {
  const [isShowAddPopup, setIsShowAddPopup] = useState(false);

  const [isDisplayPT, setIsDisplayPT] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState("Maintain PT");
  const [isEditPT, setIsEditPT] = useState(false);
  const [dmyPTAttCurr, setDmyPTAttCurr] = useState(MsPT);
  const [dmyPTCurr, setDmyPTCurr] = useState(Object);

  var gridMsPTRef: DataGridDX<
    {
      IDMsPT: number;
      KodePT: number;
      NamaPT: string;
      Alias: string;
      Alamat: string;
      NPWPPT: string;
      NamaPemotong: string;
      NPWPPemotong: string;
    },
    any
  > | null;

  const doFilterDmy = (kodePT: number) => {
    setDmyPTAttCurr(
      MsPT.filter((rec) => {
        return rec.KodePT === kodePT;
      })
    );

    setDmyPTCurr(
      MsPT.filter((rec) => {
        return rec.KodePT === kodePT;
      })
    );
  };

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <DataGridDX
        dataSource={MsPT}
        keyExpr="IDMsPT"
        ref={(ref) => {
          gridMsPTRef = ref;
        }}
        showBorders
        wordWrapEnabled
        width={"100%"}
        onInitNewRow={() => {
          setIsEditPT(false);
          setPopUpTitle("Add New PT");
          doFilterDmy(1000);
        }}
        onEditingStart={(e) => {
          setIsEditPT(true);
          setPopUpTitle("Change PT");
          doFilterDmy(e.data.KodePT);
        }}
      >
        <ToolbarDataGridDX>
          <ItemDataGridDX location="before">
            <ZPTPopupAdd />
          </ItemDataGridDX>
          <ItemDataGridDX location="before">
            <ButtonDX icon="exportxlsx" hint="Export to Excel" type="default" />
          </ItemDataGridDX>
          <ItemDataGridDX name="searchPanel" location="after" />
        </ToolbarDataGridDX>
        <SearchPanelDataGridDX visible width={240} />
        <ExportDataGRidDX enabled />
        <FilterRowDataGridDX visible applyFilter={"auto"} />
        <PagingDataGridDX />
        <PagerDataGRidDX
          visible
          displayMode={"compact"}
          showPageSizeSelector
          showInfo
          showNavigationButtons
        />

        {/**kolom yang muncul di grid */}
        <ColumnDataGridDX
          type="buttons"
          width={100}
          allowFiltering={false}
          fixed
          fixedPosition="left"
        />
        <ColumnDataGridDX
          dataField="Alias"
          width={60}
          fixed
          fixedPosition="left"
          headerCellRender={() => {
            return renderGridHeader("Alias");
          }}
        />
        <ColumnDataGridDX
          dataField="NamaPT"
          width={250}
          headerCellRender={() => {
            return renderGridHeader("Nama PT");
          }}
        />
        <ColumnDataGridDX
          dataField="KodePT"
          width={75}
          headerCellRender={() => {
            return renderGridHeader("Kode PT");
          }}
        />
        <ColumnDataGridDX
          dataField="Alamat"
          width={450}
          headerCellRender={() => {
            return renderGridHeader("Alamat");
          }}
        />
        <ColumnDataGridDX
          dataField="NPWPPT"
          width={130}
          headerCellRender={() => {
            return renderGridHeader("NPWP PT");
          }}
        />
        <ColumnDataGridDX
          dataField="NamaPemotong"
          width={200}
          headerCellRender={() => {
            return renderGridHeader("Nama Pemotong");
          }}
        />
        <ColumnDataGridDX
          dataField="NPWPPemotong"
          width={130}
          headerCellRender={() => {
            return renderGridHeader("NPWP Pemotong");
          }}
        />
      </DataGridDX>
    </>
  );
}
