import { Navbar } from "./components/Navbar/Navbar";

export default function App () {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-r from-white from-90% to-purple-800 p-10 text-1.5xl font-sans grid grid-cols-4 gap-4 ">
          <h1 className="text-black  col-start-1 col-end-2 text-2xl  sm:col-start-1 sm:col-end-2">I am Maryleen Boyani <br />Front-end web developer!</h1> 
          <div className="size-48 flex col-start-4 col-end-6">
            <img src="../public/assets/images/pic.jpg" alt="my-photo" className="rounded-md flex-end"/>
          </div>
      </section>
      </main>
      
      
     
    </>
  );
}