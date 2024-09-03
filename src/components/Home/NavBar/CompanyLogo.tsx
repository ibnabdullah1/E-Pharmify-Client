import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.png";

const CompanyLogo = () => {
  return (
    <div>
      <Link
        href="/"
        aria-label="E-Pharmacy"
        title="E-Pharmacy"
        className="inline-flex items-center mr-8 gap-1"
      >
        <Image src={logo} alt="logo" width={40} height={30} className="w-10" />
        <span className="text-2xl font-bold text-primary">Pharmify</span>
      </Link>
    </div>
  );
};

export default CompanyLogo;
