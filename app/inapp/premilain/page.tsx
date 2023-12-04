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
import { useEffect, useState } from "react";
import { dmyKaryawanTanpaAnggota } from "@/lib/dmyKaryawanTanpaAnggota";
import { DropDownBox as DropDownBoxDX } from "devextreme-react";
import { List as ListDX } from "devextreme-react/list";
import { dmyPengaturanPeriode } from "@/lib/dmyPengaturanPeriode";
import { LinkOutlined } from "@ant-design/icons";
import { DateBox as DateBoxDX } from "devextreme-react/date-box";
import { RpPremiLain } from "@/lib/RpPremiLain";
import { locale } from "devextreme/localization";

const dmyDefault = {
  KodeUnitUsaha: "E001 - TSE (sesuai pilihan unit usaha diatas)",
  MaxRows: 500,
};

export default function Page() {
  const [selectedKelompok, setSelectedKelompok] = useState<string>();
  const [listCurrentAnggota, setListCurrentAnggota] = useState<any>();
  const [dateNow, setDateNow] = useState<Date>();
  const [selectedRpPremiLain, setSelectedRpPremiLain] = useState<any>();

  useEffect(() => {
    setDateNow(new Date());
    locale("id");
  }, []);

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  const handlerSelectKelompok = (key: string | undefined) => {
    const x = RpPremiLain.filter((row) => {
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
      <RowAntd style={{ marginBottom: 4 }}>
        <ColAntd xl={8}>
          <FormDX defaultFormData={dmyDefault}>
            <GroupItemFormDX colCount={12}>
              <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
              <ItemFormDX dataField="Afdeling" colSpan={6}>
                <SelectBoxDX
                  dataSource={MsAfdeling}
                  valueExpr={"KodeAfdeling"}
                  displayExpr={"NamaAfdeling"}
                  defaultValue={MsAfdeling[0].KodeAfdeling}
                />
              </ItemFormDX>
              <ItemFormDX dataField="Tanggal" colSpan={6}>
                <DateBoxDX
                  defaultValue={dateNow}
                  inputAttr={{ "aria-label": "Date" }}
                  type="date"
                  displayFormat="dd/MM/yyyy"
                />
              </ItemFormDX>
            </GroupItemFormDX>
          </FormDX>
        </ColAntd>
      </RowAntd>
      <RowAntd gutter={[3, 0]}>
        <ColAntd xxl={7} xl={7}>
          <CardAntd>
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
              height={"77.5vh"}
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
            <DataGridDX
              dataSource={listCurrentAnggota}
              style={{ marginTop: -0 }}
              keyExpr="IDTrAnggotaMandoran"
              showBorders
              loadPanel={{ enabled: false }}
              wordWrapEnabled
              width={"100%"}
              height={"79vh"}
              onInitNewRow={() => {
                // setIsDisplay(false);
                // setIsEdit(false);
                // setPopUpTitle("Add New Afdeling");
                // doFilterDmy("E999");
              }}
              onEditingStart={(e) => {
                console.log(e);
                //setIsDisplay(false);
                //setIsEdit(true);
                //setPopUpTitle("Change Afdeling");
                //doFilterDmy(e.data.KodeAfdeling);
              }}
            >
              <EditingDX
                mode="row"
                useIcons
                allowUpdating
                allowAdding
                allowDeleting
              />
              <ColumnDX type="buttons" fixed />
              <ColumnDX
                dataField="Karyawan"
                width={150}
                headerCellRender={() => {
                  return renderGridHeader("Karyawan");
                }}
              />
              <ColumnDX
                dataField="RupiahPremi"
                width={70}
                dataType="number"
                format="fixedPoint"
                headerCellRender={() => {
                  return renderGridHeader("Rp Premi Lain");
                }}
              />
              <ColumnDX
                dataField="Kegiatan"
                width={120}
                headerCellRender={() => {
                  return renderGridHeader("Kegiatan");
                }}
              />
              <ColumnDX
                dataField="KegiatanDetail"
                width={150}
                headerCellRender={() => {
                  return renderGridHeader("Kegiatan Detail");
                }}
              />
              <ColumnDX
                dataField="Blok"
                width={150}
                headerCellRender={() => {
                  return renderGridHeader("Blok");
                }}
              />
              <ColumnDX
                caption="Output 1"
                alignment="center"
                headerCellRender={() => {
                  return renderGridHeader("Output 1");
                }}
              >
                <ColumnDX
                  dataField="Output01"
                  width={80}
                  headerCellRender={() => {
                    return renderGridHeader("Jml");
                  }}
                />
                <ColumnDX
                  dataField="KetOutput01"
                  width={60}
                  allowEditing={false}
                  headerCellRender={() => {
                    return renderGridHeader("Sat");
                  }}
                />
              </ColumnDX>
              <ColumnDX
                caption="Output 2"
                alignment="center"
                headerCellRender={() => {
                  //console.log(e);
                  return renderGridHeader("Output 2");
                }}
              >
                <ColumnDX
                  dataField="Output02"
                  width={80}
                  headerCellRender={() => {
                    return renderGridHeader("Jml");
                  }}
                />
                <ColumnDX
                  dataField="KetOutput02"
                  width={60}
                  allowEditing={false}
                  headerCellRender={() => {
                    return renderGridHeader("Sat");
                  }}
                />
              </ColumnDX>
              <ColumnDX
                caption="Output 3"
                alignment="center"
                headerCellRender={() => {
                  return renderGridHeader("Output 3");
                }}
              >
                <ColumnDX
                  dataField="Output03"
                  width={80}
                  headerCellRender={() => {
                    return renderGridHeader("Jml");
                  }}
                />
                <ColumnDX
                  dataField="KetOutput03"
                  width={60}
                  allowEditing={false}
                  headerCellRender={() => {
                    return renderGridHeader("Sat");
                  }}
                />
              </ColumnDX>
              <ColumnDX
                dataField="x"
                allowEditing={false}
                allowFiltering={false}
                allowSorting={false}
                headerCellRender={() => {
                  return renderGridHeader("");
                }}
              />
            </DataGridDX>
          </CardAntd>
        </ColAntd>
      </RowAntd>
    </>
  );
}
