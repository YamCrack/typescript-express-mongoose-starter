import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import CirugiasRoute from './routes/cirugias.route';

validateEnv();


// new IndexRoute(),
const app = new App([ new UsersRoute(), new AuthRoute(),  new CirugiasRoute()]);

app.listen();
