import { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../store/selectors/user.selector";
import IMAGES from "../../../utils/constants/image.constant";

interface IAvatarFromIdProps {
  // uid: string;
  size?: number;
}

const AvatarFromId: FC<IAvatarFromIdProps> = ({ size = 40 }) => {
  const currentUser = useSelector(getCurrentUser);
  console.log(currentUser);
  return (
    <img
      className="object-cover rounded-full"
      style={{ width: size, height: size }}
      src={currentUser.avatar ? currentUser.avatar : IMAGES.defaultAvatar}
      alt="user avatar"
    />
  );
};

export default AvatarFromId;
