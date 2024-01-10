import mongoose from "mongoose";

const healthInformationSchema = mongoose.Schema({
  hasDonated: {
    type: Boolean,
    required: true,
  },
  isInfected: {
    type: Boolean,
    required: true,
  },
  bloodTransfusion: {
    type: Boolean,
    required: true,
  },

  //physical aspects
});

const Health = mongoose.model("UserHealthInfo", userSchema);

export default Health;
