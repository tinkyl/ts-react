import styled from 'styled-components'

export const CouponV2Wrapper = styled.div`
  position: relative;
  width: 768px;
  height: 817px;
  background-color: #2d2765;
  overflow: hidden;

  .content {
    position: absolute;
    width: 350px;
    height: 172px;
    left: 50px;
    top: 50px;
    color: #fff;
    font-family: 'GT Flexa';
    font-size: 32px;

    div {
      font-family: 'GT Flexa';
      font-style: normal;
      font-weight: 500;
      font-size: 130px;
    }
  }



  .right-mask {
    position: absolute;
    left: 180px;
    width: 600px;
    height: 900px;
    clip-path: polygon(100% 5%, 100% 0%, 100% 0%, 100% 100%, 40% 100%, 0% 60%);
    background: #6b5ff2;
  }


  .pic {
      position: absolute;
      top: 90px;
      right: -75px;
      width: 470px;
      height: 530px;


      clip-path: polygon(15% 0%, 70% 5%, 100% 60%, 5% 150%, 0% 100%, 0% 10%);
      background-image: url("pic.jpeg");
      transform: rotateY(180deg);
      background-size: 125%;
      background-position: 20px -20px;
    }

  .bottom{
    position: absolute;
    top: 486px;
    left: 60px;


    .countdown-v2{
      position: absolute;
      top: 50px;
      left: 10px;
    }

    .content {
      width: 648px;
      height: 204px;
      position: absolute;
      top: 100px;
      left: 10px;

      .c-left{
        margin-top: 20px;
        font-size: 26px;
        .discount{
          font-size: 42px;
        }
      }

      .c-right{

        .top{
        font-size: 26px;
      }

        .center{
          margin-top: 8px;
          width: 335px;
          font-size: 20px;
        }

        .bottom{
          top: 90px;
          left: 0px;
          width: 335px;
          height: 54px;
          background: #1E1F26;
          font-size: 24px;
          line-height: 54px;
        }

        .footer{
          top: 170%;
          left: 125%;
          font-size: 20px;
        }
      }
    }

  }


`
