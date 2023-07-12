import React from "react";
import product1 from "../assets/product (1).jpg";
import product2 from "../assets/product (2).jpg";
import product3 from "../assets/product (3).jpg";

export default function Tree() {
  const array = [
    {
      id: 1,
      img: product1,
      title: "Absorbent Paper",
      description:
        "Wide range of papers for blotting, wicking and filtration available for labs, biotech, and air fresheners. Specialty packaging available. Pulp test Blotter.",
    },
    {
      id: 2,
      img: product2,
      title: "Blotting Paper",
      description:
        "High quality lab blotting and industrial blotter paper. Diagnostic papers for biotech and pharma. Cotton, Wood cellulose and blends. Pulp Test Blotter.",
    },
    {
      id: 3,
      img: product3,
      title: "Perforated Paper",
      description:
        "We are a paper converting company that offers high quality, precision slitting, die-cutting. Custom perforated paper, micro to 1/2 inch holes in numerous patterns.",
    },
  ];
  return (
    <section className="w-full  bg-slate-600 group:" name="product">
      <h2 className="text-center text-4xl py-5 font-bold text-white gap-4">
        Our Product
      </h2>
      <div className="max-w-screen-lg m-auto mt-10">
        <div className=" h-auto grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1   gap-x-20 text-white m-auto">
          {array.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[270px]  h-[400px] bg-transparent cursor-pointer group perspective m-auto">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute bg-white backface-hidden border-2 rounded-md">
                    <img src={item.img} className="w-full h-full" alt="" />
                    <h2 className="p-2 text-center text-[22px] font-extralight border-b-2 text-gray-500 ">
                      {item.title}
                    </h2>
                    <p className=" text-[16px] text-gray-500 text-center font-serif pb-10">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-[270px]  h-auto bg-gray-100 overflow-hidden rounded-md">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-16">
                     
                      <h2 className="p-2 text-center text-2xl font-semibold border-b-2 text-gray-500 ">
                        {item.title}
                      </h2>
                      <p className="text-xl text-gray-500 text-center font-serif pb-5">
                        {item.description}
                      </p>
                      <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-6 scale-0 group-hover:scale-125">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
