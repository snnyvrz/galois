import { useState } from 'react';
import Countdown from 'react-countdown';
import { zeroFill } from '~/utils/utils';

export default () => {
  const [endDate] = useState<Date>(new Date('September 8, 2023 12:00:00'));

  return (
    <Countdown
      date={endDate}
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className="flex w-full flex-row justify-center self-center p-4">
            <p className="text-extrabold text-3xl text-primary">
              {zeroFill(Math.floor(days / 30))}:{zeroFill(days % 30)}:{zeroFill(hours)}:{zeroFill(minutes)}:
              {zeroFill(seconds)}
            </p>
          </div>
        );
      }}
    />
  );
};
