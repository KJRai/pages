import Auth from '../comps/authentication';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Auth')({
  component: HomeComponent,
});

function HomeComponent() {
  return <Auth />;
}

