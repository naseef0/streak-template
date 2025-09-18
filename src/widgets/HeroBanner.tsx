import { Script, Preload } from "@naseef0/streak/components";
import { render } from "@naseef0/streak/core";

export const HeroBanner = () => (
  <div className="container p-0">
    <div className="relative lg:hidden bg-tertiary">
      <div className="font-secondary text-center pt-4">
        <a className="leading-none" href="/">
          <h3 className="text-[42px] font-extrabold italic text-white">
            FRESH &amp; FUN
          </h3>
          <h4 className="text-[60px] font-extrabold italic text-white">
            FLOWERS
          </h4>
        </a>
      </div>
      <a href="/">
        <Preload
          as="image"
          href="/images/hero-banner/banner-sm-1.webp"
          media="(max-width: 1024px)"
        />
        <img
          alt=""
          width={640}
          height={460}
          className="w-full h-auto"
          style={{ color: "transparent" }}
          src="/images/hero-banner/banner-sm-1.webp"
        />
      </a>
      <div className="font-secondary text-center p-6">
        <button className="bg-white text-tertiary hover:bg-white hover:text-tertiary active:white active:text-tertiary focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100">
          SHOP NEW ARRIVALS
        </button>
        <div className="text-md text-white font-light mt-4">
          Discover trending bouquets, beautifully hand-arranged by our local
          florists!
        </div>
      </div>
    </div>
    <div className="relative hidden lg:block">
      <a href="/">
        <Preload
          as="image"
          href="/images/hero-banner/banner-1.webp"
          media="(min-width: 1024px)"
        />
        <img
          alt=""
          width={1200}
          height={630}
          className="w-full h-auto"
          style={{ color: "transparent" }}
          src="/images/hero-banner/banner-1.webp"
        />
      </a>
      <div className="absolute top-[60px] right-[30px] bottom-[60px] z-1 w-1/2 max-w-[540px] bg-white p-3">
        <div className="flex border-[1px] border-solid border-tertiary h-full content-center items-center justify-center">
          <div className="font-secondary text-center">
            <a className="leading-none" href="/">
              <h3 className="text-[64px] font-extrabold italic text-tertiary">
                FRESH &amp; FUN
              </h3>
              <h4 className="text-[90px] font-extrabold italic text-tertiary">
                FLOWERS
              </h4>
              <div className="text-xl font-light w-4/5 m-auto">
                Discover trending bouquets, beautifully hand-arranged by our
                local florists!
              </div>
            </a>
            <button className="bg-tertiary text-white hover:bg-tertiary hover:text-white active:tertiary active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-base rounded h-[50px] opacity-100 mt-6">
              SHOP NEW ARRIVALS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const skeleton = async (props: {}) => {
  return <div className="skeleton">Loading...</div>;
};

export default HeroBanner;
