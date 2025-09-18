const Footer = () => (
  <footer id="hideFooter" className="bg-gray-100 border-t border-gray-200">
    <div className="container">
      <div className="grid grid-cols-1 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-400 pb-4">
          <div className="w-full md:w-3/4 border-b md:border-none border-gray-400 mt-6 md:mt-0 pb-3 md:pb-0">
            <p className="text-md font-bold mb-1">Join The Club!</p>
            <p className="text-base mb-5">Receive Teleflora emails and be the first to know about exclusive offers, promotions, and more.</p>
            <div className="flex">
              <input
                type="text"
                className="w-full border border-gray-300 placeholder:text-gray-700 placeholder:text-base focus:outline-none text-sm px-3 py-2 rounded h-[40px] opacity-100 border-r-0 bg-white rounded-r-none"
                placeholder="Enter E-Mail Address"
              />
              <button className="bg-gray-200 text-secondary hover:bg-gray-300 hover:text-secondary active:gray-300 active:text-secondary focus:outline-none font-secondary font-semibold px-4 py-2 text-sm rounded h-[40px] opacity-100 rounded-l-none border border-gray-300">
                GO
              </button>
            </div>
          </div>
          <div className="border-b md:border-none border-gray-400 mt-10 md:mt-0 pb-3 md:pb-0">
            <p className="text-md font-bold mb-1">Connect with Teleflora</p>
            <p className="text-base mb-5">Get the latest news and offers.</p>
            <div className="flex items-center justify-start space-x-4 mb-3">
              <a href="https://www.facebook.com/teleflora">
                <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512">
                  <path
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/">
                <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path
                    d="M20.0265 5.8812C19.9795 4.81831 19.8071 4.08759 19.5601 3.45441C19.3054 2.7823 18.9134 2.18057 18.3999 1.68034C17.8982 1.17233 17.2907 0.777585 16.6243 0.527549C15.9856 0.281329 15.2565 0.109448 14.1904 0.0625854C13.1164 0.0117538 12.7755 0 10.0514 0C7.32739 0 6.98643 0.0117538 5.91638 0.0586166C4.85032 0.105479 4.11741 0.277513 3.48248 0.52358C2.80821 0.777585 2.20467 1.16836 1.70295 1.68034C1.19342 2.18057 0.797645 2.78627 0.546707 3.45059C0.299749 4.08759 0.127354 4.81434 0.0803509 5.87723C0.0293671 6.94805 0.0175781 7.28799 0.0175781 10.0039C0.0175781 12.7198 0.0293671 13.0597 0.0763702 14.1266C0.123373 15.1895 0.295922 15.9202 0.542879 16.5534C0.797645 17.2255 1.19342 17.8272 1.70295 18.3274C2.20467 18.8355 2.81219 19.2302 3.4785 19.4802C4.11741 19.7265 4.84634 19.8983 5.91255 19.9452C6.98245 19.9922 7.32356 20.0038 10.0476 20.0038C12.7716 20.0038 13.1126 19.9922 14.1826 19.9452C15.2487 19.8983 15.9816 19.7265 16.6165 19.4802C17.9649 18.9605 19.031 17.8976 19.5523 16.5534C19.7991 15.9164 19.9717 15.1895 20.0187 14.1266C20.0657 13.0597 20.0775 12.7198 20.0775 10.0039C20.0775 7.28799 20.0735 6.94805 20.0265 5.8812ZM18.2197 14.0484C18.1765 15.0254 18.0119 15.5529 17.8747 15.9046C17.5376 16.7761 16.8439 17.4677 15.9698 17.8039C15.6171 17.9406 15.0841 18.1047 14.1081 18.1476C13.0498 18.1946 12.7324 18.2062 10.0554 18.2062C7.37837 18.2062 7.05701 18.1946 6.00258 18.1476C5.02271 18.1047 4.49358 17.9406 4.14083 17.8039C3.70586 17.6436 3.30993 17.3896 2.98857 17.0574C2.65541 16.733 2.40065 16.3423 2.23989 15.9086C2.10271 15.5569 1.93812 15.0254 1.8951 14.0524C1.84794 12.9973 1.8363 12.6807 1.8363 10.0117C1.8363 7.34264 1.84794 7.02223 1.8951 5.9711C1.93812 4.99416 2.10271 4.46661 2.23989 4.11491C2.40065 3.68109 2.65541 3.2865 2.99255 2.96594C3.31774 2.63378 3.70969 2.37977 4.14481 2.21964C4.49756 2.08287 5.03067 1.91878 6.00656 1.87573C7.06482 1.82887 7.38236 1.81711 10.0592 1.81711C12.7402 1.81711 13.0576 1.82887 14.1121 1.87573C15.0919 1.91878 15.6211 2.08287 15.9738 2.21964C16.4088 2.37977 16.8047 2.63378 17.1261 2.96594C17.4592 3.29031 17.714 3.68109 17.8747 4.11491C18.0119 4.46661 18.1765 4.99798 18.2197 5.9711C18.2667 7.0262 18.2785 7.34264 18.2785 10.0117C18.2785 12.6807 18.2667 12.9933 18.2197 14.0484Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.0514 4.86518C7.20598 4.86518 4.89732 7.16679 4.89732 10.0039C4.89732 12.841 7.20598 15.1426 10.0514 15.1426C12.897 15.1426 15.2055 12.841 15.2055 10.0039C15.2055 7.16679 12.897 4.86518 10.0514 4.86518ZM10.0514 13.3373C8.20544 13.3373 6.70808 11.8445 6.70808 10.0039C6.70808 8.16327 8.20544 6.67053 10.0514 6.67053C11.8976 6.67053 13.3948 8.16327 13.3948 10.0039C13.3948 11.8445 11.8976 13.3373 10.0514 13.3373Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.6127 4.662C16.6127 5.32449 16.0739 5.86166 15.4093 5.86166C14.7448 5.86166 14.2061 5.32449 14.2061 4.662C14.2061 3.99936 14.7448 3.46235 15.4093 3.46235C16.0739 3.46235 16.6127 3.99936 16.6127 4.662Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://www.tiktok.com">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path
                    d="M25 10.8452V14.2914C24.408 14.2333 23.6417 14.0962 22.7909 13.7784C21.6813 13.3639 20.855 12.7968 20.3149 12.3575V19.3247L20.3017 19.3029C20.3108 19.441 20.3149 19.5812 20.3149 19.7235C20.3149 23.1843 17.5536 26 14.1575 26C10.7613 26 8 23.1832 8 19.7235C8 16.2638 10.7613 13.446 14.1575 13.446C14.4896 13.446 14.8157 13.473 15.1346 13.5249V16.9223C14.8279 16.8101 14.4998 16.7499 14.1575 16.7499C12.5496 16.7499 11.2402 18.0835 11.2402 19.7235C11.2402 21.3635 12.5496 22.6971 14.1575 22.6971C15.7653 22.6971 17.0747 21.3625 17.0747 19.7235C17.0747 19.6622 17.0737 19.601 17.0696 19.5397V6H20.4494C20.4616 6.29186 20.4739 6.58579 20.4851 6.87765C20.5075 7.45201 20.7082 8.00353 21.0577 8.45534C21.4683 8.98608 22.0736 9.60303 22.9254 10.0953C23.7222 10.5555 24.4701 10.7528 25 10.8463V10.8452Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/teleflora">
                <svg width={24} height={17} viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path
                    d="M22.6082 2.51984C22.3424 1.53451 21.5632 0.757777 20.575 0.492457C18.7698 0 11.5488 0 11.5488 0C11.5488 0 4.3281 0 2.52289 0.473786C1.55375 0.738826 0.755546 1.53465 0.489713 2.51984C0.0146484 4.31953 0.0146484 8.05184 0.0146484 8.05184C0.0146484 8.05184 0.0146484 11.803 0.489713 13.5838C0.755827 14.569 1.53474 15.3458 2.52303 15.6111C4.34711 16.1037 11.5491 16.1037 11.5491 16.1037C11.5491 16.1037 18.7698 16.1037 20.575 15.6299C21.5633 15.3647 22.3424 14.588 22.6085 13.6028C23.0834 11.803 23.0834 8.07079 23.0834 8.07079C23.0834 8.07079 23.1024 4.31953 22.6082 2.51984ZM9.24981 11.4999V4.6038L15.2544 8.05184L9.24981 11.4999Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <a href="https://apps.apple.com/us/app/teleflora-flower-delivery/id6443734812">
              <img alt="" loading="lazy" width={112} height={46} decoding="async" data-nimg={1} style={{ color: "transparent" }} src="/images/app-store.png" />
            </a>
          </div>
          <div>
            <p className="text-md font-bold mb-1 mt-4 md:mt-0">Get Rewarded!</p>
            <p className="text-base mb-5">Earn rewards like discounts and free bouquets.</p>
            <a>
              <img
                alt=""
                loading="lazy"
                width={230}
                height={25}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src="/images/payment/reward.svg"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 grid-auto-cols-[30%] gap-x-4 md:pt-4">
          <div>
            <div className="mt-4 md:mt-0 md:mb-1">
              <h3 className="text-base md:text-md">Our Company</h3>
            </div>
            <div>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                About Us
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Careers
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Our Services
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Partnership Program
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Affiliate Program
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Become a Teleflora Florist
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Feedback
              </a>
            </div>
          </div>
          <div>
            <div className="mt-4 md:mt-0 md:mb-1">
              <h3 className="text-base md:text-md">Flower Guides</h3>
            </div>
            <div>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Corporate Gifting
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Floral Facts &amp; Inspiration
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Gift Giving Guides
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Sympathy &amp; Funeral Guide
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Wedding Flower Guide
              </a>
            </div>
          </div>
          <div>
            <div className="mt-4 md:mt-0 md:mb-1">
              <h3 className="text-base md:text-md">Shop Teleflora</h3>
            </div>
            <div>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Find a Florist
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Local Flower Delivery
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Same-Day Flower Delivery
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                International Flower Delivery
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Send Flowers to Mexico
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Military Discount
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                First Responders Discount
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Compra en Español
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Acheter en Français
              </a>
            </div>
          </div>
          <div>
            <div className="mt-4 md:mt-0 md:mb-1">
              <h3 className="text-base md:text-md">Shop By Category</h3>
            </div>
            <div>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Valentine's Day Flowers
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Easter Flowers
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Mother’s Day Flowers
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Thanksgiving Flowers
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Christmas Flowers
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Funeral &amp; Sympathy
              </a>
              <div className="flex items-center">
                <div className="cursor-pointer block font-secondary text-base text-gray-700 py-1 me-1">Shop by Occasion</div>
                <svg className="text-gray-700 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <defs>
                    <clipPath id="clip-plus">
                      <rect width={14} height={14} />
                    </clipPath>
                  </defs>
                  <g id="plus" clipPath="url(#clip-plus)">
                    <g id="Component_1_1" data-name="Component 1 – 1">
                      <g id="Group_38122" data-name="Group 38122">
                        <path
                          id="Line_3"
                          data-name="Line 3"
                          d="M18,23.586a1,1,0,0,1-1-1V10.565a1,1,0,1,1,2,0V22.586A1,1,0,0,1,18,23.586Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                        <path
                          id="Line_4"
                          data-name="Line 4"
                          d="M24,17.576H12a1,1,0,0,1,0-2H24a1,1,0,1,1,0,2Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="cursor-pointer block font-secondary text-base text-gray-700 py-1 me-1">Birthday Flowers</div>
                <svg className="text-gray-700 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <defs>
                    <clipPath id="clip-plus">
                      <rect width={14} height={14} />
                    </clipPath>
                  </defs>
                  <g id="plus" clipPath="url(#clip-plus)">
                    <g id="Component_1_1" data-name="Component 1 – 1">
                      <g id="Group_38122" data-name="Group 38122">
                        <path
                          id="Line_3"
                          data-name="Line 3"
                          d="M18,23.586a1,1,0,0,1-1-1V10.565a1,1,0,1,1,2,0V22.586A1,1,0,0,1,18,23.586Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                        <path
                          id="Line_4"
                          data-name="Line 4"
                          d="M24,17.576H12a1,1,0,0,1,0-2H24a1,1,0,1,1,0,2Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="cursor-pointer block font-secondary text-base text-gray-700 py-1 me-1">Shop More Holidays</div>
                <svg className="text-gray-700 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <defs>
                    <clipPath id="clip-plus">
                      <rect width={14} height={14} />
                    </clipPath>
                  </defs>
                  <g id="plus" clipPath="url(#clip-plus)">
                    <g id="Component_1_1" data-name="Component 1 – 1">
                      <g id="Group_38122" data-name="Group 38122">
                        <path
                          id="Line_3"
                          data-name="Line 3"
                          d="M18,23.586a1,1,0,0,1-1-1V10.565a1,1,0,1,1,2,0V22.586A1,1,0,0,1,18,23.586Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                        <path
                          id="Line_4"
                          data-name="Line 4"
                          d="M24,17.576H12a1,1,0,0,1,0-2H24a1,1,0,1,1,0,2Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="cursor-pointer block font-secondary text-base text-gray-700 py-1 me-1">Seasonal Bouquets</div>
                <svg className="text-gray-700 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <defs>
                    <clipPath id="clip-plus">
                      <rect width={14} height={14} />
                    </clipPath>
                  </defs>
                  <g id="plus" clipPath="url(#clip-plus)">
                    <g id="Component_1_1" data-name="Component 1 – 1">
                      <g id="Group_38122" data-name="Group 38122">
                        <path
                          id="Line_3"
                          data-name="Line 3"
                          d="M18,23.586a1,1,0,0,1-1-1V10.565a1,1,0,1,1,2,0V22.586A1,1,0,0,1,18,23.586Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                        <path
                          id="Line_4"
                          data-name="Line 4"
                          d="M24,17.576H12a1,1,0,0,1,0-2H24a1,1,0,1,1,0,2Z"
                          transform="translate(-11 -9.565)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4 md:mt-0 md:mb-1">
              <h3 className="text-base md:text-md">Help</h3>
            </div>
            <div>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Order Status
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Customer FAQs
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Order &amp; Delivery Info
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Chat with an Expert
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Contact Customer Service
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Privacy Policy
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                UNSUBSCRIBE
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Terms of Use
              </a>
              <a className="block font-secondary text-base text-gray-700 hover:underline py-1" href="/">
                Sitemap
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <div className="relative">
              <label htmlFor="lan" className="block font-secondary text-gray-700 my-2">
                CHANGE LANGUAGE:
              </label>
              <div className="relative inline-block h-10 min-w-[190px] relative font-secondary after:content-[''] after:absolute after:w-[1px] after:h-full after:bg-gray-300 after:right-9 after:top-0">
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-start rounded-lg focus:outline-none border cursor-pointer bg-gray-100 border-gray-300 rounded-sm px-[10px] py-2 h-[40px]"
                >
                  <span className="flex items-center leading-tight">English</span>
                  <span className="absolute right-0 top-0 flex items-center h-full border-l border-l-gray-300 px-3">
                    <span className="transition-transform duration-200" style={{ transform: "rotate(0deg)" }}>
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                        />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-6 items-center gap-x-2 justify-center">
            <p className="font-secondary text-gray-500 text-sm text-center">Your Ads Privacy Choices</p>
            <img alt="" loading="lazy" width={16} height={16} decoding="async" data-nimg={1} style={{ color: "transparent" }} src="/images/cookie_icon.webp" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const skeleton = () => <div className="skeleton">Loading...</div>;

export default Footer;
