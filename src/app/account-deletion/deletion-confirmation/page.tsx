"use client";
import { useRouter } from "next/navigation";

const DeletionConfirmation = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/account-deletion/deletion-confirmation/deletion-success");
  };

  return (
    <div className="pt-[62px] pb-[120px] flex flex-col items-center">
      <h1 className="text-[#E31E1E] font-[500] text-[44px] font-avenir leading-[1.59] text-center">
        Account Deletion
      </h1>
      <div className="text-[#474747]  font-avenir mt-[65px]">
        <p className="font-[800] text-[22px] leading-[1.37]">
          Before you proceed...
        </p>
        <ul className="font-[400] text-[20px] leading-[1.5] list-disc list-inside mt-[16px]">
          <li>Deleted accounts cannot be recovered again.</li>
          <li>
            Password confirmation implies user agreement to Student Paddy{" "}
            <a href="" className="text-[#0F7863]">
              terms
            </a>{" "}
            and{" "}
            <a href="" className="text-[#0F7863]">
              conditions.
            </a>
          </li>
        </ul>
      </div>
      <input
        type="text"
        placeholder="Confirm password"
        className="block mt-[65px] w-[285px] px-[32px] py-[13px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] border border-[#98B0A9] rounded-[4px] focus:outline-none focus:border-indigo-500 text-center"
      />
      <button
        onClick={() => handleSubmit()}
        className="mt-[21px] px-[83px] py-[11.5px] text-white font-[500] text-[14px] font-avenir leading-[1.37] bg-[#E31E1E] rounded-full focus:outline-none active:ring-4 active:ring-purple-300"
      >
        Delete my account
      </button>
    </div>
  );
};

export default DeletionConfirmation;
