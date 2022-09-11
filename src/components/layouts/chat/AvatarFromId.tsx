import { FC } from "react";
import { IMAGES } from "../../../utils/constants/image.constant";

interface IAvatarFromIdProps {
  // uid: string;
  size?: number;
  src: string;
}

const AvatarFromId: FC<IAvatarFromIdProps> = ({ size = 40, src }) => {
  return (
    <img
      loading="lazy"
      className="object-cover rounded-full"
      style={{ width: size, height: size }}
      src={src ? src : IMAGES.defaultAvatar}
      alt="user avatar"
    />
  );
};

export default AvatarFromId;
