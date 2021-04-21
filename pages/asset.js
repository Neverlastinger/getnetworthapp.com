/* eslint-disable react/jsx-one-expression-per-line */
import HTMLHead from 'components/HTMLHead';
import TextPage, { PageContent, PageHeader } from 'components/TextPage';
import Link from 'next/link';

export default function NetWorthPage() {
  return (
    <TextPage>
      <HTMLHead title="What is an asset? | Net Worth Performance" />
      <PageHeader>What is an asset?</PageHeader>
      <PageContent>
        <p>
          An asset is anything owned by a person, a company, or even a country, that has monetary value.
          Each asset can be converted into cash (although cash is also considered an asset).
          People usually own assets different than money with the idea that their value will increase over time,
          thus thier <Link href="/net-worth">net worth</Link> will increase too. Not every asset, however, increases its value over time.
          A personal car, for instance, decreases as the time passes. A car is also a liability in the sense that it requires
          a lot of monetary resources (e.g. fuel, insurances, maintenance), so it decreases its owner's net worth.
        </p>
        <p>
          When people think about assets, first things that come to mind are the tangible assets.
          A tangible asset is anything that can be touched, a physical property.
          An asset can also be intangible, a non-physical resource like bonds and stocks.
          A corporation can also possesses copyrights, computer programs, and patents that are considered part of their assets.
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
