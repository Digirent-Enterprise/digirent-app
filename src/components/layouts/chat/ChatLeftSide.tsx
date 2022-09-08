import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";

import AvatarFromId from "./AvatarFromId";
import {IUser} from "../../../store/types/user.types";

type MessageProps = {
  from: IUser
  messages: {
    from: IUser,
    to: IUser,
    content: string
  }[]
}[]
const ChatLeftSide = ({users} : {users: MessageProps}) => {
  return (
    <div className="border-r border-gray-300 lg:col-span-1">
      <div className="mx-3 my-3">
        <div className="relative text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <IconContext.Provider
              // eslint-disable-next-line react/jsx-no-constructed-context-values
              value={{ className: "w-6 h-6 text-gray-300" }}
            >
              <div>
                <AiOutlineSearch />
              </div>
            </IconContext.Provider>
          </span>
          <input
            type="search"
            className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
            name="search"
            placeholder="Search"
            required
          />
        </div>
      </div>

      <ul className="overflow-auto h-[32rem]">
        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
        <li>
          {users.map(user => (<a
              href="/"
              className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
          >
            <AvatarFromId src={user.from.profileImage}/>
            <div className="w-full pb-2">
              <div className="flex justify-between">
                <span className="block ml-2 font-semibold text-gray-600">
                  {user.from.name}
                </span>
                <span className="block ml-2 text-sm text-gray-600">
                  25 minutes
                </span>
              </div>
              <span className="block ml-2 text-sm text-gray-600">{(user.messages && user.messages.length) && user.messages[user.messages.length - 1].content}</span>
            </div>
          </a>)) }
        </li>
      </ul>
    </div>
  );
};

export default ChatLeftSide;
