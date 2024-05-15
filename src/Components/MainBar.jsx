import email from "../assets/icon/emaill.png";
import notification from "../assets/icon/notification.png";

const MainBar = () => {
  return (
    <div className="bg-[#F2F6FF] flex w-[76.4rem] backdrop-blur-3xl bg-opacity-80 h-1/6 items-center justify-between p-8 fixed right-0 z-10">
      <div className="flex flex-col ">
        <h1 className="text-xs font-semibold">Hi Dhruval</h1>
        <h1 className="text-4xl font-semibold">Welcome to CyberSecure!</h1>
      </div>
      <div className="flex gap-12 pr-8">
        <img className="w-7 h-7" src={email} alt="" />
        <img className="w-7 h-7" src={notification} alt="" />
      </div>
    </div>
  );
};

export default MainBar;
