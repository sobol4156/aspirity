import Image from "next/image";
import "./employee.css";

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
        <div className="profile-info flex gap-8">
          <Image className="h-40 w-40" src="/image/avatarBig.webp" alt="" width={160} height={160} />
          <div className="flex justify-center flex-col ">
            <h2 className="profile-name text-5xl my-8">Иванов <pre></pre> Иван Иванович</h2>
            <div className="profile-post flex flex-col gap-4 text-[#E1E3E6] ">
              <span>Junior UI/UX designer</span>
              <span>Россия, Красноярск <span className="text-[#76787A]">• 14:03</span></span>
            </div>
          </div>
        </div>
        <nav className=" mt-12 b">
          <ul className="flex  text-[#B0B1B6] text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
            <li className="employee__link ">ОСНОВНАЯ ИНФОРМАЦИЯ</li>
            <li className="employee__link active">ОТПУСК</li>
            <li className="employee__link ">ОБОРУДОВАНИЕ</li>
          </ul>
        </nav>
      </section>
      <section className="vacation">
        <div>
          
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
