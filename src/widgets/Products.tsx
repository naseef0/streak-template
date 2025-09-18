import { Script } from "@naseef0/streak/components";

export const Products = async (props: {}) => {
  return (
    <div className="mt-3 mb-6">
      <div className="container">
        <div className="bg-no-repeat bg-top bg-contain py-3 -mx-4 bg-[url('/images/products/product-bg-1.webp')] max-md:bg-[url('/images/products/product-bg-1-sm.webp')]">
          <div className="text-center mb-3">
            <div className="px-14">
              <h2 className="font-secondary italic text-xl lg:text-h2 font-bold text-[#d50934]">BOUQUETS TO CELEBRATE</h2>
              <h3 className="font-secondary text-md hidden lg:block">Make your next occasion memorable with fresh flowers.</h3>
            </div>
            <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-base rounded h-[50px] opacity-100 w-[255px] mt-4">
              SHOP NOW
            </button>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 max-w-[940px] mx-auto px-2 px-lg-0">
            <a className="flex flex-col" href="/">
              <div>
                <img
                  alt="Teleflora's Pretty Love Bouquet"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  className="w-full"
                  style={{ color: "transparent", filter: "invert(2%)" }}
                  src="/images/products/product-1.webp"
                />
              </div>
              <div className="text-center mt-2">
                <h4 className="font-secondary">${/* */}54.99</h4>
                <button className="font-secondary text-primary">Buy Now</button>
                <h3 className="text-md">Teleflora's Pretty Love Bouquet</h3>
              </div>
            </a>
            <div className="hidden lg:block">
              <a className="flex flex-col" href="/">
                <div>
                  <img
                    alt="Teleflora's Pretty Love Bouquet"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent", filter: "invert(2%)" }}
                    src="/images/products/product-2.webp"
                  />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-secondary">${/* */}54.99</h4>
                  <button className="font-secondary text-primary">Buy Now</button>
                  <h3 className="text-md">Teleflora's Pretty Love Bouquet</h3>
                </div>
              </a>
            </div>
            <a className="flex flex-col" href="/">
              <div>
                <img
                  alt="Teleflora's Pretty Love Bouquet"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  className="w-full"
                  style={{ color: "transparent", filter: "invert(2%)" }}
                  src="/images/products/product-3.webp"
                />
              </div>
              <div className="text-center mt-2">
                <h4 className="font-secondary">${/* */}54.99</h4>
                <button className="font-secondary text-primary">Buy Now</button>
                <h3 className="text-md">Teleflora's Pretty Love Bouquet</h3>
              </div>
            </a>
            <a className="flex flex-col" href="/">
              <div>
                <img
                  alt="Teleflora's Pretty Love Bouquet"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  className="w-full"
                  style={{ color: "transparent", filter: "invert(2%)" }}
                  src="/images/products/product-4.webp"
                />
              </div>
              <div className="text-center mt-2">
                <h4 className="font-secondary">${/* */}54.99</h4>
                <button className="font-secondary text-primary">Buy Now</button>
                <h3 className="text-md">Teleflora's Pretty Love Bouquet</h3>
              </div>
            </a>
            <div className="hidden lg:block">
              <a className="flex flex-col" href="/">
                <div>
                  <img
                    alt="Teleflora's Pretty Love Bouquet"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent", filter: "invert(2%)" }}
                    src="/images/products/product-5.webp"
                  />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-secondary">${/* */}54.99</h4>
                  <button className="font-secondary text-primary">Buy Now</button>
                  <h3 className="text-md">Teleflora's Pretty Love Bouquet</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const skeleton = async (props: {}) => {
  return <div className="skeleton">Loading...</div>;
};

export default Products;
