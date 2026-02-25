import { Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";

export default function FollowUs() {
    return (
      <>
        <div className="container-custom flex justify-end items-center text-slate-500  gap-2 mt-4 ">
          <p className="font-Roboto text-lg">Follow Us :</p>
          <Twitter size={20} className="hover:text-rose-700" />
          <Send size={20} className="hover:text-rose-700" />
          <Youtube size={20} className="hover:text-rose-700" />
          <Facebook size={20} className="hover:text-rose-700" />
          <Instagram size={20} className="hover:text-rose-700" />
        </div>
      </>
    );
}