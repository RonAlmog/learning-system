import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return <Image height={130} width={130} alt="logo" src="/images/logo.svg" />;
};

export default Logo;
