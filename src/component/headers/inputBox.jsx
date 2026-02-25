import { Search } from "lucide-react";

export default function InputBox() {
    return (
        <>
            <div className=" flex items-center text-slate-300 mt-5
             h-10 bg-slate-700 border-3 border-gray-900 rounded-md">
                <select className="bg-slate-700 font-Roboto  border-r border-gray-500 h-8" name="" id="">
                    <option value="">Tv showe</option>
                    <option value="">People</option>
                </select>
                <input className="w-full font-Roboto bg-slate-700 text-lg h-8  mx-2 pl-3"
                    placeholder="Search for a movie,TV Show or celebrity that you are looking for"
                    type="text" />
                <Search size={30} />
            </div>
        </>
    );
}