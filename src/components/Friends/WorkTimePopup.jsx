import { format } from 'date-fns';
import {
  WorkTimeItem,
  WorkTimeItemCurrent,
  WorkTimeList,
  WorkTimeText,
} from './FriendsItem.styled';

const dayNow = new Date();
const dayOfWeek = format(dayNow, 'iiiiii');

const WorkTimePopup = ({ workTime }) => {
  const workDays = workTime.map(item =>
    item.day === dayOfWeek.toUpperCase() ? (
      <WorkTimeItemCurrent key={item.day}>
        {item?.isOpen ? (
          <WorkTimeText>
            <span>{item.day}</span> {item.from}-{item.to}
          </WorkTimeText>
        ) : (
          <WorkTimeText>
            <span>{item.day} Closed</span>
          </WorkTimeText>
        )}
      </WorkTimeItemCurrent>
    ) : (
      <WorkTimeItem key={item.day}>
        {item?.isOpen ? (
          <WorkTimeText>
            <span>{item.day}</span> {item.from}-{item.to}
          </WorkTimeText>
        ) : (
          <WorkTimeText>
            <span>{item.day} Closed</span>
          </WorkTimeText>
        )}
      </WorkTimeItem>
    )
  );
  return <WorkTimeList>{workDays}</WorkTimeList>;
};

export default WorkTimePopup;
