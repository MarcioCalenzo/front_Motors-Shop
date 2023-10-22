import avatar from "../../assets/avatar.png";
export interface Icoment {
  comment: {
    value: string;
    user: {
      id: number;
      name: string;
    };
    date: string;
  };
}
export const Card_comment = (comment: Icoment) => {
  return (
    <li>
      <div className="flex items-center mb-3">
        <img src={avatar} className="w-[32px] h-[32px] mr-[0.5rem]"></img>
        <span className="mr-[0.5rem] text-grey1 text-sm font-medium">
          {comment.comment.user.name}
        </span>
        <span className="text-grey3 font-normal text-xs">• há 3 dias</span>
      </div>
      <p className="text-grey2 text-sm font-normal max-h-[12.5rem] overflow-y-scroll">
        {comment.comment.value}
      </p>
    </li>
  );
};
