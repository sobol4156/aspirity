import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* back to List */}
      <div className="flex gap-3 items-center p-3">
        <Image className="h-3.5" src="/image/arrowLeft.webp" alt="" width={8} height={14} />
        <span className="text-[#76787A] text-sm	">Вернуться к сотрудникам</span>
      </div>
      {/* Employee */}
      <section className="bg-[#232324] p-8 rounded-xl">
        <div className="flex gap-8">
          <Image className="h-40 w-40" src="/image/avatarBig.webp" alt=""  width={160} height={160}/>
          <div className="flex justify-center flex-col ">
            <h2 className="text-5xl my-8">Иванов <pre></pre> Иван Иванович</h2>
            <div className="flex flex-col gap-4 text-[#E1E3E6] ">
              <span>Junior UI/UX designer</span>
              <span>Россия, Красноярск <span className="text-[#76787A]">• 14:03</span></span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
