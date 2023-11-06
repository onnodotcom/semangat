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
} from "devextreme-react/data-grid";
import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
  Form as FormDX,
  Item,
} from "devextreme-react/form";
import { useState } from "react";
import { MsUnitUsahaAtt } from "@/lib/MsUnitUsahaAtt";
import { SelectBox as SelectBoxDX } from "devextreme-react/select-box";
import { MsPT } from "@/lib/MsPT";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import { Popup as PopupDX, ToolbarItem } from "devextreme-react/popup";
import { Button as ButtonDX } from "devextreme-react/button";
import { Divider } from "antd";
import { MsAfdeling } from "@/lib/MsAfdeling";
import { MsUnitUsaha } from "@/lib/MsUnitUsaha";
import ZAfdelingAtt from "./ZAfdelingAtt";
import { MsAfdelingAtt } from "@/lib/MsAfdelingAtt";
import { MsOwner } from "@/lib/MsOwner";

const maskRules = {
  // a single character
  S: "$",

  // a regular expression
  H: /[0-9A-F]/,

  // an array of characters
  N: ["$", "%", "&", "@"],

  // a function
  F: (char: string) => {
    return char == char.toUpperCase();
  },
};

export default function ZAfdeling() {
  const [popUpTitle, setPopUpTitle] = useState("Maintain Unit Usaha");
  const [isDisplay, setIsDisplay] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [dmyAfdelingAttCurr, setDmyAfdelingAttCurr] = useState(MsAfdelingAtt);
  const [dmyAfdelingCurr, setDmyAfdelingCurr] = useState(Object);
  const [currUnitUsaha, setCurrUnitUsaha] = useState("");

  const doFilterDmy = (KodeAfdeling: string) => {
    setDmyAfdelingAttCurr(
      MsAfdelingAtt.filter((rec) => {
        return rec?.KodeAfdeling === KodeAfdeling;
      })
    );

    setDmyAfdelingCurr(
      MsAfdeling.filter((rec) => {
        return rec.KodeAfdeling === KodeAfdeling;
      })
    );
  };

  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <DataGridDX
        dataSource={MsAfdeling}
        keyExpr="IDMsAfdeling"
        showBorders
        wordWrapEnabled
        width={"100%"}
        onInitNewRow={() => {
          setIsDisplay(false);
          setIsEdit(false);
          setPopUpTitle("Add New Afdeling");
          doFilterDmy("E999");
        }}
        onEditingStart={(e) => {
          setIsDisplay(false);
          setIsEdit(true);
          setPopUpTitle("Change Afdeling");
          doFilterDmy(e.data.KodeAfdeling);
        }}
      >
        <ToolbarDX>
          <ItemDataGridDX name="addRowButton" location="before" />
          <ItemDataGridDX name="exportButton" location="before" />
          <ItemDataGridDX name="searchPanel" location="after" />
        </ToolbarDX>
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
        {/** */}
        <EditingDX
          mode="popup"
          useIcons
          allowUpdating
          allowAdding
          allowDeleting
        >
          <PopupDataGridDX title={popUpTitle} showTitle fullScreen />
          <FormDataGridDX>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <GroupItemFormDX colSpan={12}>
              <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX
                dataField="IDMsAfdeling"
                colSpan={2}
                visible={isEdit}
              />
              <ItemFormDX colSpan={10} visible={isEdit} />
              <ItemFormDX
                dataField="AliasUnitUsaha"
                colSpan={3}
                editorType="dxTextBox"
                editorOptions={{ readOnly: true }}
                visible={isEdit}
              />
              <ItemFormDX
                dataField="AliasUnitUsaha"
                colSpan={3}
                visible={!isEdit}
              >
                <SelectBoxDX
                  dataSource={MsUnitUsaha}
                  showClearButton
                  searchEnabled
                  displayExpr={"Alias"}
                  defaultValue={MsUnitUsaha[0].Alias}
                />
              </ItemFormDX>
              <ItemFormDX dataField="NamaAfdeling" colSpan={4} />
              <ItemFormDX colSpan={5} />
              <ItemFormDX dataField="Jenis Afdeling (Z)" colSpan={3}>
                <SelectBoxDX
                  dataSource={MsOwner}
                  showClearButton
                  searchEnabled
                  displayExpr={"Alias"}
                  defaultValue={MsOwner[0].Alias}
                />
              </ItemFormDX>
              <ItemFormDX dataField="Afdeling ($$)" colSpan={2} />
              <ItemFormDX
                colSpan={2}
                editorType="dxTextBox"
                editorOptions={{ readOnly: true, value: "EXXXAFDZ$$" }}
              />
              <ItemFormDX colSpan={4} />
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX colSpan={12}>
                <ZAfdelingAtt
                  dmyAfdelingAttCurr={dmyAfdelingAttCurr}
                  isDisplay={false}
                />
              </ItemFormDX>
            </GroupItemFormDX>
          </FormDataGridDX>
        </EditingDX>
        {/** */}
        <ColumnDX type="buttons" fixedPosition="left">
          <ButtonDataGridDX
            icon="eyeopen"
            onClick={(e) => {
              setPopUpTitle("Display Afdeling");
              doFilterDmy(e.row.data.KodeAfdeling);
              setIsDisplay(true);
            }}
          />
          <ButtonDataGridDX icon="edit" name="edit" />
          <ButtonDataGridDX icon="trash" name="delete" />
        </ColumnDX>
        <ColumnDX
          dataField="IDMsAfdeling"
          dataType="string"
          visible={false}
          allowEditing={false}
        />
        <ColumnDX
          dataField="KodeAfdeling"
          dataType="string"
          width={120}
          allowSorting
          allowFiltering
          allowSearch
          fixed
          fixedPosition="left"
          allowEditing
          defaultSortOrder="asc"
          headerCellRender={() => {
            return renderGridHeader("Kode Afdeling");
          }}
        />
        <ColumnDX
          dataField="NamaAfdeling"
          dataType="string"
          width={200}
          allowSorting
          allowFiltering
          allowSearch
          allowEditing
          headerCellRender={() => {
            return renderGridHeader("Nama Afdeling");
          }}
        />
        <ColumnDX
          dataField="AliasUnitUsaha"
          dataType="string"
          width={100}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Unit Usaha");
          }}
        />
        <ColumnDX
          dataField="KUD"
          dataType="string"
          width={230}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Nama KUD");
          }}
        />
        <ColumnDX
          dataField="NIKAsisten"
          dataType="string"
          width={130}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("NIK Asisten");
          }}
        />
        <ColumnDX
          dataField="NamaAsisten"
          dataType="string"
          width={230}
          allowSorting
          allowFiltering
          allowSearch
          headerCellRender={() => {
            return renderGridHeader("Asisten");
          }}
        />
      </DataGridDX>

      {/**display popup */}

      <PopupDX
        title={popUpTitle}
        showTitle={true}
        visible={isDisplay}
        hideOnOutsideClick={true}
        fullScreen={true}
        onHiding={() => {
          setIsDisplay(false);
        }}
        contentRender={() => {
          console.log(dmyAfdelingCurr);
          return (
            <>
              <FormDX
                formData={dmyAfdelingCurr[0]}
                defaultFormData={dmyAfdelingCurr[0]}
              >
                <GroupItemFormDX cssClass="first-group" colCount={12}>
                  <ItemFormDX colSpan={12}>
                    <div className="p-1"></div>
                  </ItemFormDX>
                  <ItemFormDX
                    dataField="IDMsAfdeling"
                    colSpan={2}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={10} visible />
                  <ItemFormDX
                    dataField="AliasUnitUsaha"
                    colSpan={3}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={9} />
                  <ItemFormDX
                    dataField="NamaAfdeling"
                    colSpan={3}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX
                    dataField="KodeAfdeling"
                    colSpan={3}
                    editorType="dxTextBox"
                    editorOptions={{ readOnly: true }}
                  />
                  <ItemFormDX colSpan={6} />

                  <ItemFormDX colSpan={12}>
                    <div className="p-2"></div>
                  </ItemFormDX>
                </GroupItemFormDX>
              </FormDX>
              <ZAfdelingAtt
                dmyAfdelingAttCurr={dmyAfdelingAttCurr}
                isDisplay={true}
              />
            </>
          );
        }}
      />
    </>
  );
}
