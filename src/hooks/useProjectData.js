// import { useQuery } from "@tanstack/react-query";
// import { QueryKeys } from "core/constants/constants";


// export const useProject = ({
// } => {
//   const {
//     data = [],
//     isError,
//     isFetching,
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: [QueryKeys.GetInvoice],
//     queryFn: async ({ signal }) => {
//       const response = 

//       return response.body;
//     },
//   });

//   return {
//     data,
//     isError,
//     isFetching,
//     isLoading: isLoading && isFetching,
//     refetch,
//   };
// }
// );