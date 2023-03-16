import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CouponV1Wrapper } from './style'
import CouponContent from '../CouponContent'
import  CountDown from '../CountDown'

interface IProps {
  children?: ReactNode
}

const CouponV1: FC<IProps> = (props) => {
  

  return (
    <CouponV1Wrapper>
     <div className='left'>
        <div className='pic'></div>
        <div className='content'>
            enjoy now your favorite brands with
            <div>30% off</div>
          </div>
      </div>
      <div className='right'>
        <div className='countdown'>
          <CountDown endTime={'2023-3-17 20:00:00'}/>
        </div>
        <div className='content'>
          <CouponContent 
          centerContent={'Aplicable to all items Min. order 10€. Valid for 30 days from now.'} 
          bottomContent={'¡Lo quiero!'}
          />
        </div>
      </div>
    </CouponV1Wrapper>
  )
}

export default memo(CouponV1)