import Image from "next/image";
import React from "react";

function ItemLogo(props) {
  return (
    <div>
      <Image
        src={props.image}
        width={props.width}
        height={props.height}
        alt=""
      />
    </div>
  );
}

export default function Listlogo() {
  return (
    <div className="bg-yellowcustom py-[20px] flex items-center gap-5 justify-between my-10">
      <div className="container flex items-center justify-between">
        <ItemLogo image="/logo/logo1.png" width={119} height={71} />
        <ItemLogo image="/logo/logo2.png" width={151} height={53} />
        <ItemLogo image="/logo/logo3.png" width={177} height={63} />
        <ItemLogo image="/logo/logo4.png" width={236} height={71} />
        <ItemLogo image="/logo/logo5.png" width={128} height={71} />
        <ItemLogo image="/logo/logo6.png" width={167} height={64} />
      </div>
    </div>
  );
}
