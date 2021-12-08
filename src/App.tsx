import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { authorize, getToken, getUserList } from "./chrome";
// import { useCalendarList } from "./googleCalendar";

export const App = () => {
  getToken();
  return (
    <div>
      <button onClick={authorize}>AUT@@H</button>
      <Attendance />
    </div>
  );
};

const Attendance: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);

  const fetchNames = useCallback(async () => {
    const namess = await getUserList();

    setNames(namess);
  }, [setNames]);

  return (
    <div>
      <button onClick={fetchNames}>sync</button>

      <div>
        {names.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </div>
  );
};
