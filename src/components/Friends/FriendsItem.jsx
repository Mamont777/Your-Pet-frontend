import React, { useState } from 'react';
import {
  Item,
  Title,
  ItemWrapper,
  FriendsInfoWrapper,
  FriendsInfoList,
  ImageWrapper,
  InfoTitle,
  InfoText,
  WorkTime,
  InfoLink,
} from './FriendsItem.styled';
import myImage from '../../images/friends/default-friends.png';
import WorkTimePopup from './WorkTimePopup';

const dayNow = new Date();
const numberOfDay = dayNow.getDay();

const FriendsItem = ({ friends }) => {
  const { imageUrl, title, url, addressUrl, email, phone, workDays, address } =
    friends;

  const [isVisible, setIsVisible] = useState(true);

  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: week[index], ...day };
    });

  return (
    <Item>
      <Title href={url} target="_blank" rel="noreferrer noopen nofollow">
        {title}
      </Title>

      <ItemWrapper>
        <ImageWrapper>
          <img src={imageUrl ? imageUrl : myImage} alt={title} />
        </ImageWrapper>

        <FriendsInfoList>
          <FriendsInfoWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setIsVisible(true);
            }}
          >
            {workDays === null ||
            workDays === undefined ||
            workDays.length === 0 ? (
              <>
                <InfoTitle>Time:</InfoTitle>
                <InfoText>day and night</InfoText>
              </>
            ) : (
              <>
                {workDays[numberOfDay - 1]?.isOpen ? (
                  <>
                    <InfoTitle>Time:</InfoTitle>
                    <WorkTime>
                      {workDays[numberOfDay - 1]?.from}-
                      {workDays[numberOfDay - 1]?.to}
                    </WorkTime>
                  </>
                ) : (
                  <>
                    <InfoTitle>Time:</InfoTitle>
                    <WorkTime>Closed</WorkTime>
                  </>
                )}
                {isVisible || <WorkTimePopup workTime={newWorkDays} />}
              </>
            )}
          </FriendsInfoWrapper>

          <FriendsInfoWrapper>
            <InfoTitle>Adress:</InfoTitle>
            {addressUrl ? (
              <InfoLink href={addressUrl && addressUrl} target="_blank">
                {address}
              </InfoLink>
            ) : (
              <InfoText>website only</InfoText>
            )}
          </FriendsInfoWrapper>

          <FriendsInfoWrapper>
            <InfoTitle>Email: </InfoTitle>
            {email ? (
              <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
            ) : (
              <InfoText>website only</InfoText>
            )}
          </FriendsInfoWrapper>

          <FriendsInfoWrapper>
            <InfoTitle>Phone:</InfoTitle>
            {phone ? (
              <InfoLink href={`tel:${phone}`}>{phone}</InfoLink>
            ) : (
              <InfoText>email only</InfoText>
            )}
          </FriendsInfoWrapper>
        </FriendsInfoList>
      </ItemWrapper>
    </Item>
  );
};

export default FriendsItem;
