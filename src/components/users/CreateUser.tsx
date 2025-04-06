import React from "react";

import Button from "../button/Button";
import * as actions from "@/actions";
import Form from "../form/Form";
import Input from "../input/Input";

const CreateUser = () => {
  return (
    <div>
      <Form action={actions.createUser}>
        <div className="p-2">
          <Input name="fullName" type="text" placeholder="User full name" />
          <Input name="email" type="text" placeholder="User email" />
          <Button type="submit" text="Create" bgColor="bg-zinc-300" />
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;
