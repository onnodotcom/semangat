"use client";

import { Breadcrumb as BreadcrumbAntd, Card as CardAntd } from "antd";
import ZPT from "./ZPT";

export default function Page() {
  return (
    <>
      <div className="text-xs mb-2">
        <BreadcrumbAntd
          items={[
            {
              title: <a href="">utama</a>,
            },
            {
              title: <a href="">menu level 1</a>,
            },
            {
              title: <a href="">menu level 3</a>,
            },
            {
              title: "PT",
            },
          ]}
        />
      </div>
      <div className="text-xs">
        <CardAntd>
          <ZPT />
        </CardAntd>
      </div>
    </>
  );
}
