"use client";

import { Breadcrumb as BreadcrumbAntd, Card as CardAntd } from "antd";
import ZPT from "./ZPT";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd>
          <ZPT />
        </CardAntd>
      </div>
    </>
  );
}
