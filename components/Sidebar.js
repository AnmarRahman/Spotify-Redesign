import Image from "next/image";

function Sidebar() {
  return (
    <div className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src="https://iili.io/HWoR6mu.png"
        width={56}
        height={56}
        className="object-fill"
        alt="alt"
      />
      <div></div>
    </div>
  );
}

export default Sidebar;
