import Link from "next/link";

export default function Sidebar({ isOpen, setIsOpen }) {
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <aside className="flex justify-end">
          <div className="py-4 px-3 bg-gray-500 absolute z-10">
            <ul className="">
              <li className="py-4 hover:bg-gray-600 text-white  hover:text-white rounded-xl border m-3">
                <Link
                  href="/"
                  className="flex items-center text-base font-normal rounded-lg "
                >
                  <a className="p-5 px-6">Home</a>
                </Link>
              </li>

              <li className="py-4 hover:bg-gray-600 text-white hover:text-white rounded-xl border m-3">
                <Link
                  href="/search"
                  className="flex  items-center text-base font-normal rounded-lg "
                >
                  <a className="p-5 px-5">Search </a>
                </Link>
              </li>

              <li className="py-4 hover:bg-gray-600 text-white  hover:text-white rounded-xl border m-3">
                <Link
                  href="https://pixabay.com/ja/"
                  className="flex  items-center text-base font-normal rounded-lg "
                >
                  <a className="p-5 px-4" target="_black">
                    Pixabay
                  </a>
                </Link>
              </li>

              <li
                className="px-4 font-normal text-white rounded-lg  py-4 bg-black hover:text-white border m-3"
                onClick={handleIsOpen}
              >
                <p>Close</p>
              </li>
            </ul>
          </div>
        </aside>
      ) : undefined}
    </div>
  );
}
