import Image from 'next/image';


function Success({ has }) {
  return (
    <div className="h-full lg:flex lg:items-center lg:space-x-12 lg:space-x-24">
      <div className="lg:w-1/2 ">
        <h1 className="font-serif font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Thanks!
        </h1>
        <p className="mt-3 text-lg md:text-xl font-sans">
          {has.digital_fulfillment
            ? "You’ll receive an email with your receipt, and a backup link to re-download your purchase"
            : "You’ll receive an email with your receipt, and tracking information."}
        </p>
      </div>
      <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center">
        <div className="bg-white shadow-thank-you transform -rotate-25 skew-y-12 mx-auto my-24 lg:mt-48 max-w-lg">
          <div className="p-4">
            <Image
              src="/checkout/doesntexist.svg"
              width={384}
              height={126}
              alt="Poly doesn't exist!"
              layout="responsive"
            />
          </div>

          <div className="p-4 pt-0 -mt-4 leading-tight font-sans">
            <p>...if it did, we'd offer you a 100% real store credit, but since it doesn't, we hope you at least had a great shopping experience!</p>
            <div className="mt-6 mb-1 font-serif flex justify-between items-end">
              <Image
                src="/ckeckout/favicon-mix.svg"
                width={48}
                height={48}
                alt="Poly icon"
                layout="responsive"
              />
              <span className="ml-4 text-sm">Thanks for visiting!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
