"use client";

import {
  Card as CardAntd,
  Col as ColAntd,
  Divider as DividerAntd,
  Row as RowAntd,
} from "antd";
import { DateBox as DateBoxAntd } from "devextreme-react/date-box";
import { DateRangeBox as DateRangeBoxDX } from "devextreme-react";
import { SelectBox as SelectBoxDX } from "devextreme-react/select-box";
import { Button as ButtonDX } from "devextreme-react/button";
import {
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  Format as FormatDX,
  GroupItem as GroupItemDX,
  GroupPanel as GroupPanelDX,
  Grouping as GroupingDX,
  Summary as SummaryDX,
  Toolbar as ToolbarDX,
  TotalItem as TotalItemDX,
} from "devextreme-react/data-grid";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import { FileUploader as FileUploaderDX } from "devextreme-react/file-uploader";

export default function Page() {
  const dmyAdjustmentInput = dmyAdjustmentPremi.filter((record) => {
    return record.Tanggal == "04 Sep 2023";
  });
  return (
    <>
      <div className="text-xs">
        <CardAntd>
          <RowAntd gutter={[1, 10]}>
            <ColAntd xs={24} md={3} lg={3}>
              <div className="text-small">Karyawan</div>
            </ColAntd>
            <ColAntd xs={24} md={13} lg={10}>
              <SelectBoxDX
                searchEnabled={true}
                showDataBeforeSearch={false}
                minSearchLength={3}
                showClearButton={true}
                dataSource={dmyKaryawan}
                searchMode="contains"
                searchExpr={["NIK", "NamaLengkap"]}
                displayExpr="Alias"
              ></SelectBoxDX>
            </ColAntd>
            <ColAntd xs={0} md={8} lg={11} />
            {/**------------------------------------------------- */}
            <ColAntd xs={24} md={3} xl={3}>
              Tanggal
            </ColAntd>
            <ColAntd xs={24} md={6} xl={4}>
              <DateBoxAntd
                showClearButton={true}
                displayFormat="dd MMMM yyyy"
              />
            </ColAntd>
            <ColAntd xs={0} md={15} xl={17} />
            {/**------------------------------------------------- */}
            <ColAntd xs={24} md={3} xl={3} />
            <ColAntd xs={24} md={6} xl={4}>
              <ButtonDX text="Filter" type="default"></ButtonDX>
            </ColAntd>
            <ColAntd xs={0} md={15} xl={17} />
          </RowAntd>
          <div className="mt-10">
            <CardAntd title="Input Adjustment Premi">
              <div className="overflow-x-auto">
                <table className="table-fixed w-full text-xs border-2">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border-2 p-2 w-[60px]">Tanggal</th>
                      <th className="border-2 p-2 w-[250px]">Kegiatan</th>
                      <th className="border-2 p-2 w-[150px]">
                        Blok/Internal Order
                      </th>
                      <th className="border-2 p-2 w-[60px]">
                        Rupiah Premi (Sitem)
                      </th>
                      <th className="border-2 p-2 w-[60px]">
                        Rupiah Premi (Adjust)
                      </th>
                      <th className="border-2 p-2 w-[200px]">Justifikasi</th>
                      <th className="border-2 p-2 w-[150px]">Attachment</th>
                      <th className="border-2 p-2 w-[60px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {dmyAdjustmentInput.map((AdjPremi) => (
                      <tr key={AdjPremi.ID}>
                        <td className=" p-1 text-center">{AdjPremi.Tanggal}</td>
                        <td className=" p-1">{AdjPremi.Kegiatan}</td>
                        <td className=" p-1">{AdjPremi.Objek}</td>
                        <td className=" p-1">{AdjPremi.PremiSistem}</td>
                        <td className=" p-1">
                          <TextBoxDX />
                        </td>
                        <td className=" p-1">
                          <TextBoxDX />
                        </td>
                        <td className=" p-1">
                          
                        </td>
                        <td className="text-center">
                          <ButtonDX
                            icon="floppy"
                            stylingMode="text"
                            hint="Simpan"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardAntd>
          </div>
        </CardAntd>
        <div className="mt-5">
          <CardAntd title="History Adjustment Premi (Bulan ini)">
            <DataGridDX
              dataSource={dmyAdjustmentPremi}
              keyExpr="ID"
              showBorders={true}
              width={"100%"}
              wordWrapEnabled={true}
            >
              <ExportDX enabled={true} />
              <GroupingDX autoExpandAll={true} allowCollapsing={false} />
              <EditingDX mode="cell" allowUpdating={true} />
              <ColumnDX
                dataField="Tanggal"
                groupIndex={0}
                allowEditing={false}
              />
              <ColumnDX
                dataField="Kegiatan"
                dataType="number"
                width={250}
                allowSorting={false}
                allowEditing={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold">
                      Kegiatan
                    </div>
                  );
                }}
              />
              <ColumnDX
                dataField="Objek"
                dataType="string"
                width={300}
                allowSorting={false}
                allowEditing={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold text-center">
                      Blok / Internal Order
                    </div>
                  );
                }}
              />
              <ColumnDX
                dataField="PremiSistem"
                dataType="number"
                width={90}
                allowSorting={false}
                allowEditing={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold text-center">
                      Rp Premi (Sistem)
                    </div>
                  );
                }}
              />
              <ColumnDX
                dataField="PremiAdjustment"
                dataType="number"
                width={90}
                allowSorting={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold text-center">
                      Rp Premi (Adjust)
                    </div>
                  );
                }}
              />
              <ColumnDX
                dataField="PremiFinal"
                dataType="number"
                width={90}
                allowSorting={false}
                allowEditing={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold text-center">
                      Rp Premi (Final)
                    </div>
                  );
                }}
              />
              <ColumnDX
                dataField="Jutstifikasi"
                dataType="string"
                width={250}
                allowSorting={false}
                allowEditing={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold">
                      Justifikasi
                    </div>
                  );
                }}
              />
              <ColumnDX
                dataField="Attachment"
                dataType="string"
                width={40}
                allowSorting={false}
                allowEditing={false}
                headerCellRender={() => {
                  return (
                    <div className="text-gray-900 text-xs font-bold">Attch</div>
                  );
                }}
              />
              <SummaryDX>
                <GroupItemDX
                  column="PremiSistem"
                  summaryType="sum"
                  showInGroupFooter={false}
                  alignByColumn={true}
                  displayFormat="{0}"
                />
                <GroupItemDX
                  column="PremiAdjustment"
                  summaryType="sum"
                  showInGroupFooter={false}
                  alignByColumn={true}
                  displayFormat="{0}"
                />
                <GroupItemDX
                  column="PremiFinal"
                  summaryType="sum"
                  showInGroupFooter={false}
                  alignByColumn={true}
                  displayFormat="{0}"
                />
                <TotalItemDX
                  column="PremiSistem"
                  summaryType="sum"
                  displayFormat="{0}"
                />
                <TotalItemDX
                  column="PremiFinal"
                  summaryType="sum"
                  displayFormat="{0}"
                />
              </SummaryDX>
            </DataGridDX>
          </CardAntd>
        </div>
      </div>
    </>
  );
}

