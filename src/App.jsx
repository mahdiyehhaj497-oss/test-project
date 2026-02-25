
import FollowUs from "./component/headers/followus";
import Header from "./component/headers/header";
import HeaderSlider from "./component/headers/headerSlider";
import InputBox from "./component/headers/inputBox";

export default function App() {
  return (
    <>
      <div className= "w-full h-screen bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0)),url(src/assets/photo/istockphoto.jpg)] bg-cover bg-center">
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
