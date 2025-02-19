// // app/(root)/admin/page.tsx
// "use client";

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const { pendingEvents } = useSelector((state: any) => state.events);
  
//   useEffect(() => {
//     dispatch(getPendingEvents());
//   }, []);

//   const handleApprove = (eventId) => {
//     dispatch(
//       approveEvent({
//         eventId,
//         onSuccess: () => toast.success("Event approved")
//       })
//     );
//   };

//   const handleReject = (eventId) => {
//     dispatch(
//       rejectEvent({
//         eventId,
//         onSuccess: () => toast.error("Event rejected")
//       })
//     );
//   };

//   return (
//     <div className="wrapper">
//       <h1>Pending Events</h1>
//       {pendingEvents?.map((event) => (
//         <div key={event.id} className="border p-4 mb-4">
//           <h3>{event.title}</h3>
//           <div className="flex gap-2 mt-2">
//             <button onClick={() => handleApprove(event.id)}>
//               Approve
//             </button>
//             <button onClick={() => handleReject(event.id)}>
//               Reject
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };