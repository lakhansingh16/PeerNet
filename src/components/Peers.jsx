/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import PeerCard from "./PeerCard";
import peers from "./peersData";
import Form from "./Form";
const Peers = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredPeers, setFilteredPeers] = useState(peers);
  const filterPeers = (e) => {
    e.preventDefault();
    const newPeers = peers.filter((peer) => {
      return peer.student_topics.indexOf(filterText) !== -1;
    });
    console.log(newPeers);
    setFilteredPeers(newPeers);
  };
  const onAddPeer = (peerData) => {
    const newPeerData = [...filteredPeers, peerData];
    setFilteredPeers(newPeerData);
  };
  return (
    <div className="w-[90vw] sm:w-[65vw] mx-auto mt-16 flex flex-col gap-8">
      <h1 className="text-[2rem] font-semibold text-[#6528F7] text-center">
        Available Peers
      </h1>
      <form
        className="flex justify-between border border-gray-200 px-4 py-2"
        onSubmit={filterPeers}
      >
        <input
          className=" px-2 border border-gray-400 w-[80%]"
          type="text"
          name="filterText"
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
        />
        <button
          className="bg-[#6528F7] px-4 py-2 text-white rounded-md"
          type="submit"
        >
          Filter
        </button>
      </form>
      {filteredPeers.map((peer) => {
        return (
          <PeerCard
            key={peer.student_id}
            student_id={peer.student_id}
            student_name={peer.student_name}
            program={peer.student_program}
            subjects={peer.student_topics}
            email={peer.email}
            phone={peer.phone}
          />
        );
      })}
      <Form onFormSubmit={onAddPeer} />
    </div>
  );
};

export default Peers;
