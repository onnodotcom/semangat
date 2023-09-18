import { MsPT } from "@/lib/MsPT";
import { Divider as DividerAD } from "antd";
import { Button as ButtonDX } from "devextreme-react";
import {
  Form as FormDX,
  GroupItem as GroupItemFormDX,
  Item as ItemFormDX,
} from "devextreme-react/form";
import {
  Popup as PopupDX,
  ToolbarItem as ToolbarItemPopupDX,
} from "devextreme-react/popup";
import { ScrollView as ScrollViewDX } from "devextreme-react/scroll-view";
import { useEffect, useState } from "react";

export default function ZPTPopupAdd() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <ButtonDX
        text="Add New"
        icon="add"
        type="default"
        onClick={() => {
          setIsShow(true);
        }}
      />
      <PopupDX
        fullScreen
        visible={isShow}
        onHiding={() => {
          setIsShow(!isShow);
        }}
        title="Add New PT"
      >
        <ScrollViewDX height={"100%"}>
          <FormDX formData={MsPT}>
            <GroupItemFormDX cssClass="first-group" colCount={12}>
              <ItemFormDX colSpan={12}>
                <div className="p-1"></div>
              </ItemFormDX>
              <ItemFormDX dataField="Alias" caption="Alias" colSpan={3} />
              <ItemFormDX dataField="KodePT" caption="Kode PT" colSpan={3} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="NamaPT" caption="Nama PT" colSpan={6} />
              <ItemFormDX colSpan={6} />
              <ItemFormDX dataField="Alamat" caption="Alamat" colSpan={6} />
              <ItemFormDX colSpan={6} />

              <ItemFormDX colSpan={12}>
                <div className="p-2"></div>
              </ItemFormDX>
            </GroupItemFormDX>
          </FormDX>
        </ScrollViewDX>
      </PopupDX>
    </>
  );
}
