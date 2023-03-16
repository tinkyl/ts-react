import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CouponV2Wrapper } from './style'
import CouponContent from '../CouponContent'
import  CountDown from '../CountDown'


interface IProps {
  children?: ReactNode
}

const CouponV2: FC<IProps> = (props) => {
  

  return (
    <CouponV2Wrapper>
      <div className='content'>
          enjoy now your favorite brands with
          <div>30% off</div>
      </div>
      <div className='right-mask'></div>
      <div className='pic'></div>
      <div className='bottom'>
        <div className='countdown-v2'>
              <CountDown endTime={'2023-3-17 20:00:00'}/>
          </div>
          <div className='content'>
            <CouponContent 
            centerContent={'Save up to 20€. All items included.Min. spend: 10,00€. Valid for 30 day(s)'}
            bottomContent={'I want it!'}
            />
          </div>
      </div>
    </CouponV2Wrapper>
  )
}

export default memo(CouponV2)