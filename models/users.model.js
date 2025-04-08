module.exports = mongoose =>{
    var userDetails = mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        phone: String,
        id: String,
        userType: String,
        status: String
    });

    var schema = mongoose.Schema(
        {
            userDetails: userDetails
        },
        { timestamps: true }
    );
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
      const users = mongoose.model("users", schema);
      return users;
}