"use client";

import { Breadcrumb as BreadcrumbAntd, Card as CardAntd } from "antd";
import ZPT from "./ZPT";
import { CardStyles } from "@/lib/AntdCardStyles";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd style={CardStyles}>
          <ZPT />
        </CardAntd>
      </div>
    </>
  );
}
