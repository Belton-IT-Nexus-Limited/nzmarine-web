import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomeB as Home } from './pages/concepts/HomeB';
import { Membership } from './pages/Membership';
import { MembershipBenefits } from './pages/MembershipBenefits';
import { RecognisedMembers } from './pages/RecognisedMembers';
import { SectorGroups } from './pages/SectorGroups';
import { Join } from './pages/Join';
import { Directory } from './pages/Directory';
import { Export } from './pages/Export';
import { Destination } from './pages/Destination';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { News } from './pages/News';
import { NewsArticle } from './pages/NewsArticle';
import { Training } from './pages/Training';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Publications } from './pages/Publications';
import { Friends } from './pages/Friends';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'membership', element: <Membership /> },
      { path: 'membership/benefits', element: <MembershipBenefits /> },
      { path: 'membership/recognised-members', element: <RecognisedMembers /> },
      { path: 'membership/sector-groups', element: <SectorGroups /> },
      { path: 'join', element: <Join /> },
      { path: 'directory', element: <Directory /> },
      { path: 'export', element: <Export /> },
      { path: 'destination-nz', element: <Destination /> },
      { path: 'events', element: <Events /> },
      { path: 'events/:slug', element: <EventDetail /> },
      { path: 'news', element: <News /> },
      { path: 'news/:slug', element: <NewsArticle /> },
      { path: 'training', element: <Training /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'publications', element: <Publications /> },
      { path: 'friends-of-nz-marine', element: <Friends /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
