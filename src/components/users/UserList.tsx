import { prisma } from "@/utils/prisma";
import DeleteUser from "./DeleteUser";

export const getData = async () => {
  const data = await prisma.user.findMany({
    select: {
      fullName: true,
      id: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
};

const UserList = async () => {
  const userList = await getData();
  // console.log("This.......", userList);
  return (
    <div className="shadow-inner shadow-zinc-400 p-3 rounded-md bg-white">
      {userList?.map((user, i) => (
        <div
          key={user.id}
          className="flex flex-col bg-white text-zinc-500 rounded-md border-4 border-zinc-100 p-2 mb-2"
        >
          <p>{user.fullName}</p>
          <p>{user.createdAt.toDateString()}</p>
          <p className="text-xs">{user.id}</p>
          <DeleteUser user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
