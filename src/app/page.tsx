import CreateProject from "@/components/projects/CreateProject";
import ProjectList from "@/components/projects/ProjectList";
import CreateUser from "@/components/users/CreateUser";
import UserList from "@/components/users/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-h-screen bg-zinc-100">
      <header className="bg-black/90 p-3">
        <span>LOGO</span>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-zinc-200">
        <div className="p-5">
          <CreateUser />
        </div>
        <div className="p-8">
          <UserList />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-zinc-200">
        <div className="p-5">
          <CreateProject />
        </div>
        <div className="p-8">
          <ProjectList />
        </div>
      </section>
    </div>
  );
}
