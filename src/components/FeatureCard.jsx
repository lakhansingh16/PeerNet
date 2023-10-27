/* eslint-disable react/prop-types */
const FeatureCard = ({ image, description }) => {
  return (
    <div className="w-full sm:w-[20%] p-6 bg-gray-200 rounded-lg text-center">
      <img className="w-[100px] h-[100px] mx-auto my-10" src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
