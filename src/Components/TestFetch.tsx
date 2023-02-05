// http://jsonplaceholder.typicode.com/users

import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import axios from "axios";
const queryClient = new QueryClient({});

function TestFetch1() {
  const {data} = useQuery(["anything"], () => {
    return axios.get("http://jsonplaceholder.typicode.com/users").then((res) => res.data);
  });
  console.log("Hello");
  console.log(data);
  return <></>;
}
export default function TestFetch() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestFetch1 />
    </QueryClientProvider>
  );
}
