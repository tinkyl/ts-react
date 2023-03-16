import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import CouponV2 from '../CouponV2'
import CouponV1 from '../CouponV1'
// import { read } from 'fs'

interface IProps {
  children?: ReactNode
}

const CouponBanner: FC<IProps> = (props) => {
  const [width, setWidth] = React.useState(window.innerWidth)


  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
 

  return (
    width < 768 ? <CouponV2/> : <CouponV1/>
  )
}

export default memo(CouponBanner)