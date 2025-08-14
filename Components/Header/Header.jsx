"use client";
import { useAuthHook } from "@/Hooks/Auth/UseAuthHook";
import LoginSignupBox from "../Auth/LoginSignUpBox";
import { HeaderLast } from "./HeaderLast";
import { HeaderTop } from "./HeaderTop";
import { MainHeader } from "./MainHeader";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { FormWrapper, errors, register, open, setOpen, otpSent, signUp } =
    useAuthHook();

  const handleOpen = async () => {
    const token = localStorage.getItem("token");
    if (!token) setOpen(true);
    else router.push("/profile");
  };

  return (
    <div className="w-full flex flex-col">
      <HeaderTop />
      {/* <<<<<<< HEAD */}
      <MainHeader setOpen={handleOpen} />
      <div className="sticky top-0 z-40 shadow-md">
        <HeaderLast />
      </div>

      {open && (
        <LoginSignupBox
          FormWrapper={FormWrapper}
          errors={errors}
          register={register}
          closeFn={() => setOpen(!open)}
          otpSent={otpSent}
          signUp={signUp}
        />
      )}
      {/* =======
      <MainHeader />
      <HeaderLast />
>>>>>>> 4190a267d28eae5d4bb3919f1565fd931923d432 */}
    </div>
  );
};
