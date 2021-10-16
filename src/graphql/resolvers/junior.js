export default {
  Query: {
    getJuniors: async (_, {}, { Junior }) => {
      let juniors = await Junior.find()
      return juniors
    }
  },

  Mutation: {
    createJunior: async (_, { newJunior }, { Junior }) => {
      let junior = await Junior.create(newJunior)
      return junior
    }
  }
}