"use client";

import {
  Button as ButtonAntd,
  ConfigProvider,
  Drawer as DrawerAntd,
} from "antd";
import theme from "@/theme/themeConfig";
import { Button as ButtonDX } from "devextreme-react/button";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { TreeView as TreeViewDX } from "devextreme-react/tree-view";
import { useRouter } from "next/navigation";
import { HierarchyMenu } from "@/lib/HierarchyMenu";

export default function ZTopLeftBar() {
  const router = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [topBarTitle, setTopBarTitle] = useState<string | undefined>(
    "Dashboard"
  );

  const doGotoMenu = (
    text: string | undefined,
    path: string,
    countChild: number | undefined
  ) => {
    if (countChild === 0) {
      setIsSideBarOpen(false);
      setTopBarTitle(text);
      router.replace(path);
    }
  };

  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="fixed flex justify-between items-center z-[999] top-0 bg-[#00553A]/80 backdrop-blur-sm text-gray-100 w-full h-10 shadow-sm">
          <div className="flex ml-2 justify-start items-center">
            <ButtonAntd
              shape="circle"
              type="text"
              ghost
              onClick={() => {
                setIsSideBarOpen(!isSideBarOpen);
              }}
              icon={
                isSideBarOpen ? (
                  <MenuFoldOutlined
                    style={{ fontSize: "20px", color: "whitesmoke" }}
                  />
                ) : (
                  <MenuUnfoldOutlined
                    style={{ fontSize: "20px", color: "whitesmoke" }}
                  />
                )
              }
            />
            <div className="ml-3 font-bold text-base">
              {isSideBarOpen ? "Menu" : topBarTitle}
            </div>
          </div>
          <div className="mr-4">asasas</div>
        </div>
        <div className="fixed z-[9999999]">
          <DrawerAntd
            title="Menu"
            closeIcon={true}
            placement="left"
            onClose={() => {
              setIsSideBarOpen(false);
            }}
            open={isSideBarOpen}
          >
            <span className="text-gray-900">
              <TreeViewDX
                items={HierarchyMenu}
                searchMode="contains"
                searchEnabled={true}
                width={"100%"}
                onItemClick={(e) => {
                  doGotoMenu(
                    e.node?.itemData?.text,
                    e.node?.itemData?.path,
                    e?.node?.children?.length
                  );
                }}
              ></TreeViewDX>
            </span>
          </DrawerAntd>
        </div>
      </ConfigProvider>
    </>
  );
}
{
  /**
const dmyHirarkiMenu = [
  {
    id: Math.floor(Math.random() * 9999),
    text: "Dashboard",
    path: "/inapp/dashboard",
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "Master Data",
    path: "",
    items: [
      {
        id: Math.floor(Math.random() * 9999),
        text: "PT",
        path: "/inapp/pt",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Unit Usaha",
        path: "/inapp/unitusaha",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Afdeling",
        path: "/inapp/afdeling",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Users dan Roles",
        path: "/inapp/usersandroles",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "X",
    items: [
      {
        id: Math.floor(Math.random() * 9999),
        text: "Blok",
      },
    ],
  },
];
 */
}
