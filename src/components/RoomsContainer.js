import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({context}) {
const { loading, sortedRooms, rooms } = context;
    if(loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}
export default withRoomConsumer(RoomContainer)

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// export default function RoomsContainer() {
//  return (
//     <RoomConsumer>
//         {value => {
//             const { loading, sortedRooms, rooms } = value
//             if(loading) {
//         return <Loading />
//     }
//             return (
//                 <div>
//                     Hello from Rooms Container
//                     <RoomsFilter rooms={rooms} />
//                     <RoomsList rooms={sortedRooms} />
//                 </div>
//         );
//     }}
//     </RoomConsumer>
//     );
// }