import Link from "next/link";

// Todo:useEffect

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="page-title">Pixabay Appへようこそ! </h1>
      <div className="inline-block w-60 text-white text-xl border bg-gray-600 p-3 rounded-3xl">
        <Link href="/search">
          <a>好きな画像を探す→</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
