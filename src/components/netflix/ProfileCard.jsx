import { profiles } from "@/constants/netflix";
import { lock } from "@/assets";
const ProfileCard = () => {
  return (
    <div>
      <ul className="flex flex-row gap-5 justify-center  list-none">
        {profiles.map((profile, index) => (
          <li className="flex flex-col items-center text-center" key={index}>
            <div className="hover:text-white text-gray-600">
              <img
                src={profile.image}
                alt=""
                className="w-[10vw] h-[10vw] n rounded-md cursor-pointer border-solid border-transparent hover:border-solid hover:border-[#e5e5e5]"
              />
              <h4 className="font-normal my-[.6em] ">{profile.name}</h4>
            </div>
            <img src={profile.locked ? lock : ""} alt="" className="w-6 h-6" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
