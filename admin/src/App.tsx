import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';

import { dataProvider } from './dataProvider';
import { UserList } from './Users';
import { PostList,PostEdit,PostCreate } from './PostList';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";
import { DataProvider } from 'react-admin';

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
</Admin>
);