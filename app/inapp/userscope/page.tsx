"use client";

import { CardStyles } from "@/lib/AntdCardStyles";
import { Card as CardAntd } from "antd";
import ZUserScopeIndex from "./ZUserScopeIndex";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZUserScopeIndex />
        </CardAntd>
      </div>
    </>
  );
}
