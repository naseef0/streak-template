import { Script } from "@naseef0/streak/components";

export const ProductsLiteV2 = async (props: {}) => {
  return (
    <div className="mb-8">
      <div className="container">
        <div>
          <h3 className="text-primary font-secondary text-h4 text-center font-bold italic mt-5 mb-2">LOCAL FLORIST ARRANGED BOUQUETS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-5 pt-5">
            <div className="relative group group w-full h-auto transform scale-100 hover:scale-[1.17] transition-transform duration-300 ease-in-out">
              <img
                alt=""
                loading="lazy"
                width={200}
                height={200}
                decoding="async"
                data-nimg={1}
                className="relative w-full z-0"
                style={{ color: "transparent" }}
                src="/images/LocalFlorist/01.webp"
              />
              <div className="absolute text-center m-[10px] top-0 left-0 w-[90%] h-[90%] hidden group-hover:block bg-white bg-opacity-80 z-10">
                <div className="grid items-center h-full">
                  <div>
                    <p className="font-secondary text-lg">Radiantly Rosy</p>
                    <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 mt-3">
                      BUY IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group group w-full h-auto transform scale-100 hover:scale-[1.17] transition-transform duration-300 ease-in-out">
              <img
                alt=""
                loading="lazy"
                width={200}
                height={200}
                decoding="async"
                data-nimg={1}
                className="relative w-full z-0"
                style={{ color: "transparent" }}
                src="/images/LocalFlorist/01.webp"
              />
              <div className="absolute text-center m-[10px] top-0 left-0 w-[90%] h-[90%] hidden group-hover:block bg-white bg-opacity-80 z-10">
                <div className="grid items-center h-full">
                  <div>
                    <p className="font-secondary text-lg">Radiantly Rosy</p>
                    <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 mt-3">
                      BUY IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group group w-full h-auto transform scale-100 hover:scale-[1.17] transition-transform duration-300 ease-in-out">
              <img
                alt=""
                loading="lazy"
                width={200}
                height={200}
                decoding="async"
                data-nimg={1}
                className="relative w-full z-0"
                style={{ color: "transparent" }}
                src="/images/LocalFlorist/01.webp"
              />
              <div className="absolute text-center m-[10px] top-0 left-0 w-[90%] h-[90%] hidden group-hover:block bg-white bg-opacity-80 z-10">
                <div className="grid items-center h-full">
                  <div>
                    <p className="font-secondary text-lg">Radiantly Rosy</p>
                    <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 mt-3">
                      BUY IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group group w-full h-auto transform scale-100 hover:scale-[1.17] transition-transform duration-300 ease-in-out">
              <img
                alt=""
                loading="lazy"
                width={200}
                height={200}
                decoding="async"
                data-nimg={1}
                className="relative w-full z-0"
                style={{ color: "transparent" }}
                src="/images/LocalFlorist/01.webp"
              />
              <div className="absolute text-center m-[10px] top-0 left-0 w-[90%] h-[90%] hidden group-hover:block bg-white bg-opacity-80 z-10">
                <div className="grid items-center h-full">
                  <div>
                    <p className="font-secondary text-lg">Radiantly Rosy</p>
                    <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 mt-3">
                      BUY IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group group w-full h-auto transform scale-100 hover:scale-[1.17] transition-transform duration-300 ease-in-out">
              <img
                alt=""
                loading="lazy"
                width={200}
                height={200}
                decoding="async"
                data-nimg={1}
                className="relative w-full z-0"
                style={{ color: "transparent" }}
                src="/images/LocalFlorist/01.webp"
              />
              <div className="absolute text-center m-[10px] top-0 left-0 w-[90%] h-[90%] hidden group-hover:block bg-white bg-opacity-80 z-10">
                <div className="grid items-center h-full">
                  <div>
                    <p className="font-secondary text-lg">Radiantly Rosy</p>
                    <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 mt-3">
                      BUY IT
                    </button>
                  </div>
                </div>
              </div>
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

export default ProductsLiteV2;
