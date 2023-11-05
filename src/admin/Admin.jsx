import { dataProvider } from "./dataProvider";
import { Admin, Resource, ShowGuesser } from "react-admin";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";

export const AdminPage = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    // authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      show={ShowGuesser}
      icon={UserIcon}
    />
  </Admin>
);
