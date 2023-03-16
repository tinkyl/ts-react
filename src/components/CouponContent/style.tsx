import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #D7D4FC;
  overflow: hidden;
  .mask{
    position: absolute;
    top: -25px;
    left: -10px;
    width: 100%;
    height: 120%;

    background: #EDEBFD;
    clip-path: polygon(50% 0%, 75% 0%, 130% 130%, 100% 100%, -75% 100%, 10% 30%);
    transform: rotate(3deg);
  }


  .c-left{
      position: absolute;
      top: 35px;
      left: 52px;
      font-family: 'Avenir Next';
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      color: #1E1F26;

      .discount{
        font-size: 36px;
      }
  }

  .c-right{
    position: absolute;
    top: 20px;
    left: 183px;

    .top{
      font-family: 'GT Flexa';
      font-weight: 700;
      font-size: 20px;
      color: #1E1F26;
    }

    .center{
      margin-top: 6px;
      width: 284px;
      font-family: 'Avenir Next';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: #4D5360;
    }

    .bottom{
      margin-top: 10px;
      width: 100%;
      height: 100%;
      background: #272833;
      font-family: 'Avenir Next';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 32px;
      text-align: center;

      color: #FFFFFF;
    }

    .footer{
      position: absolute;
      left: 114%;
      top: 100%;

      font-family: 'Avenir Next';
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 14px;

      align-items: center;
      text-align: right;
      text-decoration-line: underline;

      color: #858B9C;
    }
  }
`