import React from "react";
import { Routes, Route } from "react-router-dom";
import "./asset/css/bootstrap.css";
import "./asset/css/styles.css";
import Cart from "./Pages/Carts/Cart";
import Ipad from "./Pages/Ipad/Ipad";
import Iphone from "./Pages/Iphone/Iphone";
import Mac from "./Pages/Mac/Mac";
import Main from "./Pages/Main/Main";
import Music from "./Pages/Music/Music";
import Search from "./Pages/Search/Search";
import Support from "./Pages/Support/Support";
import TV from "./Pages/TV/Tv";
import Watch from "./Pages/Watch/Watch";
import Four04 from "./Pages/Four04/Four04";
// import AddForm from "./Pages/AddForm/AddForm";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import SingleAppleProduct from "./Pages/SingleAppleProduct/SingleAppleProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="/Mac" element={<Mac />} />
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Iphone" element={<Iphone />} />
        <Route path="iphone/:pid" element={<SingleAppleProduct />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Watch" element={<Watch />} />
        {/* <Route path="/AddForm" element={<AddForm />} /> */}
        <Route path="/*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
