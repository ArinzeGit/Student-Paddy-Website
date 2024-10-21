"use client";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/contact-us/message-submitted");
  };

  return (
    <div className="pt-[62px] pb-[120px]">
      <h1 className="text-[#0F7863] font-[500] text-[44px] font-avenir leading-[1.59] text-center">
        Contact Us
      </h1>
      <p className="text-[#474747] font-[400] text-[20px] font-avenir leading-[1.75] text-center mt-[27px]">
        Get in touch and we’ll respond to your inquiries in a timely manner!
      </p>

      <div className="max-w-[628px] mx-auto p-[30px] border-[0.4px] border-[#98B0A9] rounded-[4px] mt-[42px]">
        <div>
          <select className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500">
            <option>Please select a category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>

        <div className="mt-[29px]">
          <input
            type="text"
            placeholder="First Name"
            className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mt-[29px]">
          <input
            type="text"
            placeholder="Last Name"
            className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mt-[29px]">
          <input
            type="email"
            placeholder="Email"
            className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mt-[29px]">
          <input
            type="text"
            placeholder="Subject"
            className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mt-[29px]">
          <textarea
            placeholder="Message"
            rows={10}
            className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="text-center mt-[56px]">
          <button
            onClick={() => handleSubmit()}
            className="px-[44px] py-[18px] text-white font-[900] text-[16px] font-avenir leading-[1.125] bg-[#5D4C80] rounded-full focus:outline-none active:ring-4 active:ring-purple-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
