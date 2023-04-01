import Card from "./childs/Card";
import Header from "./childs/Header";

export default function Dashboard() {
  return (
    <main className="w-[calc(100vw_-_200px)] flex flex-col gap-10 h-screen bg-[#d9d9d9] p-9 px-12">
      <header>
        <h1 className="text-[#45a471] text-xl font-semibold mb-6">
          You currently have 3 requests
        </h1>
        <div className="bg-white">
          <Header />
          <div className="p-5">
            <div className="flex w-[100%] text-xs border rounded-3xl overflow-hidden">
              <div className="w-[35%] py-2 px-4 bg-[#fdf307]">RECEIVED</div>
              <div className="w-[30%] text-center border-x py-2">
                NEGOTIATING
              </div>
              <div className="w-[35%] text-center py-2">COMPLETED</div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-white py-2 pb-5 rounded-3xl">
        <Header />
        <div className="px-5">
          <div className="rounded-3xl w-[60%] px-5 h-8 flex items-center text-white text-sm bg-[#45a471]">
            Completed
          </div>
        </div>
        <div className="flex gap-5 px-5 mt-5 justify-between">
          <Card isRare={true} />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
