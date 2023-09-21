"use client";

import { CardStyles } from "@/lib/AntdCardStyles";
import { Card as CardAntd } from "antd";
import ZRolePermissionIndex from "./ZRolePermissionIndex";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZRolePermissionIndex />
        </CardAntd>
      </div>
    </>
  );
}
