"use client";

import { Card as CardAntd } from "antd";
import ZUnitUsaha from "./ZUnitUsaha";

export default function Page() {
  return (
    <>
      <div className="text-xs">
        <CardAntd>
          <ZUnitUsaha />
        </CardAntd>
      </div>
    </>
  );
}
