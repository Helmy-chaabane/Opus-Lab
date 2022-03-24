import { useState, useEffect, useCallback } from 'react'

export type ISlideDirection = 'right' | 'left'

export function useSlider<T>(
  items: Array<T>,
  itemWidthInPerct: number,
  isAutoSlide: boolean,
) {
  const [sliderPosition, setSliderPosition] = useState<number>(0)

  const numberOfItemsPerSlide = Math.floor(100 / itemWidthInPerct)
  const numberOfSlides = items?.length
    ? Math.ceil(items.length / numberOfItemsPerSlide)
    : 0
  const sliderWidthInPerct = numberOfSlides * 100
  const spaceLeftInsideOneSlideInPerct =
    100 - numberOfItemsPerSlide * itemWidthInPerct
  const marginSidesForOneItemInPerct =
    spaceLeftInsideOneSlideInPerct / numberOfItemsPerSlide
  const marginSideForOneItemInPerct = marginSidesForOneItemInPerct / 2

  const handleSlidePerItem = useCallback(
    (direction: ISlideDirection) => {
      const itemFullWidth = itemWidthInPerct + marginSidesForOneItemInPerct
      const itemsLength = items ? items.length : 0
      console.log(sliderPosition + itemFullWidth * itemsLength)

      const isLastItemOnTheRightStillHidden =
        itemFullWidth * itemsLength + sliderPosition > 101
      if (direction === 'right') {
        console.log(isLastItemOnTheRightStillHidden)
        if (isLastItemOnTheRightStillHidden) {
          setSliderPosition(
            (prev) => prev - parseFloat(itemFullWidth.toFixed(3)),
          )
        } else {
          setSliderPosition(0)
        }
      } else {
        if (sliderPosition >= 0) {
          setSliderPosition(
            parseFloat(itemFullWidth.toFixed(3)) * itemsLength * -1 + 100,
          )
        } else
          setSliderPosition(
            (prev) => prev + parseFloat(itemFullWidth.toFixed(3)),
          )
      }
    },
    [itemWidthInPerct, items, marginSidesForOneItemInPerct, sliderPosition],
  )

  const handleSlidePerSlide = (slide: number) => {
    setSliderPosition(slide * -100)
  }

  const isSlidePostionReachCertain = (slide: number) => {
    return sliderPosition === slide * -100
  }

  useEffect(() => {
    if (isAutoSlide && items && numberOfItemsPerSlide < items.length) {
      const interval = setInterval(() => {
        handleSlidePerItem('right')
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isAutoSlide, items, numberOfItemsPerSlide, handleSlidePerItem])

  return {
    sliderPosition,
    sliderWidthInPerct,
    marginSideForOneItemInPerct,
    numberOfSlides,
    handleSlidePerSlide,
    handleSlidePerItem,
    isSlidePostionReachCertain,
  }
}
