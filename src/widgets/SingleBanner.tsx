import { Script } from "@naseef0/streak/components";

export const SingleBanner = async (props: {}) => {
  return (
    <div className="mt-3">
      <div className="container p-0">
        <a className="aspect-[0.96/1] md:aspect-[3.84/1]" href="/">
          <img
            alt=""
            loading="lazy"
            width={1200}
            height={336}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto hidden md:block"
            style={{ color: "transparent" }}
            src="/images/banners/deal-day.webp"
          />
          <img
            alt=""
            loading="lazy"
            width={768}
            height={800}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto md:hidden"
            style={{ color: "transparent" }}
            src="/images/banners/deal-day-sm.webp"
          />
        </a>
      </div>
    </div>
  );
};

export const skeleton = async (props: {}) => {
  return <div className="skeleton">Loading...</div>;
};

export default SingleBanner;
