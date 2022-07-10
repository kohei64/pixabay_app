import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputText);
    // console.log(searchText);

    const apiURL = `https://pixabay.com/api/?key=28400111-51fdd36087afc74f580d3e154&q=${searchText}&image_type=photo`;
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setFetchData(data.hits);
        // console.log(fetchData);
      });
  };

  return (
    <div>
      <h1 className="page-title">Search Page</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="relative md:block">
            <input
              type="text"
              id="search-navbar"
              className="block p-2 w-2/3 text-gray-900 mx-auto bg-gray-50 rounded-lg border border-gray-300 sm:text-sm"
              placeholder="画像を検索する(空白でランダム画像を取得)"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="flex flex-wrap w-10/12 mx-auto mt-10">
        {fetchData.map((data) => {
          return (
            <div key={data.id} className="mx-auto p-2">
              <a href={data.pageURL} target="_black" rel="noopener noreferrer">
                <Image
                  src={data.largeImageURL}
                  width={300}
                  height={220}
                  objectFit='contain'
                  alt="image"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
