import MobileNumber from "./components/MobileNumber";
import StepCount from "./components/StepCount";
import Button from "./components/Button";
import Warning from "./components/Warning";
import TermsAndConditions from "./components/TermsAndConditions";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="h-screen relative w-full">
      <div className="absolute z-[-10] h-1/5 w-full bg-gradient-to-b from-blue-400 to-neutral-50" />
      {/* top section */}
      <div className="flex justify-center h-full">
        <div className="w-1/4 min-w-[400px]">
        <TopBar />
          <section>
            <img
              src="https://click.afflink.mobi/assets_ua/subpage.png"
              alt="mobile-otp"
              className="w-[50px]"
            />
            <StepCount />
            <div className="flex flex-col items-center mt-6">
              <img
                src="https://click.afflink.mobi/assets_ua/subpage.png"
                alt="mobile-otp"
                className="w-[300px]"
              />
              <p className="font-bold text-center">Enter your phone number</p>
            </div>
          </section>
          {/* bottom section */}
          <section className="">
            <MobileNumber />
            <Button content="CONTINUE" />
            <div className="absolute bottom-0 w-1/4 min-w-[400px]">
              <Warning content="Entertainment is a subscription service that will automatically renew for 1 USD/ 7 Day(s). You can unsubscribe from the service at anytime, by sending STOP to **** for (operator) . To make use of this service, you must be 18 or more unless you have received permission from your parents or the person who is authorized to pay your bill." />
              <TermsAndConditions />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
