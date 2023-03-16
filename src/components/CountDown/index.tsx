import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CountDownWrapper } from './style'

interface IProps {
  children?: ReactNode
  endTime?:any
  endTimeUp?:any
}

export const CountDown: FC<IProps> = ({ endTime, endTimeUp}) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  useEffect(() => {
    let timestamp = Date.parse(new Date(endTime).toString())
    let sys_second = (timestamp - new Date().getTime());
    const timerId = setInterval(() => {
        //防止倒计时出现负数
        if (sys_second > 1000) {
            sys_second -= 1000;
            let hour = Math.floor((sys_second / 1000 / 3600) % 24);
            let minute = Math.floor((sys_second / 1000 / 60) % 60);
            let second = Math.floor(sys_second / 1000 % 60);
            setHour(hour < 10 ? 0 + hour : hour);
            setMinute(minute < 10 ? 0 + minute : minute);
            setSecond(second < 10 ? 0 + second : second);
        } else {
            clearInterval(timerId);
            //倒计时结束时触发方法
            !!endTimeUp && endTimeUp();
        }
    }, 1000);
    return () => {  //返回一个回调函数用来清除定时器
        clearInterval(timerId)
    };
  }, [endTime,endTimeUp]);

  
  return (
    <CountDownWrapper>
      <div className='end'>Ends in </div>
      <div className='time'> 
        <div>{hour}</div>h
        <div>{minute}</div>m
        <div>{second}</div>s
      </div>
    </CountDownWrapper>
  )
}


export default memo(CountDown)