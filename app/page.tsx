import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center">
        <Image className="h-3.5" src="/image/arrowLeft.webp" alt="" width={8} height={14}/>
        <span className="text-[#76787A] text-sm	">Вернуться к сотрудникам</span>
      </div>
    </div>
  );
}
