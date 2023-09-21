"use client";

import { Card as CardAntd } from "antd";
import ZAfdeling from "./ZAfdeling";
import { CardStyles } from "@/lib/AntdCardStyles";

export default function pages() {
  return (
    <>
      <CardAntd style={CardStyles}>
        <ZAfdeling />
      </CardAntd>
    </>
  );
}
