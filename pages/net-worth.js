/* eslint-disable react/jsx-one-expression-per-line */
import HTMLHead from 'components/HTMLHead';
import TextPage, { PageContent, PageHeader } from 'components/TextPage';
import Link from 'next/link';

export default function NetWorthPage() {
  return (
    <TextPage>
      <HTMLHead title="What is net worth? | Net Worth Performance" />
      <PageHeader>What is net worth?</PageHeader>
      <PageContent>
        <p>
          Net worth is the value of your&nbsp;
          <Link href="/asset">assets</Link>
          &nbsp;(e.g. cash, bank accounts, commodities like gold, investments in stocks, bonds, P2P, and anything owned that has monetary value).
          It is an important metric in some countries and for some institutions, like banks for example.
          In addition to an individual, net worth is also tracked for companies, sectors, or entire countries.
        </p>
        <p>
          More specifically, net worth is the value that is left after subtracting liabilities (e.g. mortgages or loans) from assets.
          Some of the people with the highest net worth are <a href="https://en.wikipedia.org/wiki/Jeff_Bezos" target="_blank" rel="noreferrer">Jeff Bezos</a>
          , <a href="https://en.wikipedia.org/wiki/Elon_Musk" target="_blank" rel="noreferrer">Elon Musk</a>
          , and <a href="https://en.wikipedia.org/wiki/Warren_Buffett" target="_blank" rel="noreferrer">Warren Buffett</a>.
          Net worth can also be negative, if the value of your liabilities is higher than the value of your assets.
          For instance, this could happen if you have a mortgage, a car loan, a negative credit card balance, but your bank account does not have
          enough money to cover all of these debts. It is crutial to personal finance to aim for a positive net worth that increases over time
          (except when you are young and invest in your education).
        </p>
        <p>
          From personal finance perspective, it is important to track your net worth to ensure your money is distributed into assets according to your risk tolerance.
          Volatile assets (e.g. having stocks of an innovative tech start up) can impact your net worth in a negative or a positive way for a short period of time.
          When you have assets in different currencies, your net worth can be affected by changes of the currency rates.
        </p>
      </PageContent>
    </TextPage>
  );
}
