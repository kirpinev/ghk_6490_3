import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import bigSmile from "../assets/bigSmile.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { Gap } from "@alfalab/core-components/gap";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "6490_get_real_sub", {
      variant_name: "ghk_6490_3",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={bigSmile}
          width={250}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins={false}
          weight="bold"
        >
          Такого вы точно не ожидали
        </Typography.TitleResponsive>
        <Gap size={8} />
        <Typography.Text tag="p" view="primary-medium">
          Вы только что поучаствовали в настоящем эксперименте. Сервиса не
          существует. Мы скоро предложим лучшие условия!
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="alfabank://multistep-route?fromModule=FORM&stepNumber=0&alias=alfa-subscription-alias&version=2"
          onClick={submit}
        >
          Спасибо, понятно!
        </ButtonMobile>
      </div>
    </>
  );
};
