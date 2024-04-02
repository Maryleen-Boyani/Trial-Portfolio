import { Navbar } from "./components/Navbar/Navbar";

export default function App () {
  return (
    <>
      <Navbar />
      <main className="mt-10 ml-2 mr-4">
        <section className="bg-gradient-to-r from-white from-90% to-purple-800 p-10 text-1.5xl font-sans grid grid-cols-4 gap-4 ">
          <div className="col-start-1 col-end-2 sm:col-start-1 sm:col-end-3">
            <h1 className="text-black   text-4xl  ">I am Maryleen Boyani <br />Web developer!</h1> 
            <br />
            <p className="font-serif ml-2">
              I break down complex user experinece problems <br />to create integritiy focussed solutions that connect <br /> billions of people
            </p>
          </div>
          
          <div className="size-96 col-start-3 col-end-4 -mt-10">
            <img src="../public/assets/images/pic.jpg" alt="my-photo" className="rounded-md flex-end size-full"/>
          </div>
      </section>
      </main>
      
      
     
    </>
  );
}