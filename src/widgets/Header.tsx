import { Dynamic, Script } from "@naseef0/streak/components";

export const Header = () => (
  <header className="w-full h-[60px] max-lg:shadow-md bg-white">
    <div className="container h-full">
      <nav className="flex items-center lg:items-end w-full max-w-[940px] h-full mx-auto lg:pb-3">
        <div className="flex items-center">
          <a className="lg:hidden me-4" href="/" id="mobile-menu-button">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 272c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24L24 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z"
              />
            </svg>
          </a>
          <a href="/">
            <img
              alt="Teleflora Logo"
              loading="lazy"
              width={350}
              height={80}
              decoding="async"
              data-nimg={1}
              className="max-w-[110px] md:max-w-[120px] h-auto"
              style={{ color: "transparent" }}
              src="/images/teleflora-logo.webp"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4 xl:gap-5">
          <a className="hidden xl:inline text-gray-700 font-secondary" href="/">
            International Delivery
          </a>
          <a className="hidden xl:inline text-gray-700 font-secondary" href="/">
            (800) 493-5610
          </a>
          <a className="hidden xl:inline text-primary font-secondary" href="/">
            Need Help?
          </a>
          <a className="lg:hidden" href="/">
            <svg className="text-gray-700 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                fill="currentColor"
                d="M352 48c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-32 0-76.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L64 368c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l288 0zm32 368c0 53 43 96 96 96s96-43 96-96l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-122.7c0-14.9-5.9-29.1-16.4-39.6l-93.3-93.3C487.8 101.9 473.6 96 458.7 96L416 96l0-32c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64c0 53 43 96 96 96s96-43 96-96l64 0 32 0 24 0 8 0zM557.7 239.6c.1 .1 .3 .3 .4 .4l-142 0 0-96 42.7 0c2.1 0 4.2 .8 5.7 2.3l93.3 93.3zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </a>
          <a className="lg:hidden" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" className="text-gray-700 w-4 h-4">
              <path
                d="M9.78123 19.5454C4.38776 19.5454 0 15.1614 0 9.77276C0 7.39226 0.866509 5.09859 2.44031 3.31419C4.29789 1.2079 6.97357 0 9.78126 0C15.1747 0 19.5628 4.38407 19.5628 9.77276C19.5628 15.1614 15.1747 19.5454 9.78123 19.5454ZM9.78123 2.49994C7.69171 2.49994 5.70042 3.39915 4.31763 4.96699C3.14701 6.29448 2.50215 8.00122 2.50215 9.77276C2.50215 13.783 5.76742 17.0454 9.78123 17.0454C13.795 17.0454 17.0606 13.783 17.0606 9.77276C17.0606 5.76248 13.795 2.49994 9.78123 2.49994Z"
                fill="currentColor"
              />
              <path
                d="M23.7484 24.9998C23.4283 24.9998 23.1079 24.8777 22.8636 24.6336L16.6807 18.455C16.1922 17.9669 16.1925 17.1753 16.681 16.6872C17.1695 16.1991 17.9619 16.1994 18.4504 16.6875L24.6333 22.8661C25.1218 23.3542 25.1215 24.1458 24.633 24.6339C24.3887 24.878 24.0686 24.9998 23.7484 24.9998Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <div className="relative">
            <button className="flex items-center text-gray-700 font-secondary">
              <svg className="text-gray-700 w-4 h-4 me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
              <span className="hidden lg:block">Log In</span>
            </button>
            <div
              className="fixed max-lg:right-0 max-lg:left-0 bg-white w-[323px] max-lg:w-full font-secondary mt-2 max-lg:mt-[19px] border border-gray-300 max-lg:border-l-0 max-lg:border-r-0 shadow-md py-6 px-8 z-30 transition-all duration-300 ease-out transform
            opacity-0 translate-y-5 pointer-events-none"
            >
              <div>
                <label className="block text-gray-600 mb-1">* EMAIL</label>
                <input
                  type="search"
                  className="border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-700 h-[40px] text-base px-3 w-full"
                />
              </div>
              <div className="mt-3">
                <label className="block text-gray-600 mb-1">* PASSWORD</label>
                <input
                  type="search"
                  className="border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-700 h-[40px] text-base px-3 w-full"
                />
              </div>
              <div className="mt-6">
                <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 w-full">
                  LOG IN TO ACCOUNT
                </button>
              </div>
              <div className="my-3">
                <button className="w-full text-primary py-1">FORGOT PASSWORD</button>
              </div>
              <hr className="border-gray-300" />
              <div className="mt-3">
                <button className="bg-primary text-white hover:bg-primary-dark hover:text-white active:primary-dark active:text-white focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 w-full">
                  CREATE A NEW ACCOUNT
                </button>
              </div>
            </div>
          </div>
          <a href="/">
            <svg className="text-gray-700 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
              />
            </svg>
          </a>
          <div className="relative hidden lg:block">
            <div className="relative">
              <input
                type="search"
                className="border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-700 h-[26px] text-sm rounded px-2 w-[234px] pe-8 font-secondary"
                placeholder="Search"
                defaultValue=""
              />
              <button className="absolute right-0 top-0 h-full px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" className="text-gray-700 w-4 h-4">
                  <path
                    d="M9.78123 19.5454C4.38776 19.5454 0 15.1614 0 9.77276C0 7.39226 0.866509 5.09859 2.44031 3.31419C4.29789 1.2079 6.97357 0 9.78126 0C15.1747 0 19.5628 4.38407 19.5628 9.77276C19.5628 15.1614 15.1747 19.5454 9.78123 19.5454ZM9.78123 2.49994C7.69171 2.49994 5.70042 3.39915 4.31763 4.96699C3.14701 6.29448 2.50215 8.00122 2.50215 9.77276C2.50215 13.783 5.76742 17.0454 9.78123 17.0454C13.795 17.0454 17.0606 13.783 17.0606 9.77276C17.0606 5.76248 13.795 2.49994 9.78123 2.49994Z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.7484 24.9998C23.4283 24.9998 23.1079 24.8777 22.8636 24.6336L16.6807 18.455C16.1922 17.9669 16.1925 17.1753 16.681 16.6872C17.1695 16.1991 17.9619 16.1994 18.4504 16.6875L24.6333 22.8661C25.1218 23.3542 25.1215 24.1458 24.633 24.6339C24.3887 24.878 24.0686 24.9998 23.7484 24.9998Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <Dynamic id="MobileMenu">
            <div className="fixed left-0 top-0 z-20 flex w-full h-full max-w-[254px] flex-col border-t-[3px] border-t-primary border-r border-r-gray-400 shadow-md bg-white overflow-x-hidden overflow-y-auto transition-transform duration-300 -translate-x-full">
              <div className="flex h-full max-h-screen flex-col font-secondary overflow-auto">
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-3" href="/">
                  <h3 className="uppercase">Same Day</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Birthday</h3>
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path
                      d="M0.180076 0.180454C-0.0601407 0.420887 -0.0600104 0.810557 0.180422 1.05077L5.13386 5.99998L0.180422 
10.9493C-0.0600106 11.1895 -0.0601552 11.5792 0.180076 11.8196C0.420292 12.06 0.80996 12.0602 1.05032 11.8199L6.43946 6.43534C6.55503 6.31992 6.6199 6.16329 6.6199 5.99997C6.6199 5.83664 6.55503 5.68009 6.43946 5.56466L1.05032 0.180023C0.809961 -0.0601215 0.420292 -0.0599785 0.180076 0.180454Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Sympathy</h3>
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path
                      d="M0.180076 0.180454C-0.0601407 0.420887 -0.0600104 0.810557 0.180422 1.05077L5.13386 5.99998L0.180422 10.9493C-0.0600106 11.1895 -0.0601552 11.5792 0.180076 11.8196C0.420292 12.06 0.80996 12.0602 1.05032 11.8199L6.43946 6.43534C6.55503 6.31992 6.6199 6.16329 6.6199 5.99997C6.6199 5.83664 6.55503 5.68009 6.43946 5.56466L1.05032 0.180023C0.809961 -0.0601215 0.420292 -0.0599785 0.180076 0.180454Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Get Well</h3>
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path
                      d="M0.180076 0.180454C-0.0601407 0.420887 -0.0600104 0.810557 0.180422 1.05077L5.13386 5.99998L0.180422 10.9493C-0.0600106 11.1895 -0.0601552 11.5792 0.180076 11.8196C0.420292 12.06 0.80996 12.0602 1.05032 11.8199L6.43946 6.43534C6.55503 6.31992 6.6199 6.16329 6.6199 5.99997C6.6199 5.83664 6.55503 5.68009 6.43946 5.56466L1.05032 0.180023C0.809961 -0.0601215 0.420292 -0.0599785 0.180076 0.180454Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Flowers</h3>
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path
                      d="M0.180076 0.180454C-0.0601407 0.420887 -0.0600104 0.810557 0.180422 1.05077L5.13386 5.99998L0.180422 10.9493C-0.0600106 11.1895 -0.0601552 11.5792 0.180076 11.8196C0.420292 12.06 0.80996 12.0602 1.05032 11.8199L6.43946 6.43534C6.55503 6.31992 6.6199 6.16329 6.6199 5.99997C6.6199 5.83664 6.55503 5.68009 6.43946 5.56466L1.05032 0.180023C0.809961 -0.0601215 0.420292 -0.0599785 0.180076 0.180454Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Occasions</h3>
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path
                      d="M0.180076 0.180454C-0.0601407 0.420887 -0.0600104 0.810557 0.180422 1.05077L5.13386 5.99998L0.180422 10.9493C-0.0600106 11.1895 -0.0601552 11.5792 0.180076 11.8196C0.420292 12.06 0.80996 12.0602 1.05032 11.8199L6.43946 6.43534C6.55503 6.31992 6.6199 6.16329 6.6199 5.99997C6.6199 5.83664 6.55503 5.68009 6.43946 5.56466L1.05032 0.180023C0.809961 -0.0601215 0.420292 -0.0599785 0.180076 0.180454Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="flex flex-col justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-4" href="/">
                  <h3 className="font-bold text-primary md:text-md uppercase">Occasions</h3>
                  <h3 className="text-primary md:text-md uppercase mt-3">In a Hurry?</h3>
                </a>
                <div className="flex items-center justify-between border-t border-t-gray-400 bg-gray-100 py-1 px-3">
                  <h3 className="text-[14px]">Customer Service</h3>
                </div>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">E-Mail Us</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="tel:(800) 493-5610">
                  <h3 className="uppercase">(800) 493-5610</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">International Delivery</h3>
                </a>
              </div>
              <div
                className="absolute top-0 w-full h-full font-secondary bg-white transition-transform duration-300 
      translate-x-full"
              >
                <a className="flex items-center text-primary font-bold py-2 px-3" href="/">
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                    <path
                      d="M6.81992 11.8196C7.06014 11.5791 7.06001 11.1895 6.81958 10.9493L1.86614 6.00005L6.81958 1.05071C7.06001 0.810566 7.06016 0.420825 6.81992 0.180465C6.57971 -0.0599683 6.19004 -0.0601851 5.94968 0.180118L0.560537 5.56469C0.444965 5.68011 0.380103 5.83674 0.380103 6.00006C0.380103 6.16339 0.444965 6.31994 0.560537 6.43537L5.94968 11.82C6.19004 12.0602 6.57971 12.06 6.81992 11.8196Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="-mb-1">Main Menu</span>
                </a>
                <div className="flex items-center justify-between border-t border-t-gray-400 bg-gray-100 py-1 px-3">
                  <h3 className="text-[14px]">Gifts by Recipient</h3>
                </div>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Birthday For Her</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Birthday For Him</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Birthday For Kids</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="text-primary text-md">Shop All Birthday</h3>
                </a>
                <div className="flex items-center justify-between border-t border-t-gray-400 bg-gray-100 py-1 px-3">
                  <h3 className="text-[14px]">Collections</h3>
                </div>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">Bestsellers</h3>
                </a>
                <a className="flex items-center justify-between hover:text-primary border-t border-t-gray-400 py-2 px-2 ps-8" href="/">
                  <h3 className="uppercase">New Arrivals</h3>
                </a>
              </div>
            </div>
          </Dynamic>
        </div>
      </nav>
    </div>

    <Script id="widget-header">
      {(gDom) => {
        const toggleButton = document.querySelector("#mobile-menu-button");

        const toggleMobileMenu = () => {
          const isMenuOpen = document.body.getAttribute("data-menu-open") === "true";
          if (isMenuOpen) {
            document.body.style = `transform: translateX(0px);
              transition-duration: 300ms;
              position: relative;
              width: unset;
              overflow: unset;`;
            document.body.setAttribute("data-menu-open", "false");
          } else {
            document.body.style = `transform: translateX(255px);
              transition-duration: 300ms;
              position: fixed;
              width: 100vw;
              overflow: hidden;`;
            document.body.setAttribute("data-menu-open", "true");
          }
        };

        toggleButton?.addEventListener("click", (events) => {
          events.preventDefault();
          gDom.loadDynamicComponent("MobileMenu", (menu: HTMLElement) => {
            toggleMobileMenu();
          });
        });

        gDom
          .loadPackage("js/swiper-bundle.min.js")
          .then(() => {
            console.log({ Swiper: typeof gDom.Swiper });
          })
          .catch((err: Error) => {
            console.log({ err });
          });
      }}
    </Script>
  </header>
);

export const skeleton = async (props: {}) => {
  return <div className="skeleton">Loading...</div>;
};

export default Header;
