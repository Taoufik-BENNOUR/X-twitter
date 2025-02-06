import Share from "@/components/Share";
import Feed from "../components/Feed";
import Link from "next/link";

export default function Home() {


  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-between  text-textGray border-b-[1px] border-borderGray">
        <Link  href="" className="flex items-center pb-3 border-b-4 border-iconBlue">
          For you
        </Link>
        <Link  href="" className="flex items-center pb-3  border-b-4 border-iconBlue">
          Following
        </Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  );
}
