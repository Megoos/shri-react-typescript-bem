import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import Header from '../Header/Header@mobile';
import { App as AppCommon } from './App';

const cnApp = cn('App');
const cnHeader = cn('Header');

// registry with mobile versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);

export const App = withRegistry(registry)(AppCommon);
