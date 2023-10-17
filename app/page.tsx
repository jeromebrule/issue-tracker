import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import NavBar from "./NavBar";
import Pagination from "./components/Pagination";

export default async function Home() {
  const openIssues = await prisma.issue.count({
    where: { status: "OPEN" },
  });

  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <IssueSummary
      open={openIssues}
      inProgress={inProgressIssues}
      closed={closedIssues}
    />
  );
}
