import styled from 'styled-components';
import { theme } from 'styles';

//mobile version
import buldogmobile1x from '../../images/MainPage/mobile/buldogmobile1x.webp';
import buldogmobile2x from '../../images/MainPage/mobile/buldogmobile2x.webp';
import dogmobile1x from '../../images/MainPage/mobile/dogmobile1x.webp';
import dogmobile2x from '../../images/MainPage/mobile/dogmobile2x.webp';
import catmobile1x from '../../images/MainPage/mobile/catmobile1x.webp';
import catmobile2x from '../../images/MainPage/mobile/catmobile2x.webp';
//tablet version
import buldogtablet1x from '../../images/MainPage/tablet/buldogtablet1x.webp';
import buldogtablet2x from '../../images/MainPage/tablet/buldogtablet2x.webp';
import dogstablet1x from '../../images/MainPage/tablet/dogstablet1x.webp';
import dogstablet2x from '../../images/MainPage/tablet/dogstablet2x.webp';
import cattablet1x from '../../images/MainPage/tablet/cattablet1x.webp';
import cattablet2x from '../../images/MainPage/tablet/cattablet2x.webp';
//desktop version
import buldogdesktop1x from '../../images/MainPage/desktop/buldogdesktop1x.webp';
import buldogdesktop2x from '../../images/MainPage/desktop/buldogdesktop2x.webp';
import dogdesktop1x from '../../images/MainPage/desktop/dogdesktop1x.webp';
import dogdesktop2x from '../../images/MainPage/desktop/dogdesktop2x.webp';
import catdesktop1x from '../../images/MainPage/desktop/catdesktop1x.webp';
import catdesktop2x from '../../images/MainPage/desktop/catdesktop2x.webp';

export const Container = styled.div`
  max-width: 480px;
  min-height: 100vh;
  display: flex;

  padding-top: 60px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: 1279px) {
    padding-top: 80px;
    flex-direction: column;
    max-width: 780px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 188px;
    flex-direction: raw;
    max-width: 1280px;
  }
`;
export const ImagesContainer = styled.div`
  max-width: 480px;
  height: 390px;
  position: relative;
  overflow: visible;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 768px;
    height: 820px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1280px;
    height: 570px;
    top: 180px;
  }
`;

export const ImgBuldog = styled.img`
  position: absolute;
  width: 183px;
  height: auto;
  right: 185px;
  bottom: 55px;
  content: url('${buldogmobile1x}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${buldogmobile2x}');
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 380px;
    bottom: 112px;
    right: 410px;
    padding-top: 80px;
    content: url('${buldogtablet1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${buldogtablet2x}');
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 380px;
    bottom: 230px;
    right: 540px;
    padding-top: 188px;
    content: url('${buldogdesktop1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${buldogdesktop2x}');
    }
  }
`;

export const ImgDog = styled.img`
  position: absolute;
  width: 235px;
  height: auto;
  right: -55px;
  bottom: 125px;
  z-index: 1;
  content: url('${dogmobile1x}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${dogmobile2x}');
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 480px;
    bottom: 290px;
    right: -84px;
    content: url('${dogstablet1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${dogstablet2x}');
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 490px;
    bottom: 380px;
    right: 30px;
    content: url('${dogdesktop1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${dogdesktop2x}');
    }
  }
`;

export const ImgCat = styled.img`
  position: absolute;
  width: 165px;
  height: auto;
  right: -20px;
  bottom: -5px;
  content: url('${catmobile1x}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${catmobile2x}');
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 332px;
    bottom: 22px;
    right: 2px;
    content: url('${cattablet1x}');
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${cattablet2x}');
    }
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 336px;
    bottom: 110px;
    right: 112px;
    content: url('${catdesktop1x}');
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${catdesktop2x}');
    }
  }
`;

export const Title = styled.h1`
  max-width: 280px;
  height: 88px;

  font-size: 32px;
  font-family: ${theme.fonts.main.bold};
  font-weight: 700;
  color: #000000;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 588px;
    height: 200px;
    font-size: 68px;
    font-weight: 600;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 501px;
    height: 264px;

    font-size: 68px;
    font-weight: 800;
    line-height: 130%;
  }
`;
