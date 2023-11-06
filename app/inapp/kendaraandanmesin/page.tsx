"use client";

import { CardStyles } from "@/lib/AntdCardStyles";
import { Card as CardAntd } from "antd";
import ZKendMesinIndex from "./ZKendMesinIndex";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZKendMesinIndex />
        </CardAntd>
      </div>
    </>
  );
}
