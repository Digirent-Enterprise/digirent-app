import { FC } from "react";

interface IAvatarFromIdProps {
  // uid: string;
  size?: number;
}

const AvatarFromId: FC<IAvatarFromIdProps> = ({ size = 40 }) => {
  return (
    <img
      className="object-cover rounded-full"
      style={{ width: size, height: size }}
      src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
      alt="username"
    />
  );
};

export default AvatarFromId;
