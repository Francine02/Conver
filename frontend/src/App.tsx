import { ButtonDropdown } from "./components/ButtonDropdown";
import { Dropzone } from "./components/Dropzone";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="inset-0 top-0 -z-10 h-screen flex flex-col bg-white bg-[linear-gradient(to_right,#e9e9e9_1px,transparent_1px),linear-gradient(to_bottom,#e9e9e9_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] rounded-b-[200rem] backdrop-filter backdrop-blur-[200rem]">
      <Header />

      <div className="px-6 sm:px-12 md:px-20 lg:px-24 2xl:px-40 flex-grow">
        <Hero />
        <Dropzone />
        <h5 className="text-center font-bold text-base sm:text-lg lg:text-2xl tracking-wide text-[#262626] dark:text-[#dadada]">Para:</h5>
        <ButtonDropdown />
      </div>

      <Footer />
    </div>
  )
}

export default App;
