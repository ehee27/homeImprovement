import { UserProps } from "@/types";
import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Form from "../form/Form";
import * as actions from "@/actions";

const DeleteUser = ({ user }: { user: UserProps }) => {
  return (
    <div>
      <Form action={actions.deleteUser}>
        <div className="p-2">
          <Input name="inputId" type="hidden" value={user.id} />

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

export default DeleteUser;
