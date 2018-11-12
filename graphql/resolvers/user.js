export default {
  Query: {
    user: (root, args, { models }) => {
      args._id = args.id;
      delete args.id;
      return new Promise((resolve, reject) => {
        models.User.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: (root, args, { models }) => {
      return new Promise((resolve, reject) => {
        models.User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addUser: (root, { id, name, email }, { models }) => {
      const newUser = new models.User({ id, name, email });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: (root, { id, name, email }, { models }) => {
      return new Promise((resolve, reject) => {
        models.User.findOneAndUpdate({ id }, { $set: { name, email } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: (root, args, { models }) => {
      return new Promise((resolve, reject) => {
        models.User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
