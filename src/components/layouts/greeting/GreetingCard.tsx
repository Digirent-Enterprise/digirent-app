import dayjs from "dayjs";
import { useDate } from "../../../hooks/useDate";

const GreetingCard = () => {
  const { date, time, wish } = useDate();
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const convertTime = dayjs(`1/1/1 ${time}`).format("HH:mm:00");

  return (
    <div className="px-8 py-12">
      <div
        className={classNames(
          "relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl",
          convertTime < "12:00:00"
            ? "bg-morning"
            : convertTime < "16:00:00"
            ? "bg-afternoon"
            : "bg-evening",
        )}
      >
        <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40">
          <h5 className="text-2xl font-bold">{wish}</h5>

          <p className="text-sm">
            {date}
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
