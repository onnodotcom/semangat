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

export default function ZTopLeftBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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
            title="Basic Drawer"
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
    id: 1,
    text: "Konfigurasixxx",
    items: [
      {
        id: 1_1,
        text: "PT",
      },
      { id: 1_2, text: "User & Role", items: [{}] },
    ],
  },
  {
    id: 2,
    text: "Master Data",
    items: [
      {
        id: 2_1,
        text: "Blok",
      },
    ],
  },
];
