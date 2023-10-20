import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

interface Props {
  sort: "asc" | "desc";
}

const SortArrow = ({ sort }: Props) => {
  return sort === "asc" ? (
    <ArrowUpIcon className="inline" />
  ) : (
    <ArrowDownIcon className="inline" />
  );
};

export default SortArrow;
