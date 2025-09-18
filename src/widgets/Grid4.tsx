export const Grid4 = () => (
  <div className="pt-4 md:pt-8 pb-5">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        <a className="border border-gray-400 p-10" href="/">
          <div className="flex flex-col items-center">
            <img
              alt=""
              loading="lazy"
              width={72}
              height={72}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/images/icons/sympathy.svg"
            />
            <p className="text-primary text-lg font-secondary mt-4">SAME-DAY</p>
          </div>
        </a>
        <a className="border border-gray-400 p-10" href="/">
          <div className="flex flex-col items-center">
            <img
              alt=""
              loading="lazy"
              width={72}
              height={72}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/images/icons/birthday.svg"
            />
            <p className="text-primary text-lg font-secondary mt-4">BIRTHDAY</p>
          </div>
        </a>
        <a className="border border-gray-400 p-10" href="/">
          <div className="flex flex-col items-center">
            <img
              alt=""
              loading="lazy"
              width={72}
              height={72}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/images/icons/same-day.svg"
            />
            <p className="text-primary text-lg font-secondary mt-4">GET WELL</p>
          </div>
        </a>
        <a className="border border-gray-400 p-10" href="/">
          <div className="flex flex-col items-center">
            <img alt="" loading="lazy" width={72} height={72} decoding="async" data-nimg={1} style={{ color: "transparent" }} src="/images/icons/getwell.svg" />
            <p className="text-primary text-lg font-secondary mt-4">SYMPATHY</p>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export const skeleton = () => <div className="skeleton">Loading...</div>;

export default Grid4;
