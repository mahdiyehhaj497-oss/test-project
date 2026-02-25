
import FollowUs from "./component/headers/followus";
import Header from "./component/headers/header";
import HeaderSlider from "./component/headers/headerSlider";
import InputBox from "./component/headers/inputBox";

export default function App() {
  return (
    <>
      <div className="bg-gray-800 h-screen ">
        <div className="container-custom">
          <Header />
          <InputBox />
          <FollowUs />
          <HeaderSlider />
          
        </div>
      </div>
    </>
  );
}
