import { Script } from "@naseef0/streak/components";

export const SeoDescription = async (props: {}) => {
  return (
    <div className="my-16">
      <div className="container">
        <div>
          <p className="text-h5 md:border-b border-gray-400 mt-4 pb-3">Teleflora: Same-Day Local Flower Delivery &amp; More</p>
          <p className="text-md mt-4"> {/* */}Flowers Online: Bouquets Arranged by Local Florists</p>
          <p className="mt-4">
            Teleflora is proud to offer beautiful flowers that are always arranged by expert local florists! We make it easy to order flowers online and we
            offer flower delivery right to your loved one’s door. If you need to order plants or flower arrangements last-minute, we have{/* */}{" "}
            <a className="text-primary" href="/">
              same-day flower delivery
            </a>{" "}
            {/* */}available. In some circumstances, pick-up from the florist may also be available.
          </p>
          <p className="text-md mt-4">Order Flowers for Loved Ones for Any Occasion</p>
          <p className="mt-4">
            We will help you gift{/* */}{" "}
            <a className="text-primary" href="/">
              happy birthday flowers
            </a>
            ,{/* */}{" "}
            <a className="text-primary" href="/">
              get well bouquets
            </a>
            ,{/* */}{" "}
            <a className="text-primary" href="/">
              funeral flowers
            </a>
            , and order everyday beautiful florals or plants just because. huge variety of fresh, local flower arrangements, we're sure you'll be you'll be able
            to find the right flowers for just about anyone!
          </p>
          <p className="mt-2">
            If you don't know what flowers to order, you can shop{/* */}{" "}
            <a className="text-primary" href="/">
              flowers by type
            </a>
            , and choose from roses, carnations, daisies, tulips, lilies, and more. Visit the
            <a className="text-primary" href="/">
              meaning of flowers
            </a>
            , glossary so you know exactly what you're saying with your flower gifts.
          </p>
          <p className="text-md mt-4">Online Deals for Flowers Near You</p>
          <p className="mt-4">
            If you're looking for the best{/* */}{" "}
            <a className="text-primary" href="/">
              promo codes and deals{/* */}{" "}
            </a>
            for online flowers or same-day delivery, we've got you covered! In addition to Teleflora coupons, we also have{/* */}{" "}
            <a className="text-primary" href="/">
              Deal of the Day{/* */}{" "}
            </a>
            bouquets. You pick a price and a local florist will create a one-of-a-kind flower arrangement with their own signature style using the season’s
            freshest blooms!
          </p>
          <p className="text-md mt-4">Ordering Flowers Online: Frequently Asked Questions</p>
          <p className="text-md mt-4">Who Offers the Best Local Flower Delivery Online?</p>
          <p className="mt-4">
            Teleflora has the best local flower delivery available because we work with over 10,000 local florists all around the country to bring you
            locally-arranged bouquets. So, know that every bouquet you order from us supports a small business near you or your loved one. We couldn’t do it
            without our amazing florists! If you choose bouquet delivery online, your gift will be hand-delivered to your recipient with the utmost care. In
            some circumstances, pick-up from the florist may also be available.
          </p>
          <p className="text-md mt-4">Do You Have Same-Day Flower Delivery for Last Minute Gifts?</p>
          <p className="mt-4">
            Same-day delivery is available on many of our flower arrangements! So, whether you choose to send flowers in advance or need a last-minute gift
            delivery, we’ve got you covered with the freshest flowers available!
          </p>
          <p className="text-md mt-4">How Much Does Sending Flowers Online Cost?</p>
          <p className="mt-4">
            We have fresh flower arrangements and plants for every budget and occasion, so you never have to worry about not being able to find something for
            your loved ones. Plus, our Deal of the Day bouquets allows you to name your own bouquet price for a one-of-a-kind arrangement.
          </p>
        </div>
      </div>
    </div>
  );
};

export const skeleton = async (props: {}) => {
  return <div className="skeleton">Loading...</div>;
};

export default SeoDescription;
