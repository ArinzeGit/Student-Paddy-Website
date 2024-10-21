"use client";
import { useRouter } from "next/navigation";

const AccountDeletion = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/account-deletion/deletion-confirmation");
  };

  return (
    <div className="pt-[62px] pb-[120px] flex flex-col items-center">
      <h1 className="text-[#E31E1E] font-[500] text-[44px] font-avenir leading-[1.59] text-center">
        Account Deletion
      </h1>
      <p className="text-[#474747] font-[400] text-[20px] font-avenir leading-[1.75] text-center mt-[27px]">
        Please let us know why you want to delete your account at this point...
      </p>
      <textarea
        placeholder="Message"
        rows={7}
        className="mt-[62px] block w-[min(80%,630px)] px-[32px] py-[15px] text-[#474747] font-[300] text-[16px] font-avenir leading-[1.5] border border-[#98B0A9] rounded-[4px] focus:outline-none focus:border-indigo-500"
      />
      <button
        onClick={() => handleSubmit()}
        className="mt-[32px] px-[120px] py-[11.5px] text-white font-[500] text-[14px] font-avenir leading-[1.37] bg-[#E31E1E] rounded-full focus:outline-none active:ring-4 active:ring-purple-300"
      >
        Submit
      </button>
    </div>
  );
};

export default AccountDeletion;
