import { Button as ButtonDX } from "devextreme-react/button";
import { Card as CardAntd } from "antd";
import {
  ColCountByScreen as ColCountByScreenFromDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
  SimpleItem as SimpleItemFromDX,
  Form as FormDX,
  Label as LabelFormDX,
} from "devextreme-react/form";
import {
  Button as ButtonDataGridDX,
  Column as ColumnDX,
  DataGrid as DataGridDX,
  Editing as EditingDX,
  Export as ExportDX,
  FilterRow as FilterRowDX,
  Form as FormDataGridDX,
  GroupPanel as GroupPanelDataGridDX,
  Grouping,
  Item as ItemDataGridDX,
  Pager as PagerDX,
  Paging as PagingDX,
  Popup as PopupDataGridDX,
  Scrolling as ScrollingDataGRidDX,
  SearchPanel as SearchPanelDX,
  Toolbar as ToolbarDX,
} from "devextreme-react/data-grid";
import { MsUserScope } from "@/lib/MsUserScope";
import { useState } from "react";
import ZUserScopeAdd from "./ZUserAdd";
import ZUserScopeEdit from "./ZUserEdit";
import { MsUserRoleScope } from "@/lib/MsUserRoleScope";

export default function ZUserIndex() {
  const [isPopupAdd, setIsPopupAdd] = useState(false);
  const [isPopupEdit, setIsPopupEdit] = useState(false);
  const [action, setAction] = useState({ action: "", title: "" });
  const [dmyUserRoleScope, setDmyUserRoleScope] = useState(Array);

  return (
    <>
      <ButtonDX
        type="default"
        icon="add"
        text="Add New User"
        height={30}
        width={170}
        onClick={() => {
          setAction({ action: "CREATE", title: "Add New User" });
          setIsPopupAdd(true);
        }}
      />
      <div className="p-2" />
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <FormDX formData={dmyDefault}>
          <GroupItemFormDX colCount={12}>
            <ColCountByScreenFromDX xs={1} sm={1} md={12} lg={12} />
            <ItemFormDX dataField="Username" colSpan={4} />
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="NamaRole" colSpan={4} />
            <ItemFormDX colSpan={8} />
            <ItemFormDX dataField="NamaScope" colSpan={4} />
            <ItemFormDX colSpan={8} />
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
                  setDmyUserRoleScope(MsUserRoleScope);
                }}
              />
            </ItemFormDX>
            <ItemFormDX colSpan={10} />
          </GroupItemFormDX>
        </FormDX>
      </CardAntd>
      <div className="p-3"></div>
      <CardAntd style={{ borderColor: "#dbdbdb" }}>
        <ZGridUserScope
          dmyData={dmyUserRoleScope}
          setIsPopupAdd={setIsPopupAdd}
          setIsPopupEdit={setIsPopupEdit}
          setAction={setAction}
        />
      </CardAntd>
      <ZUserScopeAdd
        setIsPopupAdd={setIsPopupAdd}
        setAction={setAction}
        isPopupAdd={isPopupAdd}
        action={action}
      />
      <ZUserScopeEdit
        setIsPopupEdit={setIsPopupEdit}
        setAction={setAction}
        isPopupEdit={isPopupEdit}
        action={action}
      />
    </>
  );
}

function ZGridUserScope({ dmyData, setIsPopupEdit, setAction }: any) {
  const [groupBy, setGroupBy] = useState<{
    scope: number | undefined;
    username: number | undefined;
    role: number | undefined;
  }>({ scope: undefined, username: 0, role: undefined });
  const renderGridHeader = (title: string) => {
    return <div className="text-gray-900 text-xs font-bold">{title}</div>;
  };

  return (
    <>
      <DataGridDX
        dataSource={dmyData}
        keyExpr="IDMsUserScope"
        showBorders
        wordWrapEnabled
        width={"100%"}
        height={600}
      >
        <ScrollingDataGRidDX mode="virtual" />
        <PagingDX defaultPageSize={0} />
        <ToolbarDX>
          <ItemDataGridDX name="exportButton" location="before" />
          <ItemDataGridDX location="before">
            <ButtonDX
              text="View by Username"
              onClick={() => {
                setGroupBy({ scope: undefined, username: 0, role: undefined });
              }}
              //visible={groupBy.scope === 0}
            />
          </ItemDataGridDX>
          <ItemDataGridDX location="before">
            <ButtonDX
              text="View by Role"
              onClick={() => {
                setGroupBy({ scope: undefined, username: undefined, role: 0 });
              }}
              // visible={groupBy.scope === 0}
            />
          </ItemDataGridDX>{" "}
          <ItemDataGridDX location="before">
            <ButtonDX
              text="View by Scope"
              onClick={() => {
                setGroupBy({ scope: 0, username: undefined, role: undefined });
              }}
              //visible={groupBy.username === 0}
            />
          </ItemDataGridDX>
          <ItemDataGridDX name="searchPanel" location="after" />
        </ToolbarDX>
        <SearchPanelDX visible width={240} />
        <ExportDX enabled />
        <FilterRowDX visible applyFilter={"auto"} />
        <EditingDX mode="popup" useIcons allowUpdating />
        {/** */}
        <ColumnDX type="buttons" fixed fixedPosition="left" width={80}>
          <ButtonDataGridDX
            icon="eyeopen"
            onClick={() => {
              setIsPopupEdit(true);
              setAction({ action: "DISPLAY", title: "Diplay User" });
            }}
          />
          <ButtonDataGridDX
            icon="edit"
            onClick={() => {
              setIsPopupEdit(true);
              setAction({ action: "UPDATE", title: "Update User" });
            }}
          />
          <ButtonDataGridDX
            icon="trash"
            onClick={() => {
              setIsPopupEdit(true);
              setAction({ action: "DELETE", title: "Delete User" });
            }}
          />
        </ColumnDX>
        <ColumnDX
          dataField="IDMsUserScope"
          allowEditing={false}
          visible={false}
        />
        <ColumnDX
          dataField="Username"
          groupIndex={groupBy.username}
          sortOrder="asc"
          width={350}
          headerCellRender={() => {
            return renderGridHeader("Username");
          }}
        />
        <ColumnDX
          dataField="NamaUserScope"
          groupIndex={groupBy.scope}
          sortOrder="asc"
          width={350}
          headerCellRender={() => {
            return renderGridHeader("Scope");
          }}
        />
        <ColumnDX
          dataField="NamaRole"
          groupIndex={groupBy.role}
          width={150}
          headerCellRender={() => {
            return renderGridHeader("Nama Role");
          }}
          allowGrouping={false}
        />
        <ColumnDX
          dataField="NamaPT"
          width={150}
          headerCellRender={() => {
            return renderGridHeader("Nama PT");
          }}
          allowGrouping={false}
        />
        <ColumnDX
          dataField="NamaUnitUsaha"
          width={150}
          headerCellRender={() => {
            return renderGridHeader("Nama Unit Usaha");
          }}
        />
        <ColumnDX
          dataField="KodeAfdeling"
          width={150}
          headerCellRender={() => {
            return renderGridHeader("Kode Afdeling");
          }}
        />
        <ColumnDX
          headerCellRender={() => {
            return renderGridHeader("");
          }}
        />
      </DataGridDX>
    </>
  );
}

const dmyDefault = {
  NamaScope: "",
  Username: "",
  MaxRows: 500,
};
