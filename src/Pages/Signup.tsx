import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div>
      <div className="w-full h-[784px] relative bg-white flex-col justify-start items-start inline-flex">
        <div className="w-[462px] h-[602.19px] relative">
          <div className="w-[462px] h-[324px] p-[0px] left-[0px] top-[0px] absolute flex-col justify-start items-center gap-6 inline-flex">
            <div className="p-[0px] flex-col justify-start items-center gap-4 flex">
              <div className="w-[84px] h-4 text-center text-slate-500 text-[14px] font-normal leading-tight">
                Sign up with:
              </div>
              <div className="p-[0px] justify-start items-start gap-6 inline-flex">
                <div className="pl-4 pr-[11.92px] pt-[11px] pb-[10px] bg-blue-700 rounded-sm justify-end items-end gap-[2.08px] flex">
                  <div className="w-[20px] h-[19px] relative flex-col justify-start items-start flex" />
                  <div className="w-[59px] h-4 text-center text-white text-[16px] font-normal leading-normal">
                    Google
                  </div>
                </div>
                <div className="w-[109px] pl-6 pr-[18.92px] pt-[10.89px] pb-[11px] bg-blue-700 rounded-sm justify-end items-end gap-2 flex">
                  <div className="w-[13.33px] h-[17.50px] relative flex-col justify-start items-start flex" />
                  <div className="w-[45px] h-4 text-center text-white text-[16px] font-normal leading-normal">
                    Apple
                  </div>
                </div>
              </div>
              <div className="p-[0px] justify-start items-center inline-flex">
                <div className="pl-[20px] pr-[19.98px] py-[1px] bg-white justify-start items-start flex">
                  <div className="text-center text-slate-500 text-[16px] font-normal leading-normal">
                    Or
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[462px] h-[46px] relative">
              <div className="left-[19px] top-[11px] absolute text-slate-400 text-[16px] font-normal leading-normal">
                Username
              </div>
              <div className="w-[430px] h-[18px] p-[0px] left-[13px] top-[-9px] absolute justify-start items-center inline-flex">
                <div className="w-[0px] h-[18px] p-[0px] justify-center items-center gap-[10px] flex">
                  <div className="opacity-0 text-slate-400 text-[12px] font-normal leading-none">
                    Username
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[462px] h-[46px] relative">
              <div className="left-[19px] top-[11px] absolute text-slate-400 text-[16px] font-normal leading-normal">
                Email
              </div>
              <div className="w-[430px] h-[18px] p-[0px] left-[13px] top-[-9px] absolute justify-start items-center inline-flex">
                <div className="w-[0px] h-[18px] p-[0px] justify-center items-center gap-[10px] flex">
                  <div className="opacity-0 text-slate-400 text-[12px] font-normal leading-none">
                    Email
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[462px] h-[46px] relative">
              <div className="w-[462px] h-[46px] left-[0px] top-[0px] absolute">
                <div className="left-[19px] top-[11px] absolute text-slate-400 text-[16px] font-normal leading-normal">
                  Password
                </div>
                <div className="w-[430px] h-[18px] p-[0px] left-[13px] top-[-9px] absolute justify-start items-center inline-flex">
                  <div className="w-[0px] h-[18px] p-[0px] justify-center items-center gap-[10px] flex">
                    <div className="opacity-0 text-slate-400 text-[12px] font-normal leading-none">
                      Password
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[462px] h-[46px] left-[0px] top-[348px] absolute flex-col justify-start items-start inline-flex">
            <div className="w-[430px] h-[18px] p-[0px] justify-start items-center inline-flex">
              <div className="w-[0px] h-[18px] p-[0px] justify-center items-center gap-[10px] flex">
                <div className="opacity-0 text-slate-400 text-[12px] font-normal leading-none">
                  Retype Password
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-[16px] font-normal leading-normal">
              Retype Password
            </div>
          </div>
          <div className="w-[460px] h-[18px] left-[1px] top-[406px] absolute text-slate-400 text-[12px] font-normal leading-none">
            6 or more characters, one number, one uppercase & one lower case.
          </div>
          <div className="w-[460px] h-12 px-6 py-[12px] left-[1px] top-[458px] absolute bg-blue-700 rounded-[100px] justify-center items-center gap-[10px] inline-flex">
            <div className="text-white text-[14px] font-normal leading-3">
              Sign up with Email
            </div>
          </div>
          <div className="w-[214px] h-[20px] left-[124px] top-[528px] absolute">
            <div className="w-[175px] h-4 left-[0px] top-[2px] absolute text-center text-slate-500 text-[14px] font-normal leading-tight">
              Already have an account?{" "}
            </div>
            <div className="left-[175px] top-[0px] absolute text-center">
              <span className="text-blue-700 text-[14px] font-normal leading-tight">
                Log in
              </span>
              <span className="text-slate-500 text-[14px] font-normal leading-tight">
                {" "}
              </span>
            </div>
          </div>
          <div className="w-[400.72px] h-8 pl-[14px] pr-[13.72px] left-[31px] top-[570px] absolute flex-col justify-center items-center gap-[0.18px] inline-flex">
            <div className="text-center text-slate-400 text-[12px] font-normal leading-none">
              By signing up, you agree to{" "}
            </div>
            <div className="text-center">
              <span className="text-slate-400 text-[12px] font-normal leading-none">
                Sciccor's{" "}
              </span>
              <span className="text-slate-500 text-[12px] font-normal leading-none">
                Terms of Service
              </span>
              <span className="text-slate-400 text-[12px] font-normal leading-none">
                ,{" "}
              </span>
              <span className="text-slate-500 text-[12px] font-normal leading-none">
                Privacy Policy
              </span>
              <span className="text-slate-400 text-[12px] font-normal leading-none">
                {" "}
                and{" "}
              </span>
              <span className="text-slate-500 text-[12px] font-normal leading-none">
                Acceptable Use Policy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
