import SingleItem from "./SingleItem";
import { useQuery } from "react-query";
import customFetch from "./utils";

const Items = () => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });

  console.log(result);

  const { isLoading, data, isError, error } = result;

  //   const result = async () => {
  //     try {
  //       let items = await customFetch.get("/");
  //       console.log(items);
  //     } catch (error) {}
  //   };

  // result();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }
  // if (isError) {
  //   return <p style={{ marginTop: "1rem" }}>Some error occured...</p>;
  // }
  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  }
  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
