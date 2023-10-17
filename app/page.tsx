import NavBar from "./NavBar";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      Hello World!{" "}
      <Pagination
        currentPage={parseInt(searchParams.page)}
        itemCount={100}
        pageSize={10}
      />
    </div>
  );
}
