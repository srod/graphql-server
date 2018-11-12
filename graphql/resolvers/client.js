export default {
  Query: {
    client: async (root, args, { models }) => {
      args._id = args.id;
      delete args.id;
      const client = await models.Client.findOne(args);
      return client;
    },
    clients: async (root, args, { models }) => {
      const clients = await models.Client.find({});
      return clients;
    }
  },
  Mutation: {
    addClient: async (root, { name, email }, { models }) => {
      const newClient = new models.Client({ name, email });

      let res;

      try {
        res = await newClient.save();
      } catch (e) {
        throw new Error(e);
      }

      return res;
    },
    editClient: async (root, { id, name, email }, { models }) => {
      let res;

      try {
        res = await models.Client.findOneAndUpdate(
          { _id: id },
          { $set: { name, email } }
        );
      } catch (e) {
        throw new Error(e);
      }

      return res;
    },
    deleteClient: (root, args) => {
      return new Promise((resolve, reject) => {
        Client.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
