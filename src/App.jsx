
import FollowUs from "./component/headers/followus";
import Header from "./component/headers/header";
import InputBox from "./component/headers/inputBox";

export default function App() {
  return (
    <>
      <div className="bg-gray-800 h-screen ">
        
        <Header/>
        <InputBox /> 
        <FollowUs/>
        
      </div>
    </>
  );
}
