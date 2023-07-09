import { DATE_FORMATTER } from '~/config.mjs';

const formatter =
  DATE_FORMATTER ||
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

/* eslint-disable no-mixed-spaces-and-tabs */
export const getFormattedDate = (date: Date) => (date ? formatter.format(date) : '');

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

export const zeroFill = (date: number) => {
  return date.toString().padStart(2, '0');
};

export const formatCountdownEntry = (singular_name: string, amount: number) => {
  return amount === 1 ? singular_name : singular_name.concat('s');
};

export function formatCountdown(...args: { name: string; amount: number }[]) {
  const fixedPart = 'Galois will launch in ';
  const entries = args
    .filter((a) => a.amount !== 0)
    .map((a) => `${a.amount} ${formatCountdownEntry(a.name, a.amount)}`);
  return fixedPart.concat(entries.join(', '));
}
