import { Navbar } from "./components/Navbar/Navbar";

export default function App () {
  return (
    <>
      
      <main className="m-2 p-4 border-black border-4 bg-gradient-to-r from-white from-40% via-purple-100 to-60% to-purple-200">
        <Navbar />
        <section className=" border-4 border-gray-500 mt-4   p-10 text-1.5xl font-sans grid grid-cols-4 gap-4 ">
          <div className="mt-8 ml-8 col-start-1 col-end-2 sm:col-start-1 sm:col-end-3 border-4 p-4">
            <h1 className="font-sans text-2xl text-purple-900 text-bold">I am Maryleen Boyani </h1>

            <h2 className="font-sans font-bold text-outline-black font-weight-700 text-4xl linear-gradient-to-r from-purple-500 to-purple-950"><br />Web developer + <br />Graphics Designer</h2> 
            <br />
            <p className="font-sans ml-2 text-xl text-gray-500">
              I break down complex user experinece problems <br />to create integritiy focussed solutions that connect <br /> billions of people
            </p>
          </div>
          
          <div className="size-96 col-start-3 col-end-4 bg-black border-black border-2 rounded-3xl  hover:border-purple-600 hover:border-3 rotate-3 hover:rotate-0 ml-20 ">
            <img src="../public/assets/images/pic.png" alt="my-photo" className=" rounded-3xl size-full flex-end "/>
          </div>
      </section>
      
      </main>
      
      
     
    </>
  );
}