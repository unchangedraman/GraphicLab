// "use client";

// import BoardList from "@/components/dashboard/BoardList";
// import NoOrganization from "@/components/dashboard/NoOrganization";
// import { useOrganization } from "@clerk/nextjs";

// interface DashboardPageProps {
//   searchParams: {
//     search?: string;
//     favorites?: string;
//   };
// }

// const DashboardPage = ({ searchParams }: DashboardPageProps) => {
//   const { organization } = useOrganization();

//   return (
//     <div className="flex-grow flex flex-col justify-center items-center p-6">
//       {!organization ? (
//         <NoOrganization />
//       ) : (
//         <BoardList orgId={organization.id} query={searchParams} />
//       )}
//     </div>
//   );
// };

// export default DashboardPage;