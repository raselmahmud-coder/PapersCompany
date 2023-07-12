import React from "react";
import { FaPenToSquare } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div className=" px-2 pb-7" name="About">
      <h1 className="text-center text-5xl py-5 font-bold text-white">
        About Us/معلومات عنا
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div
          className="bg-gray-500 p-4 rounded-lg"
          data-aos="fade-up-right"
          data-aos-duration="1200">
          <span className="lg:text-[30px] md:text-[25px] text-[22px] mb-3 border-b-[5px] text-left border-gray-400 font-semibold text-white">
            <span className="border-b-[5px] border-yellow-600 ">
              Full name of
            </span>{" "}
            company (IBACO)
          </span>

          <p className=" font-serif py-5 text-white text-left">
            منشأة ايباكو لقص وتجهيز الورق و البلاستك ومواد التعبئه و التغليف
            ورقائق اللمنيوم وورق ذاتي اللصق
          </p>
          <h2 className="text-white py-5 font-bold text-xl justify-center flex items-center">
            Mission/مهمة
            <span className="ml-2">
              <FaPenToSquare color="white" size={"26"} />
            </span>
          </h2>
          <p className="space-y-2 font-serif text-white text-left">
            The affiliation imports jumbo rolls and petals from paper materials,
            plastic, packaging materials, packaging, aluminum chips and self
            -adhesive paper from Europe or from the end of it and cut the
            materials according to the customer's request from sizes if the
            customer's request is spawned or rolls and we pack the product
            according to the customer's need and delivery The merchandise the
            available sarcophagus enabled a hitter it was possible to spread the
            virginity of the electricity of his cylinder.
          </p>
          <br />
          <p className="space-y-2 font-serif text-white text-left">
            تقوم المنشأء باستيراد جامبو رول و باليتات من خامات الورق و البلاستك
            و مواد التعبئه و التغليف ورقائق اللمنيوم وورق ذاتي اللصق من اوربا او
            من دول اخره وتقوم بتقطيع الخامات حسب طلب الزبون من مقاسات ان كان طلب
            الزبون افرخ او رولات ونقوم بتغليف المنتج بحسب احتياج الزبون وتسليم
            البضاعه ... انواع القص المتاحه مكن شيتر .. مكن سليتر .. مكن نشر بكر
            كهرباء اسطوانه ... مكن قص سكينه بولار ... مكن قص بداء لفافه يدوي
          </p>
        </div>
        {/* manager  */}
        <div
          className="bg-gray-500 p-4 rounded-lg"
          data-aos="fade-up-left"
          data-aos-duration="1200">
          <span className="lg:text-[30px] md:text-[25px] text-[22px] mb-3 border-b-[5px] text-left border-gray-400 font-semibold text-white">
            <span className="border-b-[5px] border-yellow-600 ">
              CEO & Manager
            </span>
            /الرئيس التنفيذي والمدير
          </span>

          <div className="my-6">
            <h6 className="space-y-2 font-serif text-3xl text-white text-right">
              مدير المنشأه
            </h6>
            <h6 className="space-y-2 font-serif text-3xl text-white text-right">
              عمار فارس الشهرع عمار السوري
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
