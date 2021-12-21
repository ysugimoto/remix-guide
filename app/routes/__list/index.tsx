import type { MetaFunction } from 'remix';
import Banner from '~/components/Banner';
import { formatMeta } from '~/helpers';

export let meta: MetaFunction = () => {
  return formatMeta({
    title: 'Remix Guide',
    description: 'An interactive list of awesome stuffs about Remix',
    viewport: 'width=device-width, initial-scale=1',
    'og:url': 'https://remix.guide',
  });
};

export default function Index() {
  return <Banner />;
}
