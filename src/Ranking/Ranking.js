import React from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBookmark,
  faComments,
  faCheck,
  faStar,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const mostReadItems = [
    {
      title: "Shadow Slave",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/5GfN3p7s4DSUdCjnz9520O9OaHPpvnailVg9gIYmeQJ8dUjTA.jpg",
      stats: { views: "10.3M", bookmarks: "51.3K" },
    },
    {
      title: "Lord of the Mysteries (We...",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/3CevBcCXc00HJqxeevdf3sxb5w6xf3OtkQDYDNHYMmBYvjacC.jpg",
      stats: { views: "2.61M", bookmarks: "43.9K" },
    },
    // Add more items as needed...
  ];

  const newTrendsItems = [
    {
      title: "Advent of the Three...",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/aL9fMi7S3wz9U6tX5z35dl5KuCD5izIkdUKb1CG3mkbCPqxJA.jpg",
      stats: { comments: "3317", reviews: "90" },
    },
    {
      title: "A Soldier's Life",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/j8qi3WuUv1ZjONQai5Xh8v2w61BPGXybUzmF2BfEeWFAeoGnA.jpg",
      stats: { comments: "535", reviews: "70" },
    },
    // Add more items as needed...
  ];

  const userRatedItems = [
    {
      title: "The Perfect Run",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/P65nt3UIrfRzT66p7SkZO80Ir4HQrwApveBk0fqoAbEV8oGnA.jpg",
      stats: { rating: "5.0", reviews: "255" },
    },
    {
      title: "Under the Oak Tree (Web...",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/xD1LTsxMblZGLdtFJjrseLIl8dgwdQxuI25H2t3OLUfGeoGnA.jpg",
      stats: { rating: "4.9", reviews: "214" },
    },
    // Add more items as needed...
  ];

  return (
    <div className="bg-gray-900 text-gray-200 p-4">
      <Header />
      <div className="flex flex-wrap mb-4">
        <RankingSection title="Most Read" items={mostReadItems} />
        <RankingSection title="New Trends" items={newTrendsItems} />
        <RankingSection title="User Rated" items={userRatedItems} />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="text-4xl mb-4">
      Ranking
      <div className="flex items-center mt-2">
        <Tab title="Most Read" />
        <Tab title="New Trends" />
        <Tab title="User Rated" />
        <div className="ml-auto text-blue-500 cursor-pointer hover:underline">
          View More
        </div>
      </div>
    </div>
  );
};

const Tab = ({ title }) => {
  return (
    <div className="bg-purple-600 text-white px-4 py-2 rounded-md mr-2 cursor-pointer hover:bg-purple-700">
      {title}
    </div>
  );
};

const RankingSection = ({ title, items }) => {
  return (
    <div className="w-full md:w-1/3 mb-4">
      <div className="text-xl mb-2">{title}</div>
      {items.map((item, index) => (
        <ItemCard
          key={index}
          title={item.title}
          imgSrc={item.imgSrc}
          stats={item.stats}
        />
      ))}
    </div>
  );
};

const ItemCard = ({ title, imgSrc, stats }) => {
  return (
    <div className="flex items-center bg-gray-800 rounded-lg p-3 mb-2">
      <img src={imgSrc} alt={title} className="w-12 h-16 mr-3 rounded-md" />
      <div className="flex flex-col">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-sm text-gray-400">
          {stats.views ? (
            <>
              <FontAwesomeIcon icon={faEye} className="mr-1" />
              {stats.views} (Monthly) <br />
              <FontAwesomeIcon icon={faBookmark} className="mr-1" />
              {stats.bookmarks}
            </>
          ) : stats.comments ? (
            <>
              <FontAwesomeIcon icon={faComments} className="mr-1" />
              {stats.comments} Comments <br />
              <FontAwesomeIcon icon={faCheck} className="mr-1" />
              {stats.reviews} Reviews
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
              {stats.rating} <br />
              <FontAwesomeIcon icon={faPen} className="mr-1" />
              {stats.reviews} Reviews
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App
