export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 p-6 text-center flex  items-center md:flex-col flex-col lg:flex-row justify-center  lg:justify-between ">
            <div>
            <p>Created by <a href="https://twitter.com/yourhandle" className="text-white">@Dhiraj</a></p>
            </div>
       
        <div className="mt-2 flex justify-center space-x-4 text-white">
          <a href="#" className="hover:text-gray-400 transition ">GitHub ↗</a>
          <a href="#" className="hover:text-gray-400 transition">LinkedIn ↗</a>
        </div>
      </footer>
    );
  }
  