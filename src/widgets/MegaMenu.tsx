import { Script } from "@naseef0/streak/components";

export const MegaMenu = () => (
  <div className="relative z-20 hidden lg:block w-full border-b border-gray-400 shadow pt-1">
    <div className="container relative">
      <div className="flex items-center justify-between w-full max-w-[940px] mx-auto">
        <nav>
          <ul className="flex items-center whitespace-nowrap">
            <li className="relative group">
              <a className="flex items-center font-secondary uppercase font-semibold py-2 pe-2 hover:text-primary" href="/">
                Same Day
              </a>
            </li>
            <li className="relative group">
              <a
                className="flex items-center font-secondary uppercase font-semibold rounded-tl rounded-tr py-2 px-2 hover:text-white hover:bg-primary group-hover:text-white group-hover:bg-primary"
                href="/"
              >
                Birthday
                <svg className="w-3 h-3 ms-1 mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                  />
                </svg>
              </a>
              <div className="absolute left-0 top-full border-b border-gray-400 bg-white shadow overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300 ease-in-out z-10">
                <div className="flex border-t-4 border-t-primary">
                  <div className="min-w-[235px] border-r border-r-gray-400 p-3">
                    <h3 className="text-md border-b border-gray-400 mb-2">Gifts by Recipient</h3>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Her
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Him
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Kids
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Sweet 16
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Quinceañera
                    </a>
                    <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                      Shop All Birthday
                    </a>
                  </div>
                  <div className="min-w-[235px] border-r border-r-gray-400 p-3">
                    <h3 className="text-md border-b border-gray-400 mb-2">Collections</h3>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Bestsellers
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      New Arrivals
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Plants
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Same-Day Delivery
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a
                className="flex items-center font-secondary uppercase font-semibold rounded-tl rounded-tr py-2 px-2 hover:text-white hover:bg-primary group-hover:text-white group-hover:bg-primary"
                href="/"
              >
                Sympathy
                <svg className="w-3 h-3 ms-1 mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                  />
                </svg>
              </a>
              <div className="absolute left-0 top-full border-b border-gray-400 bg-white shadow overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300 ease-in-out z-10">
                <div className="flex border-t-4 border-t-primary">
                  <div className="min-w-[235px] border-r border-r-gray-400 p-3">
                    <h3 className="text-md border-b border-gray-400 mb-2">Gifts by Recipient</h3>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Her
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Him
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Kids
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Sweet 16
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Quinceañera
                    </a>
                    <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                      Shop All Birthday
                    </a>
                  </div>
                  <div className="min-w-[235px] border-r border-r-gray-400 p-3">
                    <h3 className="text-md border-b border-gray-400 mb-2">Collections</h3>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Bestsellers
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      New Arrivals
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Plants
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Same-Day Delivery
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a
                className="flex items-center font-secondary uppercase font-semibold rounded-tl rounded-tr py-2 px-2 hover:text-white hover:bg-primary group-hover:text-white group-hover:bg-primary"
                href="/"
              >
                Get Well
                <svg className="w-3 h-3 ms-1 mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                  />
                </svg>
              </a>
              <div className="absolute left-0 top-full flex border-b border-gray-400 bg-white shadow overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300 ease-in-out z-10">
                <div className="flex border-t-4 border-t-primary">
                  <div className="min-w-[235px] border-r border-r-gray-400 p-3">
                    <h3 className="text-md border-b border-gray-400 mb-2">Gifts by Recipient</h3>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Her
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Him
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Birthday For Kids
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Sweet 16
                    </a>
                    <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                      Quinceañera
                    </a>
                    <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                      Shop All Birthday
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <a
                className="flex items-center font-secondary uppercase font-semibold rounded-tl rounded-tr py-2 px-2 hover:text-white hover:bg-primary group-hover:text-white group-hover:bg-primary"
                href="/"
              >
                Flowers
                <svg className="w-3 h-3 ms-1 mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                  />
                </svg>
              </a>
              <div className="absolute left-auto right-0 top-full flex border-b border-gray-400 bg-white shadow overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300 ease-in-out z-10">
                <div className="min-w-[235px] border-t-4 border-t-primary border-r border-r-gray-400 p-3">
                  <h3 className="text-md border-b border-gray-400 mb-2">Gifts by Recipient</h3>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Birthday For Her
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Birthday For Him
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Birthday For Kids
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Sweet 16
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Quinceañera
                  </a>
                  <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                    Shop All Birthday
                  </a>
                </div>
                <div className="min-w-[235px] border-t-4 border-t-primary border-r border-r-gray-400 p-3">
                  <h3 className="text-md border-b border-gray-400 mb-2">Color</h3>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    <div className="w-6 h-6 me-2 bg-[#005ec8]" />
                    Blue Flowers
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    <div className="w-6 h-6 me-2 bg-[#04ac63]" />
                    Green color
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    <div className="w-6 h-6 me-2 bg-[#f5f2dc]" />
                    Neutral Flowers
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    <div className="w-6 h-6 me-2 bg-[#ff7800]" />
                    Orange Flowers
                  </a>
                </div>
                <div className="min-w-[235px] border-t-4 border-t-primary border-r border-r-gray-400 p-3">
                  <h3 className="text-md border-b border-gray-400 mb-2">Gifts by Recipient</h3>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Birthday For Her
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Birthday For Him
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Birthday For Kids
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Sweet 16
                  </a>
                  <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                    Quinceañera
                  </a>
                  <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                    Shop All Birthday
                  </a>
                </div>
              </div>
            </li>
            <li className="group">
              <a
                className="flex items-center font-secondary uppercase font-semibold rounded-tl rounded-tr py-2 px-2 hover:text-white hover:bg-primary group-hover:text-white group-hover:bg-primary"
                href="/"
              >
                Occasions
                <svg className="w-3 h-3 ms-1 mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                  />
                </svg>
              </a>
              <div className="absolute left-auto right-0 top-full flex border-b border-gray-400 bg-white shadow overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300 ease-in-out z-10">
                <div className="flex flex-col border-t-4 border-t-primary border-r border-r-gray-400 p-3">
                  <h3 className="text-md border-b border-gray-400">Featured Occasions</h3>
                  <div className="flex">
                    <div className="min-w-[235px] py-2">
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Birthday For Her
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Birthday For Him
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Birthday For Kids
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Sweet 16
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Quinceañera
                      </a>
                      <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                        Shop All Birthday
                      </a>
                    </div>
                    <div className="min-w-[235px] py-2">
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Birthday For Her
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Birthday For Him
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Birthday For Kids
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Sweet 16
                      </a>
                      <a className="flex items-center font-secondary uppercase hover:text-primary py-2" href="/">
                        Quinceañera
                      </a>
                      <a className="block font-secondary text-primary py-2 hover:underline" href="/">
                        Shop All Birthday
                      </a>
                    </div>
                  </div>
                </div>
                <div className="min-w-[235px] border-t-4 border-t-primary border-r border-r-gray-400 p-3">
                  <h3 className="text-md border-b border-gray-400 mb-2">Upcoming Occasions</h3>
                  <div className="flex font-secondary uppercase py-1">
                    <div className="flex flex-col w-[35px] h-35px text-center me-2">
                      <span className="text-white bg-primary">Mar</span>
                      <span className="text-lg border border-gray-300">17</span>
                    </div>
                    <a className="flex hover:text-primary" href="/">
                      St. Patrick's Day
                    </a>
                  </div>
                  <div className="flex font-secondary uppercase py-1">
                    <div className="flex flex-col w-[35px] h-35px text-center me-2">
                      <span className="text-white bg-primary">Mar</span>
                      <span className="text-lg border border-gray-300">17</span>
                    </div>
                    <a className="flex hover:text-primary" href="/">
                      First Day of Spring
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a className="flex items-center h-5 font-secondary uppercase font-semibold text-white ms-2 rounded bg-primary px-2 py-1" href="/">
                Order Status
              </a>
            </li>
          </ul>
        </nav>
        <link rel="prload" href="/images/logo.png" as="image" />
        <link rel="prload" href="/images/logo2.png" as="image" />
        <div className="-mt-1 relative">
          <div className="flex items-stretch h-[25px]">
            <div className="text-md text-white border border-primary border-r-0 whitespace-nowrap bg-primary rounded rounded-r-none px-1">In a hurry?</div>
            <input
              type="text"
              placeholder="Recipient Zip"
              className="w-[90px] font-secondary border border-primary border-l-0 placeholder:text-gray-700 bg-white rounded rounded-l-none focus:outline-none px-1"
            />
          </div>
        </div>
      </div>
    </div>
    <Script id="mega-menu-script">
      {() => {
        console.info("MegaMenu script loaded");
      }}
    </Script>
  </div>
);

export const skeleton = () => <div className="skeleton">Loading...</div>;

export default MegaMenu;
