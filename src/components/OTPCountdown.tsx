import { useEffect, useState } from "react";

const OTPCountdown: React.FC = () => {
  const [time, setTime] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {time > 0
        ? `You can request a new OTP in ${time} seconds`
        : "You can request a new OTP now"}
    </div>
  );
};

export default OTPCountdown;
