export default function Header() {
  return (
    <div className="flex p-5">
      <div className="flex flex-col px-5">
        <span className="text-[#45a471] text-[1.2rem] font-semibold">
          St Judes Hospital
        </span>
        <span className="text-[0.7em] text-gray-700">Sarasota,FL.33178</span>
      </div>
      <div className="flex flex-col px-5 border-x">
        <span className="text-[#45a471]  text-[1.2rem]  font-semibold">
          10 - 17
        </span>
        <span className="text-[0.7em] text-gray-700">October December</span>
      </div>
      <div className="flex flex-col px-5">
        <span className="text-[#45a471]  text-[1.2rem]  font-semibold">
          20 Rooms
        </span>
        <span className="text-[0.7em] text-gray-700">
          10 Singles, 10 doubles
        </span>
      </div>
    </div>
  );
}
