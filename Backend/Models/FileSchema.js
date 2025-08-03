import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  filetype: {
    type: String,
    required: true,
  },
  filesize: {
    type: Number,
    required: true,
  },
  fileurl: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },

  isPublic: {
    type: Boolean,
    default: false,
  },

 
  shareId: {
    type: String, 
    unique: true,
    sparse: true,
  },

  expiresAt: {
    type: Date,
    default: null,
  },

  sharedWith: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }]
});
const File = mongoose.model("File", FileSchema);
export default File;
