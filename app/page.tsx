import Image from "next/image";
import "./employee.css";

export default function Home() {
  return (
    <div className="flex flex-col font-poppins">
      {/* back to List */}
      <div className="flex gap-3 items-center p-3 ">
        <Image className="h-3.5 cursor-pointer" src="/image/arrowLeft.webp" alt="" width={8} height={14} />
        <span className="text-[#76787A] text-sm  font-semibold cursor-pointer">ВЕРНУТЬСЯ К СОТРУДНИКАМ</span>
      </div>
      {/* Employee */}
      <section className="bg-[#232324] p-8 rounded-xl">
        <div className="profile-info flex gap-8">
          <Image className="h-40 w-40" src="/image/avatarBig.webp" alt="" width={160} height={160} />
          <div className="flex justify-center flex-col ">
            <h2 className="profile-name text-5xl my-8 font-bold">Иванов <pre></pre> Иван Иванович</h2>
            <div className="profile-post flex flex-col gap-4 text-[#E1E3E6] font-normal">
              <span>Junior UI/UX designer</span>
              <span>Россия, Красноярск <span className="text-[#76787A]">• 14:03</span></span>
            </div>
          </div>
        </div>
        <nav className=" mt-12 b">
          <ul className="flex  text-[#B0B1B6] text-sm overflow-x-auto whitespace-nowrap scrollbar-hide font-semibold">
            <li className="employee__link ">ОСНОВНАЯ ИНФОРМАЦИЯ</li>
            <li className="employee__link active">ОТПУСК</li>
            <li className="employee__link ">ОБОРУДОВАНИЕ</li>
          </ul>
        </nav>
      </section>
      <section className="vacation mt-4 flex gap-4">
        <div className="bg-[#232324] p-8 rounded-xl statistics">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl statistics-title">Cтатистика</h3>
            <Image className="h-6 w-6 cursor-pointer" src='/image/info.webp' alt="info" width={24} height={24} />
          </div>
          <div className="flex justify-center mt-4">
            <Image src='/image/progress-bar.webp' alt="logo" width={160} height={160} />
          </div>
          <div className="mt-4">
            <ul className="statistics__list flex flex-col gap-2">
              <li className="statistics__item">
                <span className="statistics__item-text green">Доступно сейчас</span>
                <span>32 дня</span>
              </li>
              <li className="statistics__item">
                <span className="statistics__item-text yellow">Запланировано</span>
                <span>8 дней</span>
              </li>
              <li className="statistics__item">
                <span className="statistics__item-text red">Использовано/недоступно</span>
                <span>4 дня</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="history bg-[#232324] p-8 rounded-xl">
          <div className="text-[#E1E3E6]">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">История отпусков</h3>
              <span className="text-[#76787A] text-sm cursor-pointer">Посмотреть все</span>
            </div>
            <div className="mt-6">
              <ul className="history__list">
                {/* title LI */}
                <li className="flex justify-between px-2 py-4 text-[#B0B1B6]">
                  <span className="mr-4">Тип</span>
                  <span className="mr-4">Даты отпуска</span>
                  <span>Количество дней</span>
                </li>
                <li className="flex justify-between px-2 py-4 ">
                  <span className="mr-4">Отпуск</span>
                  <span className="flex gap-4 items-center mr-4 ">03 марта 2023 <Image src='/image/yellowArrow.webp' alt="arrow" width={18} height={14} /> 23 марта 2023</span>
                  <span>20</span>
                </li>
                <li className="flex justify-between px-2 py-4 ">
                  <span className="mr-4">Отгул</span>
                  <span className="flex gap-4 items-center mr-4">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
                  <span>4</span>
                </li>
                <li className="flex justify-between px-2 py-4 ">
                  <span className="mr-4">Отгул</span>
                  <span className="flex gap-4 items-center mr-4">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
                  <span>4</span>
                </li>
                <li className="flex justify-between px-2 py-4 ">
                  <span className="mr-4">Отгул</span>
                  <span className="flex gap-4 items-center mr-4">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
                  <span>4</span>
                </li>
                <li className="flex justify-between px-2 py-4 ">
                  <span className="mr-4">Отгул</span>
                  <span className="flex gap-4 items-center mr-4">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
                  <span>4</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="history-mobile bg-[#232324] px-4 py-8 rounded-xl mb-8">

          <div className="flex justify-between items-center">
            <h3 >История отпусков</h3>
            <span className="text-[#76787A] text-sm cursor-pointer">Посмотреть все</span>
          </div>

          <ul className="history__list">
            {/* title LI */}
            <li className="flex flex-col px-2 py-4 gap-4">
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Тип</span>
                <span className="">Отпуск</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Даты отпуска</span>
                <span className="flex gap-2.5 items-center mr-4 ">03 марта 2023 <Image src='/image/yellowArrow.webp' alt="arrow" width={18} height={14} /> 23 марта 2023</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Количество дней</span>
                <span>20</span>
              </div>

            </li>


            <li className="flex flex-col px-2 py-4 gap-4">
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Тип</span>
                <span className="">Больничный</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Даты отпуска</span>
                <span className="flex gap-2.5 items-center mr-4 ">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Количество дней</span>
                <span>4</span>
              </div>

            </li>

            <li className="flex flex-col px-2 py-4 gap-4">
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Тип</span>
                <span className="">Больничный</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Даты отпуска</span>
                <span className="flex gap-2.5 items-center mr-4 ">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Количество дней</span>
                <span>4</span>
              </div>

            </li>
            <li className="flex flex-col px-2 py-4 gap-4">
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Тип</span>
                <span className="">Больничный</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Даты отпуска</span>
                <span className="flex gap-2.5 items-center mr-4 ">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Количество дней</span>
                <span>4</span>
              </div>

            </li>
            <li className="flex flex-col px-2 py-4 gap-4">
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Тип</span>
                <span className="">Больничный</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Даты отпуска</span>
                <span className="flex gap-2.5 items-center mr-4 ">03 марта 2023 <Image src='/image/redArrow.webp' alt="arrow" width={18} height={14} /> 7 марта 2023</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#76787A]">Количество дней</span>
                <span>4</span>
              </div>

            </li>
          </ul>

        </div>
      </section>
    </div>
  );
}
