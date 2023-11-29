"use client";
import { MsAfdeling } from "@/lib/MsAfdeling";
import {
  Button as ButtonAntd,
  Card as CardAntd,
  Col as ColAntd,
  Row as RowAntd,
} from "antd";
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
import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
import { TrAnggotaMandoran } from "@/lib/TrAnggotaMandoran";
import { useState } from "react";
import { dmyKaryawanTanpaAnggota } from "@/lib/dmyKaryawanTanpaAnggota";
import { DropDownBox as DropDownBoxDX } from "devextreme-react";
import { List as ListDX } from "devextreme-react/list";
import { dmyPengaturanPeriode } from "@/lib/dmyPengaturanPeriode";
import { LinkOutlined } from "@ant-design/icons";

const dmyDefault = {
  KodeUnitUsaha: "E001 - TSE (sesuai pilihan unit usaha diatas)",
  MaxRows: 500,
};

export default function Page() {
  const [selectedKelompok, setSelectedKelompok] = useState<string>();
  const [listCurrentAnggota, setListCurrentAnggota] = useState<any>();

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  const handlerSelectKelompok = (key: string | undefined) => {
    const x = TrAnggotaMandoran.filter((row) => {
      return row.KodeKelompokMandor === key;
    });

    const y = MsKodeMandoran.filter((row) => {
      return row.KodeKelompokMandor === key;
    });

    //console.log(y);
    setSelectedKelompok(y[0]?.Desc);

    setListCurrentAnggota(x);
  };

  return (
    <>
      <RowAntd style={{ marginBottom: 2 }}>
        <ColAntd xl={6}>
          <FormDX defaultFormData={dmyPengaturanPeriode[0]}>
            <GroupItemFormDX colCount={12}>
              <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
              <ItemFormDX dataField="Periode" colSpan={12}>
                <SelectBoxDX
                  dataSource={dmyPengaturanPeriode}
                  valueExpr={"BulanTahun"}
                  displayExpr={"BulanTahun"}
                  defaultValue={dmyPengaturanPeriode[0].BulanTahun}
                />
              </ItemFormDX>
            </GroupItemFormDX>
          </FormDX>
        </ColAntd>
      </RowAntd>
      <RowAntd gutter={[3, 0]}>
        <ColAntd xxl={7} xl={7}>
          <CardAntd>
            <FormDX defaultFormData={dmyDefault}>
              <GroupItemFormDX colCount={12}>
                <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
                <ItemFormDX dataField="Afdeling" colSpan={12}>
                  <SelectBoxDX
                    dataSource={MsAfdeling}
                    valueExpr={"KodeAfdeling"}
                    displayExpr={"NamaAfdeling"}
                    defaultValue={MsAfdeling[0].KodeAfdeling}
                  />
                </ItemFormDX>
              </GroupItemFormDX>
            </FormDX>
            <DataGridDX
              style={{ marginTop: 10 }}
              dataSource={MsKodeMandoran}
              keyExpr="IDMsKodeMandoran"
              showBorders
              focusedRowEnabled
              onFocusedRowChanged={(e) => {
                if (e.row?.rowType === "data") {
                  handlerSelectKelompok(e.row?.data.KodeKelompokMandor);
                } else {
                  handlerSelectKelompok(undefined);
                }
              }}
              wordWrapEnabled
              width={"100%"}
              height={"74vh"}
              onInitNewRow={() => {
                // setIsDisplay(false);
                // setIsEdit(false);
                // setPopUpTitle("Add New Afdeling");
                // doFilterDmy("E999");
              }}
              onEditingStart={(e) => {
                //setIsDisplay(false);
                //setIsEdit(true);
                //setPopUpTitle("Change Afdeling");
                //doFilterDmy(e.data.KodeAfdeling);
              }}
            >
              <SelectionDataGridDX
                mode="single"
                selectAllMode="allPages"
                showCheckBoxesMode="always"
              />
              <SearchPanelDX visible width={240} />
              <ColumnDX
                dataField="KelompokMandor"
                groupIndex={0}
                allowSorting={false}
              />
              <ColumnDX
                sortOrder="asc"
                dataField="Desc"
                width={200}
                headerCellRender={() => {
                  return renderGridHeader("Kode Mandoran");
                }}
              />
            </DataGridDX>
          </CardAntd>
        </ColAntd>
        <ColAntd xxl={17} xl={17} style={{ marginLeft: -0 }}>
          <CardAntd>
            <div className="text-xs font-semibold mb-1 -mt-3">
              Anggota kelompok {selectedKelompok} :
            </div>
            <DataGridDX
              dataSource={listCurrentAnggota}
              style={{ marginTop: -0 }}
              keyExpr="IDTrAnggotaMandoran"
              showBorders
              loadPanel={{ enabled: false }}
              wordWrapEnabled
              width={"100%"}
              height={"46vh"}
              onInitNewRow={() => {
                // setIsDisplay(false);
                // setIsEdit(false);
                // setPopUpTitle("Add New Afdeling");
                // doFilterDmy("E999");
              }}
              onEditingStart={(e) => {
                //setIsDisplay(false);
                //setIsEdit(true);
                //setPopUpTitle("Change Afdeling");
                //doFilterDmy(e.data.KodeAfdeling);
              }}
            >
              <EditingDX mode="batch" useIcons allowUpdating />
              <ColumnDX
                dataField="Karyawan"
                width={300}
                allowSorting={false}
                headerCellRender={() => {
                  return renderGridHeader("Karyawan");
                }}
                allowEditing={false}
              />
              <ColumnDX
                dataField="Jabatan"
                width={200}
                allowSorting={false}
                headerCellRender={() => {
                  return renderGridHeader("Jabatan");
                }}
              />
              <ColumnDX
                dataField="Level"
                width={80}
                allowSorting={false}
                headerCellRender={() => {
                  return renderGridHeader("");
                }}
              />
              <ColumnDX
                dataField="x"
                width={50}
                allowSorting={false}
                headerCellRender={() => {
                  return renderGridHeader("");
                }}
              />
            </DataGridDX>
          </CardAntd>
          <CardAntd style={{ marginTop: 2 }}>
            <div className="text-xs font-semibold mb-1 -mt-3">
              Karyawan tanpa kelompok:
              <ButtonAntd
                size="small"
                icon={<LinkOutlined />}
                type="text"
                title="Input karyawan tanpa kelompok"
              />
            </div>
            <DataGridDX
              dataSource={dmyKaryawanTanpaAnggota}
              keyExpr="ID"
              showBorders
              wordWrapEnabled
              width={"100%"}
              height={"22.5vh"}
              onInitNewRow={() => {
                // setIsDisplay(false);
                // setIsEdit(false);
                // setPopUpTitle("Add New Afdeling");
                // doFilterDmy("E999");
              }}
              onEditingStart={(e) => {
                //setIsDisplay(false);
                //setIsEdit(true);
                //setPopUpTitle("Change Afdeling");
                //doFilterDmy(e.data.KodeAfdeling);
              }}
            >
              <ColumnDX
                dataField="Karyawan"
                width={380}
                allowSorting
                headerCellRender={() => {
                  return renderGridHeader("Karyawan");
                }}
                allowEditing={false}
              />
              <ColumnDX
                dataField="Jabatan"
                allowSorting
                width={200}
                headerCellRender={() => {
                  return renderGridHeader("Jabatan");
                }}
                allowEditing={false}
              />
            </DataGridDX>
          </CardAntd>
        </ColAntd>
      </RowAntd>
    </>
  );
}

/*
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
                      //setDmyBlok(Msblok);
                    }}
                  />
                </ItemFormDX>
                <ItemFormDX colSpan={10} />
              </GroupItemFormDX>
            </FormDX>
*/
