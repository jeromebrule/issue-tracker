"use client";

import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  issue: Issue;
}

const statuses: { label: string; value?: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const StatusAssignment = ({ issue }: Props) => {
  const router = useRouter();

  const assignStatus = async (status: Status) => {
    await axios
      .patch(`/api/issues/${issue.id}`, {
        status,
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      });
    router.refresh();
  };

  return (
    <Select.Root onValueChange={assignStatus} defaultValue={issue.status}>
      <Select.Trigger placeholder="Status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.label} value={status.value || ""}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default StatusAssignment;
