"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    category: "",
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    // Later switch to the second handleSubmit below
    event.preventDefault();
    router.push("/contact-us/message-submitted");
    console.log(formData);
  };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("/api/contact-us", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       router.push("/contact-us/message-submitted");
  //     } else {
  //       console.error("Failed to send the message.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-[62px] pb-[120px] w-[min(628px,82%)] mx-auto">
      <h1 className="text-[#0F7863] font-[500] text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.59] text-center">
        Contact Us
      </h1>
      <p className="text-[#474747] font-[400] text-[20px] font-avenir leading-[1.75] text-center mt-[27px]">
        Get in touch and we’ll respond to your inquiries in a timely manner!
      </p>

      <div className="p-[30px] border-[0.4px] border-[#98B0A9] rounded-[4px] mt-[42px]">
        <form onSubmit={handleSubmit}>
          <div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>
                Please select a category
              </option>
              <option>University representative</option>
              <option>Employer</option>
              <option>Student</option>
              <option>Graduate</option>
              <option>Working professional</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mt-[29px]">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mt-[29px]">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mt-[29px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mt-[29px]">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mt-[29px]">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={10}
              className="block w-full px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] bg-[#F0F1F1] rounded-[4px] focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="text-center mt-[56px]">
            <button
              type="submit"
              className="px-[44px] py-[18px] text-white font-[900] text-[min(16px,calc(0.2vw+13.12px))] font-avenir leading-[1.125] bg-[#5D4C80] rounded-full focus:outline-none active:ring-4 active:ring-purple-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
