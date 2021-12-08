import useFetch from "use-http";

export const useCalendarList = (token: string) => {
  const url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";

  return useFetch(url, { headers: { Authorization: `Bearer ${token}` } });
};

export const useEventList = (token: string, calendarId: string) => {
  // return fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  return;
};
