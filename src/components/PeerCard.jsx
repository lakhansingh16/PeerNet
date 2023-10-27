/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import whatsapp from '/whatsapp.png'
const PeerCard = ({ student_id, student_name, program, subjects, email, phone }) => {
  return (
    <div className="flex flex-col md:flex-row border justify-between cursor-pointer border-gray-700 rounded-lg px-8 py-4 bg-[#EDE4FF]">
      <div>
      <section>
        <span className="font-semibold text-xl">{student_name}</span>{" "}
        <span>- {student_id}</span>
        <p className="mt-4">{ program }</p>
        <p className="mt-4">{ email }</p>
      </section>
      <ul className="flex flex-wrap gap-4 my-4">
        {subjects.map((subject) => {
          return (
            <li
              className="bg-[#6528F7] text-white p-2 rounded-md text-sm md:text-[1rem]"
              key={subject}
            >
              {subject}
            </li>
          );
        })}
      </ul>
      </div>
      <div className="min-w-max self-center">
      <a  className='bg-green-300 px-4 py-2 rounded-md' href={`https://api.whatsapp.com/send?phone=${phone}`} target='_blank' rel="noreferrer">Chat</a>
      </div>
    </div>
  );
};

export default PeerCard;
