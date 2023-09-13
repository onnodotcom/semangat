"use client";

import ZLogin from "@/components/form/auth/ZLogin";
import { Col as ColAntd, Image as ImageAntd, Row as RowAntd } from "antd";

export default function Home() {
  return (
    <main className="text-gray-900">
      <RowAntd>
        <ColAntd xs={0} sm={0} md={14} xl={17} xxl={18}>
          <div className="bg-[#00553A] h-screen"></div>
        </ColAntd>
        <ColAntd xs={24} sm={24} md={10} xl={7} xxl={6}>
          <div className="h-screen p-4">
            <ZLogin />
          </div>
        </ColAntd>
      </RowAntd>
    </main>
  );
}
