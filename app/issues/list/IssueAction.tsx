import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueAction = () => {
  return (
    <Flex mb="5" justify="between">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <IssueStatusFilter />
    </Flex>
  );
};

export default IssueAction;
