import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Form from "../form/Form";
import * as actions from "@/actions";
import { ProjectProps } from "@/types";

const DeleteProject = ({ project }: { project: ProjectProps }) => {
  return (
    <div>
      <Form action={actions.deleteProject}>
        <div className="p-2">
          <Input name="inputId" type="hidden" value={project.id} />

          <Button
            type="submit"
            text="Delete"
            actionButton
            bgColor="bg-red-700"
          />
        </div>
      </Form>
    </div>
  );
};

export default DeleteProject;
