import React from "react";

export default function StrategyAndEnvironment() {
  return (
    <div className=" lg:px-24 lg:flex justify-between gap-x-10 px-2">
      {/* Environment  */}
      <div className="flex-1" data-aos="fade-up-left" data-aos-duration="1200">
        <div className=" lg:py-7 pb-5 py-2">
          {" "}
          <span className="text-2xl border-b-2 border-yellow-600 p-2 text-white">
            Founded/<span className="">تأسست</span>
          </span>
        </div>
        <p className="font-serif text-left text-white">
          تاسست المنشأه 13/3/2016 مصر الشرقيه جمعية المستثمرين العاشر من رمضان
        </p>
      </div>
      <div className="flex-1" data-aos="fade-up-right" data-aos-duration="1200">
        <div className=" mt-6 mb-6 flex justify-center items-center">
          <span className="text-2xl text-left border-b-2 border-yellow-600 p-2 font-medium text-white ">
            The Company works with:
          </span>
        </div>
        <ul className="ml-7 mt-4 text-right font-serif text-white">
          <li>البنوك المتعاملين معهم</li>
          <li>بنك البركه مصر</li>
          <li>بنك مصر البنك الاهلي المصري</li>
          <li>بنك تنمية الصادرات المصري</li>
          <li>بنك وفاء مصر</li>
        </ul>
      </div>
    </div>
  );
}
