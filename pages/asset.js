/* eslint-disable react/jsx-one-expression-per-line */
import HTMLHead from 'components/HTMLHead';
import TextPage, { PageContent, PageHeader } from 'components/TextPage';
import Link from 'next/link';

export default function NetWorthPage() {
  return (
    <TextPage>
      <HTMLHead title="What is asset? | Net Worth Performance" />
      <PageHeader>What is asset?</PageHeader>
      <PageContent>
        <p>
          An asset is anything owned by a person, company, or even a country, that has monetary value.
          People usually own assets different than money with the idea that their value will increase over time,
          thus thier <Link href="/net-worth">net worth</Link> will increase too. Not every asset however increases over time.
          A car, for instance, decreases in value when used over time. A car is also a liability in the sense that it requires
          a lot of monetary resources (e.g. fuel, insurances, maintenance), so it decreases its owner's net worth.
        </p>
        <p>
          Some examples of assets include:
          <ul>
            <li>cash</li>
            <li>bank account</li>
            <li>gold, silver, and any commodity with a value</li>
            <li>stocks</li>
            <li>bonds</li>
            <li>P2P investments</li>
            <li>real estate</li>
            <li>office equipment and inventory</li>
            <li>vehicles</li>
          </ul>
        </p>
      </PageContent>
    </TextPage>
  );
}
