"use client";

import { CardStyles } from "@/lib/AntdCardStyles";
import { Card as CardAntd } from "antd";
import ZBlokIndex from "./ZBlokIndex";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZBlokIndex />
        </CardAntd>
      </div>
    </>
  );
}