const dmyKaryawan = [
  {
    ID: 1,
    NIK: "E00122090001010",
    NamaLengkap: "Fulan Fulan",
    Alias: "E00122090001010 - Fulan Fulan",
  },
  {
    id: 2,
    NIK: "E00123078291723",
    NamaLengkap: "Sandi Sandi",
    Alias: "E00123078291723 - Sandi Sandi",
  },
];

const dmyAdjustmentPremi = [
  {
    ID: 1,
    Tanggal: "01 Sep 2023",
    Kegiatan: "Panen (Potong Buah)",
    Objek: "E001B034",
    PremiSistem: 30000,
    PremiAdjustment: 32000,
    PremiFinal: 32000,
    Jutstifikasi: "Perbedaan topografi",
    Attachment: "pendukung.pdf",
  },
  {
    ID: 2,
    Tanggal: "01 Sep 2023",
    Kegiatan: "Panen (Potong Buah)",
    Objek: "E001B033",
    PremiSistem: 20000,
    PremiAdjustment: "",
    PremiFinal: 20000,
    Jutstifikasi: "Perbedaan topografi",
    Attachment: "pendukung.pdf",
  },
  {
    ID: 3,
    Tanggal: "02 Sep 2023",
    Kegiatan: "Panen (Potong Buah)",
    Objek: "E001X001",
    PremiSistem: "",
    PremiAdjustment: "",
    PremiFinal: "",
    Jutstifikasi: "",
    Attachment: "",
  },
  {
    ID: 4,
    Tanggal: "04 Sep 2023",
    Kegiatan: "Panen (Potong Buah)",
    Objek: "E001H020",
    PremiSistem: 60000,
    PremiAdjustment: "",
    PremiFinal: 60000,
    Jutstifikasi: "",
    Attachment: "",
  },
  {
    ID: 5,
    Tanggal: "04 Sep 2023",
    Kegiatan: "Kutip Brondolan di Piringan",
    Objek: "E001H020",
    PremiSistem: 10000,
    PremiAdjustment: "",
    Jutstifikasi: "",
    Attachment: "",
  },
];
