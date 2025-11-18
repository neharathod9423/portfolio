import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href="https://wa.me/917768899468"
      target="_blank"
    >
      Let&apos;s Connect
    </Link>
  );
};

export default TalkButton;
