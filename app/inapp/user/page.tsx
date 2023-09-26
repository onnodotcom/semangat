"use client";

import { CardStyles } from "@/lib/AntdCardStyles";
import { Card as CardAntd } from "antd";
import ZUserIndex from "./ZUserIndex";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZUserIndex />
        </CardAntd>
      </div>
    </>
  );
}
