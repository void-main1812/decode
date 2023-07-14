"use client";

import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import Select from "@/app/components/Select";
// import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "@/app/components/Input";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  // users: User[];
}

const VolunteerModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  // users,
}) => {
  const skills = [
    {
      skill: "Web-Development",
    },
    {
      skill: "App-Development",
    },
    {
      skill: "UI/UX Design",
    },
    {
      skill: "Basic Programming",
    },
    {
      skill: "Other",
    },
  ];

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // axios
    //     .post("/api/conversations", {
    //         ...data,
    //         isGroup: true,
    //     })
    //     .then(() => {
    //         router.refresh();
    //         onClose();
    //     })
    //     .catch(() => toast.error("Something went wrong"))
    //     .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={() => {}}>
        <div className="space-y-12">
          <div
            className="
            border-b
            border-gray-900/10
            pb-12
            "
          >
            <h2
              className="
                text-xl
                font-semibold
                leading-2
                text-gray-900
                mt-4
                sm:mt-0
                "
            >
              Create a Group Chat
            </h2>
            <p
              className="
            mt-1
            text-sm
            text-gray-500
            font-light
            leading-6
            "
            >
              Create a group chat so that all your friends can chat together
            </p>
            <div
              className="
            mt-10
            flex
            flex-col
            gap-y-8
            "
            >
              <Input
                onChange={() => {}}
                placeholder={"Enter Your Email-Id"}
                className="bg-gray-900 rounded-lg text-white"
              />
              <Select
                disabled={isLoading}
                label="Your Skills"
                options={skills.map((item) => ({
                  value: item.skill,
                  label: item.skill,
                }))}
                onChange={(value) =>
                  setValue("members", value, {
                    shouldValidate: true,
                  })
                }
                value={members}
              />
            </div>
          </div>
        </div>
        <div
          className="
        mt-6
        flex
        items-center
        justify-end
        gap-x-6
        "
        >
          <Button
            disabled={isLoading}
            height={"20"}
            onClick={onClose}
            type="button"
            ghost
          >
            Cancel
          </Button>
          <Button height={"20"} disabled={isLoading} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default VolunteerModal;
