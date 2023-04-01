export default function Card({ isRare }: { isRare?: boolean }) {
  return (
    <div className="w-72 bg-[#f5f4f4] relative rounded-md border flex flex-col items-center">
      {isRare && (
        <div className="scale-90 items-center justify-center absolute bg-red-500 rounded-md w-[100px] flex text-white py-1 right-[-50px] top-[-15px]">
          Rare Find
        </div>
      )}
      <div className="mt-5">
        <img src="/vector.png" alt="vector.png" />
      </div>
      <span>
        <i className="text-[#7bac91] font-semibold">Holiday Inn</i>
      </span>
      <div className="rounded-md shadow-2xl flex flex-col w-[100%] items-center text-gray-500">
        <span className="text-sm">1.5 miles away from joblocation</span>
        <div className="w-[100%] p-2 text-sm flex justify-between items-end">
          <span>
            Singles: $120 <br /> Doubles: $145
          </span>
          <button className="bg-[#46a673] w-40 h-8 rounded-lg text-white font-semibold">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
