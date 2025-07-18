const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 25,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 15,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
      //   validate: {
      //     validator: function (value) {
      //       return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value);
      //     },
      //     message: "Password must be at least 6 characters and include a number",
      //   },
    },
    loginCount: {
      type: Number,
      default: 0,
    },
    lastLoginAt: Date,
    loginHistory: [
      {
        loginAt: Date,
        ip: String,
        userAgent: String,
      },
    ],
  },
  { timestamps: true }
);

// Virtual field for confirm password
userSchema.virtual("confirmPassword").set(function (value) {
  this._confirmPassword = value;
});

userSchema.pre("validate", function (next) {
  if (this.isNew && this.password !== this._confirmPassword) {
    this.invalidate("confirmPassword", "Passwords do not match");
  }
  next();
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
