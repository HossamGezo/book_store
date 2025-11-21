/**
 * =====================================================================
 *                      SLIDER CALCULATION LOGIC
 * =====================================================================
 * This hook calculates two main values: `availableScroll` and `everyClick`.
 *
 *
 * ### KEY VARIABLES ###
 * ---------------------------------------------------------------------
 *  - itemsCount:     Total number of slider items.
 *  - itemWidth:      The fixed width of a single item (e.g., 311px).
 *  - itemGap:        The fixed gap between items (e.g., 20px).
 *  - paddingWidth:   The total horizontal padding of the container (e.g., 16px).
 *  - viewportWidth:  The DYNAMIC width of the container, measured in real-time.
 *
 *
 * ### CALCULATION STEPS ###
 * ---------------------------------------------------------------------
 * 1.  `productsLength` = (itemsCount * itemWidth) + ((itemsCount - 1) * itemGap)
 *     // This is the full width of all slider content from the start of the first item
 *     // to the end of the last item.
 *
 * 2.  `realViewport` = viewportWidth - paddingWidth
 *     // This is the actual visible space for the items inside the container.
 *
 * 3.  `availableScroll` = productsLength - realViewport
 *     // This is the total distance that is hidden and needs to be scrolled.
 *
 * 4.  `everyClick` = (itemWidth + itemGap) + CorrectionFactor
 *     // This is the magic formula. Instead of a fixed move, we add a small
 *     // "correction factor" to each step. This ensures that after the last click,
 *     // the slider has moved EXACTLY by the `availableScroll` amount.
 *
 *     // How the CorrectionFactor is calculated:
 *     a. `clicksCount` = floor(availableScroll / (itemWidth + itemGap))
 *     b. `restOfClicks` = availableScroll % (itemWidth + itemGap)
 *     c. `CorrectionFactor` = restOfClicks / clicksCount
 *
 * =====================================================================
 */
// React
import {useEffect, useState} from "react";
// Types
type ProductsSliderProps = {
  arrayLength: number;
  viewportRef: React.RefObject<HTMLDivElement | null>;
};
// Main Component
const useProductsSlider = ({arrayLength, viewportRef}: ProductsSliderProps) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  useEffect(() => {
    // Resize Function
    const handleResize = () => {
      if (viewportRef.current)
        setViewportWidth(viewportRef.current.clientWidth);
    };
    // Set primary width
    handleResize();
    // Resize Event
    window.addEventListener("resize", handleResize);
    // Clean Up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportRef]);
  // Slider Logic Movement
  const itemsCount = arrayLength; // 10
  const itemWidth = 311;
  const itemGap = 20; // Gap between products
  const itemsGap = (itemsCount - 1) * itemGap; // The entire width of Gap Between Products
  const paddingWidth = 16; // Container Padding left & right
  const viewport = viewportWidth; // Container Width
  const realViewport = viewport - paddingWidth; // Container Width Without Padding
  const productsLength = itemsCount * itemWidth + itemsGap;
  const availableScroll = Math.abs(productsLength - realViewport); ///// NEED
  const clicksCount = Math.trunc(availableScroll / (itemWidth + itemGap)); // How many int click
  let everyClick = 0;
  if (clicksCount > 0) {
    const restOfClicks = Math.round(availableScroll % (itemWidth + itemGap));
    everyClick = itemWidth + itemGap + restOfClicks / clicksCount; // Slide Move Every Click
  }
  return {availableScroll, everyClick};
};

export default useProductsSlider;
