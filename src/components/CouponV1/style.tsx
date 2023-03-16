import styled from 'styled-components'

export const CouponV1Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 300px;
  background-color: #2d2765;
  overflow: hidden;

  .left {
    position: absolute;
    left: -282px;
    width: 1050px;
    height: 300px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 150%, 25% 100%, 0% 50%);
    background: #6b5ff2;

    .pic {
      position: absolute;
      left: 275px;
      top: 30px;
      width: 336px;
      height: 300px;

      clip-path: polygon(20% 0%, 70% 5%, 100% 60%, 10% 150%, 0% 100%, 15% 30%);
      background-image: url("pic.jpeg");
      background-size: 125%;
      background-position: 20px -20px;
    }

    .content {
      position: absolute;
      width: 312px;
      height: 172px;
      left: 650px;
      top: 64px;
      color: #fff;
      font-family: 'GT Flexa';
      font-size: 30px;

      div {
        font-family: 'GT Flexa';
        font-style: normal;
        font-weight: 500;
        font-size: 72px;
      }
    }
  }
  .right {
    position: relative;


    .countdown{
      position: absolute;
      top: 42px;
      right: 60px;
    }

    .content {
      width: 534px;
      height: 150px;
      position: absolute;
      top: 90px;
      right: 60px;

      .bottom{
        width: 206px;
        height: 32px;
      }
    }
  }
`