import { model, Schema } from "mongoose"

const JuniorSchema = new Schema({
  gender: String,
  firstName: String,
  lastName: String,
  address1: String,
  address2: String,
  town: String,
  postcode: String,
  school: String,
  dob: String,
  parents: [{
    firstName: String,
    lastName: String,
    relationship: String,
    email: String,
    phoneNumber: String,
  }],
  brCards: [{
    number: String,
    expired: Boolean,
    expiresAt: String,
  }],
  swimTests: [{
    completedAt: String
  }],
  capsizeTests: [{
    completedAt: String
  }]
}, { timestamps: true })

const Junior = model('juniors', JuniorSchema)

export default Junior