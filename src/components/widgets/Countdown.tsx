import { useState } from 'react';
import Countdown from 'react-countdown';
import { formatCountdown } from '~/utils/utils';

export default () => {
  const [endDate] = useState<Date>(new Date('September 8, 2023 12:00:00'));

  return (
    <Countdown
      date={endDate}
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className="mb-4 flex w-full flex-row justify-center self-center p-4 text-center">
            <p className="text-extrabold text-xl text-primary dark:text-white md:text-2xl">
              {formatCountdown(
                { name: 'month', amount: Math.floor(days / 30) },
                { name: 'day', amount: days % 30 },
                { name: 'hour', amount: hours },
                { name: 'minute', amount: minutes },
                { name: 'second', amount: seconds }
              )}
            </p>
          </div>
        );
      }}
    />
  );
};
