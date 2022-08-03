import { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../store/selectors/user.selector";

interface IAvatarFromIdProps {
  // uid: string;
  size?: number;
}

const AvatarFromId: FC<IAvatarFromIdProps> = ({ size = 40 }) => {
  const currentUser = useSelector(getCurrentUser);
  return (
    <img
      className="object-cover rounded-full"
      style={{ width: size, height: size }}
      src={currentUser.avatar}
      alt="user avatar"
    />
  );
};

export default AvatarFromId;
