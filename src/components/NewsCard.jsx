import { format } from "date-fns";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-lg">
      {/* Header */}

      <div className="flex items-center justify-between bg-base-200 px-6 py-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">{author.name}</h3>

            <p className="text-sm text-gray-500">
              {format(author.published_date, "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-xl text-gray-500">
          <button>
            <FaRegBookmark />
          </button>

          <button>
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Body */}

      <div className="p-6 pb-0">
        <div className="border-b-2 border-base-300 pb-6">
          <h2 className="text-2xl font-bold leading-snug mb-5">{title}</h2>

          <img
            src={image_url}
            alt={title}
            className="w-full h-72 object-cover rounded-lg"
          />

          <p className="text-gray-600 mt-6 leading-8">
            {details.length > 200 ? (
              <>
                {details.slice(0, 200)}...
                <Link
                  to={`/news/${id}`}
                  className="text-orange-500 font-semibold ml-1"
                >
                  Read More
                </Link>
              </>
            ) : (
              details
            )}
          </p>
        </div>
      </div>

      {/* Footer */}

      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}

          <span className="ml-2 font-semibold">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />

          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
