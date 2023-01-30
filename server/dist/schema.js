export const typeDefs = `#graphql
type User {
  name: String,
  surname:String,
  address:String,
  email:String,
  phone:String
}
type Query {
  getAllUsers: [User]
}
`;
import casual from "casual";
export const getUserData = () => {
    const data = {
        users: [],
    };
    // Create 100 users
    for (let i = 0; i < 2000; i++) {
        data.users.push({
            name: casual.first_name,
            surname: casual.last_name,
            address: casual.street,
            phone: casual.phone,
            email: casual.email,
            postalCode: casual.zip,
            city: casual.city,
            number: casual.building_number,
            id: casual.uuid,
        });
    }
    return data.users;
};
//# sourceMappingURL=schema.js.map