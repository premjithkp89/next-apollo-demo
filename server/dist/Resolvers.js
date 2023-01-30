var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import casual from "casual";
const getUserData = () => {
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
let people = getUserData();
export const resolvers = {
    Query: {
        getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
            return people;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map