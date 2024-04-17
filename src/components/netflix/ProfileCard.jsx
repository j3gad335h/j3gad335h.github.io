import { useState } from "react";
import { profiles } from "@/constants/netflix";
import { lock } from "@/assets";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const ProfileCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ul className="flex flex-row gap-5 justify-center  list-none">
        {profiles.map((profile, index) => (
          <li className="flex flex-col items-center text-center" key={index}>
            <div
              className="hover:text-white text-gray-600"
              onClick={handleOpen}
            >
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ProfileLockModal length={4} />
      </Modal>
    </div>
  );
};
const ProfileLockModal = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(""));

      // Auto-focus to next input on entry
      if (element.nextSibling && value) {
        element.nextSibling.focus();
      }
    }
  };
  return (
    <div className="bg-black h-[80vh] flex flex-col justify-center items-center align-middle text-center">
      <p>Profile Lock is currently on</p>
      <h2>Enter your PIN to access this profile.</h2>
      <form action="">
        <Box display="flex" justifyContent="center">
          {Array.from({ length }).map((_, index) => (
            <TextField
              key={index}
              type="tel"
              variant="outlined"
              inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
              sx={{ width: "40px", margin: "30px 10px" }}
              onChange={(e) => handleChange(e.target, index)}
              value={otp[index]}
              className=" border-white border border-solid "
            />
          ))}
        </Box>
      </form>
      <h2>Forgot PIN?</h2>
    </div>
  );
};

export default ProfileCard;
