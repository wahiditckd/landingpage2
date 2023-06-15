import Image from "next/image";
import React from "react";

const Item = (props) => {
  return (
    <div className="mt-10">
      <div>
        <Image
          src={props.image}
          width={props.width}
          height={props.height}
          alt=""
        />
      </div>
      <div>
        <h4 className="text-[32px] font-medium">{props.title}</h4>
        <h6 className="text-[24px]">{props.desc}</h6>
      </div>
    </div>
  );
};

export default function Arrivals() {
  return (
    <div className="my-50 container">
      <h4
        className='font-black text-[48pxS] inline-block relative after:content-[""] after:absolute after:bg-[url("/shape2.svg")]
        after:w-[186px] after:h-[35px] after:right-0  after:bottom-0 after:mr-[-10px]'
      >
        <span className="relative z-10">NEW ARRIVALS</span>
      </h4>
      <div className="flex gap-7 justify-between">
        <Item
          image="/arrivals1.png"
          width={484}
          height={704}
          title="Hoodies & Sweatshirt"
          desc="Explorer Now"
        />
        <Item
          image="/arrivals2.png"
          width={484}
          height={704}
          title="Coat & Parkas"
          desc="Explorer Now"
        />
        <Item
          image="/arrivals3.png"
          width={484}
          height={704}
          title="Tees & T-shirt"
          desc="Explorer Now"
        />
      </div>
    </div>
  );
}
