"use client";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../utils/utilis";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const image = form.image.files[0];

    setPasswordError("");
    setEmailError("");

    try {
      // Upload image
      const imageData = await imageUpload(image);
      const photoUrl = imageData?.data?.display_url;

      // Send registration request
      const userInfo = {
        name,
        email,
        role: "user",
        password,
        isDeleted: false,
        photo: photoUrl,
      };
      const response = await axiosPublic.post("/register", userInfo);

      // Trigger OTP sending
      setEmailSent(true);
      setCountdown(59); // Set countdown to 59 seconds
      toast.success(response.data.message);
      form.reset();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.message || "Registration failed");
    }
  };

  const handleResendOtp = async () => {
    setCountdown(59); // Reset countdown
    try {
      const email = (
        document.querySelector('input[name="email"]') as HTMLInputElement
      ).value;
      await axiosPublic.post("/resend-otp", { email });
      toast.success("OTP resent to your email");
    } catch (error: any) {
      toast.error(error?.message || "Failed to resend OTP");
    }
  };

  const handleVerifyOtp = async (e: any) => {
    e.preventDefault();
    try {
      const data = { email, otp: e.target.otp.value };

      const response = await axiosPublic.post("/verify-otp", data);
      if (response.data.success) {
        setIsVerified(true);
        toast.success("Email verified successfully");
        router.push("/login");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error: any) {
      toast.error(error?.message || "Verification failed");
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)" }}
        className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
      >
        {emailSent && !isVerified ? (
          <form onSubmit={handleVerifyOtp} className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
              A verification code has been sent to your email.
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              name="otp"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900 mb-2"
            />
            <button
              type="submit"
              className="bg-primary w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(20,184,166,0.8)] py-2 text-white"
            >
              Verify OTP
            </button>
            {countdown > 0 && (
              <p className="text-red-500 mt-2">
                Resend OTP in {countdown} seconds
              </p>
            )}
            {countdown <= 0 && (
              <button
                onClick={handleResendOtp}
                className="text-primary underline mt-2"
              >
                Resend OTP
              </button>
            )}
          </form>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h1 className="my-3 text-2xl text-gray-800 font-bold">Sign Up</h1>
              <p className="text-xl font-semibold text-gray-600">
                Welcome to <span className="text-primary">Eco-Pharmify</span>
              </p>
            </div>
            <form
              onSubmit={handleRegister}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                  />
                </div>
                <div>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                  />
                  {emailError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {emailError}
                    </p>
                  )}
                </div>
                <div>
                  <div className="mb-4 relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      id="password"
                      required
                      placeholder="Password"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                    />
                    <span
                      className="absolute top-[14px] right-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {passwordError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {passwordError}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primary w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(20,184,166,0.8)] py-3 text-white"
                >
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Continue"
                  )}
                </button>
                <button className="text-xs hover:underline hover:text-primary text-gray-400">
                  Forgot password?
                </button>
              </div>

              <p className="px-6 mt-3 text-sm text-center text-gray-400">
                Don’t have an account?
                <Link
                  href="/login"
                  className="hover:underline font-semibold hover:text-primary text-primary"
                >
                  Sign In
                </Link>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
