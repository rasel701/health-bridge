import React from "react";
import background1 from "@/public/Tosca Professional Healthcare & Medical Banner.png";
import background2 from "@/public/Blue White Illustration School Medical Health Center Banner.png";

import background3 from "@/public/Blue and White Medical and Health Care Banner.png";
import Image from "next/image";

const Banner = () => {
  const bgIma = [background1, background2, background3];

  return (
    <div className="relative h-[500px]">
      <Image
        src={background2}
        alt="Banner 1"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
