"use client";

import { Card as CardAntd } from "antd";
import ZUnitUsaha from "./ZUnitUsaha";
import { CardStyles } from "@/lib/AntdCardStyles";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZUnitUsaha />
        </CardAntd>
      </div>
    </>
  );
}
