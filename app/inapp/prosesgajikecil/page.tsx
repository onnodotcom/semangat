"use client";

import {
  Button as ButtonAntd,
  Card as CardAntd,
  Col as ColAntd,
  Divider,
  Row as RowAntd,
} from "antd";
import { Button as ButtonDX } from "devextreme-react/button";
import { LoadIndicator as LoadIndicatorDX } from "devextreme-react/load-indicator";
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
  GroupPanel as GroupPanelDataGridDX,
  Selection as SelectionDataGridDX,
} from "devextreme-react/data-grid";
import { MsKodeMandoran } from "@/lib/MsKodeMandoran";
import { MsAfdeling } from "@/lib/MsAfdeling";
import { useCallback, useEffect, useState } from "react";
import delay from "delay";
import { dmyLogProsesGajiKecil } from "@/lib/dmyLogProsesGajiKecil";
import { SelectionChangedEvent } from "devextreme/ui/data_grid";

export default function Page() {
  const [listAfdeling, setListAfdeling] = useState<any>();
  const [listSelectedAfd, setListSelectedAfd] = useState<any>();
  const [isProcess, setIsProcess] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  const handlerProsesGajiKecil = async () => {
    console.log({ listSelectedAfd });
    if (listSelectedAfd?.length === 0 || !listSelectedAfd) {
      alert("Afdeling harus ada yang dipilih!");
    } else {
      setIsDone(false);
      setIsProcess(true);
      await delay(5000);
      setIsProcess(false);
      setIsDone(true);
    }
  };

  const handlerSelectionChanged = (e: SelectionChangedEvent) => {

    const x = MsAfdeling.filter((row) => {
      return row.IDMsAfdeling === e.currentSelectedRowKeys[0];
    });
    /*
    if (x[0]?.KodeAfdeling === "E001AFDI01") {
      e.currentDeselectedRowKeys.push(x[0].IDMsAfdeling);
      e.selectedRowKeys.pop(x[0]?.IDMsAfdeling);
    }
    console.log(e);
    */
    setListSelectedAfd(e.selectedRowKeys);
  };
/*
  const onSelectionChanged = useCallback((e: SelectionChangedEvent) => {
    const deselectRowKeys: number[] = [];
    e.selectedRowsData.forEach((item) => {
      if (!isSelectable(item))
        deselectRowKeys.push(e.component.keyOf(item));
    });
    if (deselectRowKeys.length) {
      e.component.deselectRows(deselectRowKeys);
    }

    selectionRef.current.checkBoxUpdating = true;
    const selectAllCheckBox = selectionRef.current.selectAllCheckBox;
    selectAllCheckBox?.option("value", isSelectAll(e.component));
    selectionRef.current.checkBoxUpdating = false;
  }, [])
  */

  useEffect(() => {
    const x = MsAfdeling.filter((row) => {
      return row.KodeUnitUsaha === "E001";
    });
    setListAfdeling(x);
  }, []);

  return (
    <>
      <div className="ml-1 mb-1 text-sm">
        Proses Gaji Kecil : 1 - 15 Nov 2023
      </div>

      <RowAntd gutter={[3, 0]}>
        <ColAntd xxl={7} xl={7}>
          <CardAntd>
            <ButtonDX
              type="default"
              icon="preferences"
              text="Proses Gaji Kecil"
              height={30}
              width={150}
              onClick={() => {
                handlerProsesGajiKecil();
              }}
              disabled={isProcess}
            />
            <DataGridDX
              style={{ marginTop: 10 }}
              dataSource={listAfdeling}
              keyExpr="IDMsAfdeling"
              showBorders
              focusedRowEnabled
              onFocusedRowChanged={() => {}}
              wordWrapEnabled
              width={"100%"}
              height={"70vh"}
              onInitNewRow={() => {}}
              onEditingStart={() => {}}
              onSelectionChanged={(e)=>{handlerSelectionChanged(e)}}
              remoteOperations={false}
              disabled={isProcess}
            >
              <SelectionDataGridDX
                mode="multiple"
                selectAllMode="allPages"
                showCheckBoxesMode="always"
              />
              <ColumnDX
                dataField="NamaAfdeling"
                allowSorting={false}
                headerCellRender={() => {
                  return renderGridHeader("Nama Afdeling");
                }}
              />
            </DataGridDX>
          </CardAntd>
        </ColAntd>
        <ColAntd xxl={17} xl={17}>
          <CardAntd>
            <LoadIndicatorDX height={40} width={40} visible={isProcess} />
            <div hidden={!isDone}>
              <div className="text-sm font-semibold">Log Proses:</div>
              <DataGridDX
                style={{ marginTop: 10 }}
                dataSource={dmyLogProsesGajiKecil}
                keyExpr="ID"
                showBorders
                focusedRowEnabled
                wordWrapEnabled
                width={"100%"}
                height={"71.5vh"}
              >
                <SearchPanelDX visible width={240} />
                <ExportDX enabled />
                <FilterRowDX visible applyFilter={"auto"} />
                <ColumnDX
                  dataField="NamaAfdeling"
                  headerCellRender={() => {
                    return renderGridHeader("Nama Afdeling");
                  }}
                  width={150}
                  groupIndex={0}
                />
                <ColumnDX
                  dataField="KodeKelompokMandor"
                  headerCellRender={() => {
                    return renderGridHeader("Kelompok Mandor");
                  }}
                  width={200}
                />
                <ColumnDX
                  dataField="Log"
                  headerCellRender={() => {
                    return renderGridHeader("Status");
                  }}
                  width={70}
                />
                <ColumnDX
                  dataField="Message"
                  headerCellRender={() => {
                    return renderGridHeader("Pesan");
                  }}
                />
              </DataGridDX>
            </div>
          </CardAntd>
        </ColAntd>
      </RowAntd>
    </>
  );
}
