import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white text-gray-800 rounded-lg shadow-md m-4 p-4 max-w-xs flex flex-col">
        <img
          src={src ? src : image}
          alt={description}
          className="h-52 w-full object-cover rounded-md"
        />
        <div className="flex flex-col flex-grow mt-4">
          <h5 className="text-lg font-semibold mb-2">
            {title ? title.slice(0, 50) : "No Title"}
          </h5>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            {description
              ? description.slice(0, 90)
              : "Click the button below to read more"}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
