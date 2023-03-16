import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'

interface IProps {
  children?: ReactNode
  bottomContent?:string
  centerContent?:string
}

const CouponContent: FC<IProps> = (props) => {
  const { bottomContent, centerContent } = props
  return (
    <ContentWrapper>
      <div className='mask'></div>
      <div className='c-left'>
          <div className='discount'>30%</div>OFF
      </div>
      <div className='c-right'>
        <div className='top'>Welcome Coupon</div>
        <div className='center'>{centerContent}</div>
        <div className='bottom'>{bottomContent}</div>
        <div className='footer'>T&C</div>
      </div>
    </ContentWrapper>
  )
}

export default memo(CouponContent)