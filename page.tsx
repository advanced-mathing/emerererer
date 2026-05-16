import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function EmergentBrowser() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* BLACK HEADER */}
      <header className="bg-black text-white h-[260px] flex flex-col items-center justify-center">
        <h1
          className={`${anton.className} text-7xl tracking-tight leading-none`}
        >
          EMERGENT
        </h1>
        <h2 className="text-3xl font-semibold tracking-[0.35em] mt-2">
          BROWSER
        </h2>
      </header>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col items-center justify-start pt-16 text-center">
        <h3 className="text-lg tracking-[0.35em] font-medium mb-10">
          UNBLOCKED PROXY
        </h3>

        <div className="text-xs tracking-[0.25em] space-y-3 text-black/90">
          <p>WEBSITES THAT DONT WORK</p>
          <p>- YOUTUBE</p>
          <p>- GOOGLE</p>
          <p>- ANY MAIN BRAND COMPANY</p>
        </div>
      </main>
    </div>
  );
}
