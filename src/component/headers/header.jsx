export default function Header() {
    return (
      <>
        <div className=" px-6 h-14 bg-blue-950/40 font-Roboto Condensed text-slate-300 flex justify-center items-center rounded-b-2xl ">
          <div className=" flex ">
            <div className="flex mr-3">
              <h1 className="text-5xl text-rose-600 m-1 blur-[0.5px] ">
                H
              </h1>
              <div className="block">
                <p className="mt-1">yper</p>
                <p className="mr-4 text-sm">Movies</p>
                <p></p>
              </div>
            </div>
            <ul className="flex items-center gap-4">
              <li>MOVIES</li>
              <li>TV SHOWS</li>
              <li>PEOPLE</li>
            </ul>
          </div>
          <div className="ml-auto  ">
            <ul className="flex gap-6 items-center ">
              <li>LOG IN</li>
              <li className="bg-rose-800   px-4 py-1 text-white rounded-2xl">
                SING UP
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}