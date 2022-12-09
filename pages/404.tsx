import Image from "next/image";
import Link from "next/link";

const NotFound = (): JSX.Element => {
  return (
    <div className=" flex justify-center items-center flex-col mt-3 h-screen">
      <Image width={200} height={200} src={"/icons/baby.png"} alt="icons" />
      <h3>This page is not found</h3>
      <p>
        Go Back{" "}
        <Link href="/" className="text-lime-500">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
