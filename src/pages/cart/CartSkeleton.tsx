const CartSkeleton = () => {
  // We'll show 3 product placeholders in the cart
  const skeletonProducts = Array.from({ length: 3 });

  return (
    <div className="my-10 flex flex-col flex-1 animate-pulse">
      <div className="custom-container flex flex-col flex-1">
        {/* 1. Title Skeleton (Matching the white rounded box) */}
        <div className="mb-10 w-64 h-[60px] bg-white rounded-lg max-md:mx-auto shadow-sm"></div>

        <div className="grid grid-cols-5 gap-10">
          {/* 2. Cart Products Section Skeleton */}
          <div className="bg-blue-100 p-5 rounded-lg flex flex-col gap-5 h-[75vh] col-span-5 xl:col-span-3">
            {skeletonProducts.map((_, index) => (
              <div
                key={index}
                className="relative bg-white p-5 rounded-lg grid grid-cols-5 place-items-center gap-5"
              >
                {/* Product Image Placeholder */}
                <div className="w-20 h-24 bg-blue-50 rounded-md place-self-start max-md:col-span-2"></div>

                {/* Product Details Placeholder */}
                <div className="flex flex-col gap-3 col-span-5 md:col-span-3 place-self-start w-full">
                  <div className="h-5 bg-blue-100 w-3/4 rounded-sm"></div>
                  <div className="h-4 bg-blue-100 w-1/2 rounded-sm"></div>
                  <div className="h-4 bg-blue-100 w-1/4 rounded-sm"></div>
                </div>

                {/* Amount Buttons Placeholder */}
                <div className="max-md:col-span-3 max-md:place-self-start">
                  <div className="w-24 h-8 bg-blue-50 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Cart Summary Section Skeleton */}
          <div className="bg-blue-100 p-5 rounded-lg h-fit col-span-5 xl:col-span-2">
            {/* Summary Title */}
            <div className="bg-white rounded-lg h-12 mb-5 w-full"></div>

            {/* Summary Details Box */}
            <div className="bg-white rounded-lg p-5 mb-5 space-y-6">
              <div className="h-4 bg-blue-50 w-full rounded-sm"></div>
              <div className="h-4 bg-blue-50 w-full rounded-sm"></div>
              <div className="h-4 bg-blue-50 w-full rounded-sm"></div>
              <div className="h-6 bg-blue-100 w-3/4 mx-auto rounded-sm pt-2"></div>
            </div>

            {/* Pay Button Placeholder */}
            <div className="w-full h-10 bg-primary/30 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
