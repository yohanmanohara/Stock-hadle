import Image from "next/image";
import login from "@/app/auth/login/page";
export default function Home() {
  return (
   
   
    <div>
      <h1>Home</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
       <login />
    </div>
  );
}
