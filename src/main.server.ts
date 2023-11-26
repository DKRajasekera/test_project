import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(LoginComponent, config);

export default bootstrap;