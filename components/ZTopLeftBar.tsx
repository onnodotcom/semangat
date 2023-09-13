"use client";

import {
  Button as ButtonAntd,
  ConfigProvider,
  Drawer as DrawerAntd,
} from "antd";
import theme from "@/theme/themeConfig";
import { Button as ButtonDX } from "devextreme-react/button";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { TreeView as TreeViewDX } from "devextreme-react/tree-view";
import { useRouter } from "next/navigation";

export default function ZTopLeftBar() {
  const router = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const doGotoMenu = (path: string, countChild: number | undefined) => {
    if (countChild === 0) {
      setIsSideBarOpen(false);
      router.replace(path);
    }
  };

  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="fixed flex justify-between items-center z-[2] top-0 bg-[#00553A]/80 backdrop-blur-sm text-gray-100 w-full h-10 shadow-sm">
          <div className="ml-2">
            <ButtonAntd
              shape="circle"
              type="text"
              ghost
              icon={
                <MenuUnfoldOutlined
                  onClick={() => {
                    setIsSideBarOpen(true);
                  }}
                  style={{ fontSize: "20px", color: "whitesmoke" }}
                />
              }
            />
          </div>
        </div>
        <div className="fixed z-[9999999]">
          <DrawerAntd
            title="Menu"
            placement="left"
            onClose={() => {
              setIsSideBarOpen(false);
            }}
            open={isSideBarOpen}
          >
            <span className="text-gray-900">
              <TreeViewDX
                items={dmyHirarkiMenu}
                searchMode="contains"
                searchEnabled={true}
                width={"100%"}
                onItemClick={(e) => {
                  doGotoMenu(e.node?.itemData?.path, e?.node?.children?.length);
                }}
              ></TreeViewDX>
            </span>
          </DrawerAntd>
        </div>
      </ConfigProvider>
    </>
  );
}

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
      { id: 1_2, text: "User & Role", items: [{}] },
    ],
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "Master Data",
    items: [
      {
        id: Math.floor(Math.random() * 9999),
        text: "Blok",
      },
    ],
  },
];
