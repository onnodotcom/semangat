"use client";

import { Card as CardAntd, Col as ColAntd, Row as RowAntd } from "antd";
import { Button as ButtonAntd } from "devextreme-react/button";
import { LoadIndicator as LoadIndicatorDX } from "devextreme-react/load-indicator";
import { TextBox as TextBoxDX } from "devextreme-react/text-box";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ZLogin() {
  const router = useRouter();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const doLogin = () => {
    setIsLoadingLogin(true);
    router.replace("/inapp/dashboard");
  };

  return (
    <>
      <div className=" text-gray-900 pl-4 pr-4">
        <CardAntd>
          <RowAntd gutter={[1, 10]}>
            <ColAntd span={7}>Username</ColAntd>
            <ColAntd span={17}>
              <TextBoxDX
                inputAttr={{ "aria-label": "Username" }}
                className="dx-field-value"
                defaultValue=""
                placeholder="Username"
                width={"100%"}
              />
            </ColAntd>
            <ColAntd span={7}>Password</ColAntd>
            <ColAntd span={17}>
              <TextBoxDX
                inputAttr={{ "aria-label": "Password" }}
                className="dx-field-value"
                defaultValue=""
                placeholder="Password"
                width={"100%"}
              />
            </ColAntd>
            <ColAntd span={7} />
            <ColAntd span={17}>
              <ButtonAntd
                type="default"
                width={"100%"}
                height={"30px"}
                onClick={doLogin}
              >
                <LoadIndicatorDX
                  visible={isLoadingLogin}
                  width={"20px"}
                  height={"20px"}
                  className="mr-2"
                />
                <div className="dx-button-text text-sm">Login</div>
              </ButtonAntd>
            </ColAntd>
          </RowAntd>
        </CardAntd>
      </div>
    </>
  );
}

const dmyUsername = {
  Username: "a",
  Password: "1",
};
