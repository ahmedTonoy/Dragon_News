import MarqueeImport from "react-fast-marquee";
const Marquee = MarqueeImport.default ?? MarqueeImport;

console.log(Marquee);

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 text-accent bg-base-200 p-3">
      <p className="px-3 py-2 bg-secondary text-white font-medium text-xl">
        Latest
      </p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          veniam eos, doloribus et ex consequuntur dignissimos officiis totam
          ipsam vel. Sed eveniet voluptatem provident inventore odio. Quis
          officiis animi voluptatibus!
        </p>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          veniam eos, doloribus et ex consequuntur dignissimos officiis totam
          ipsam vel. Sed eveniet voluptatem provident inventore odio. Quis
          officiis animi voluptatibus!
        </p>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          veniam eos, doloribus et ex consequuntur dignissimos officiis totam
          ipsam vel. Sed eveniet voluptatem provident inventore odio. Quis
          officiis animi voluptatibus!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
