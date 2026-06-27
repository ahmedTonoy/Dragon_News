import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const categoryId = Number(id);

  const filteredNews =
    categoryId === 0
      ? data
      : categoryId === 1
        ? data.filter((news) => news.others.is_today_pick)
        : data.filter((news) => news.category_id === categoryId);

  return (
    <div>
      <h2 className="font-bold mb-5">Total news: {filteredNews.length}</h2>
      <div className="grid grid-cols-1 gap-4">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
