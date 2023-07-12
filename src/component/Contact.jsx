import React from "react";

export default function Contact() {
  return (
    <div className="px-2 max-w-screen-lg m-auto" name="contact">
      <section id="contact" className="mt-20 m-auto">
        <h2 className="text-headingColor font-[700] text-[2.5rem] my-12 text-white">
          Locations
        </h2>
        <div className="container">
          <div className="md:flex justify-between items-center">
            <div
              data-aos="fade-down-right"
              data-aos-duration="1200"
              className="w-full md:w-1/2 h-[300px]  sm:h-[450px] m-auto">
              <iframe
                title="first-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d741701.7189513779!2d30.162843588286993!3d30.611283991093313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581669fa2ffec9%3A0x9066c1589eb728cb!2sExport%20Development%20Bank%20of%20Egypt%20-%20Sheraton%20Branch!5e1!3m2!1sen!2sbd!4v1689094601755!5m2!1sen!2sbd"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div
              data-aos="fade-down-right"
              data-aos-duration="1200"
              className="w-full md:w-1/2 h-[300px]  sm:h-[450px] m-auto">
              <iframe
                title="location two"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93356.93770152424!2d30.734140295837165!3d29.93156352875337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458ff6dd9700d3f%3A0x59d06e43065f381c!2sIndustrial%20Zone%2C%20Giza%20Governorate%2C%20Egypt!5e1!3m2!1sen!2sbd!4v1689095764058!5m2!1sen!2sbd"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="pb-16 m-auto">
        <h2 className="text-headingColor font-[700] text-[2.5rem] my-2 text-white">
          Contact
        </h2>
        <div className="container">
          <div className="md:flex justify-center items-center ">
            
            <div
              data-aos="fade-down-left"
              data-aos-duration="1200"
              className="w-full mt-8  md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 py-8">
              <form action="" className="w-full ">
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 focus::outline-none rounded-[5px]"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 focus::outline-none rounded-[5px]"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    rows={4}
                    type="text"
                    placeholder="What do you wanna to say"
                    className="w-full p-3 focus::outline-none rounded-[5px]"
                  />
                </div>
                <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white bg-cyan-600 text-center ease-in duration-150">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
