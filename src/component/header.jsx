export default function Header() {
    return (
      <>
        <div className="container-custom px-6 h-14 bg-blue-950/40 font-Roboto Condensed text-slate-300 flex justify-center items-center rounded-b-2xl shadow-xl shadow-gray-800">
          <div className=" flex ">
            <h1 className="text-2xl mr-10">Hyper Movie</h1>
            <ul className="flex items-center gap-4">
              <li>MOVIES</li>
              <li>TV SHOWS</li>
              <li>PEOPLE</li>
            </ul>
          </div>
          <div className="ml-auto  ">
            <ul className="flex gap-6 items-center ">
              <li >LOG IN</li>
              <li className="bg-rose-800   px-4 py-1 text-white rounded-2xl">
                SING UP
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}