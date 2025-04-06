"use client";
import Form from "../form/Form";
import * as actions from "@/actions";

import Button from "../button/Button";
import Input from "../input/Input";

const CreateProject = () => {
  return (
    <div>
      <Form action={actions.createProject}>
        <div className="p-2">
          <Input
            name="project type"
            type="text"
            placeholder="Kitchen, Bathroom, Basement or Deck"
          />
          <Input name="project name" type="text" placeholder="Project name" />
          <Input name="sf" type="number" placeholder="How many square feet?" />
          <Button type="submit" text="Create" bgColor="bg-zinc-300" />
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
