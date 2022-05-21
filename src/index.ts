import { User } from "./User";
import { Compony } from "./Compony";
import { CustomMap } from "./CustomMap";

const user = new User();
const compony = new Compony();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(compony);
