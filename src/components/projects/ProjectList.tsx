import { prisma } from "@/utils/prisma";

export const getData = async () => {
  const data = await prisma.project.findMany({
    select: {
      projectType: true,
      projectName: true,
      id: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
};

const ProjectList = async () => {
  const projectList = await getData();
  console.log("This.......", projectList);
  return (
    <div className="shadow-inner shadow-zinc-400 p-3 rounded-md bg-white">
      {projectList?.map((project, i) => (
        <div
          key={project.id}
          className="flex flex-col bg-white text-zinc-500 rounded-md shadow shadow-zinc-400 p-2 mb-2"
        >
          <p>{project.projectName}</p>
          <p>{project.projectType}</p>
          <p>{project.createdAt.toDateString()}</p>
          <p className="text-xs">{project.id}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
