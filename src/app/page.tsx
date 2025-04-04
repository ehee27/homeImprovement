import CreateUser from "@/components/users/CreateUser";
import UserList from "@/components/users/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <header className="bg-black/90 p-3">
        <span>LOGO</span>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 p-3 border-4 h-100">
        <div>
          <CreateUser />
        </div>
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}
