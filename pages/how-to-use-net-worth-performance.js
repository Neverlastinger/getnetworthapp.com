/* eslint-disable react/jsx-one-expression-per-line */
import HTMLHead from 'components/HTMLHead';
import TextPage, { PageContent, PageHeader, Screenshot, GetTheApp } from 'components/TextPage';
import Link from 'next/link';

export default function NetWorthPage() {
  return (
    <TextPage>
      <HTMLHead title="How do I use Net Worth Performance app? | Net Worth Performance" />
      <PageHeader>How to use the app? </PageHeader>
      <PageContent>
        <p>
          The <strong>Net Worth Performance</strong> app for Android & iOS helps you calculate and track your net worth over time.
        </p>
        <h2>How does the app access my financial data?</h2>
        <p>
          <strong>Net Worth Performance</strong> never asks you about any personal accounts or credentials.
          We don't access your bank or investments accounts. You decide what data to enter into the app.
          It's like tracking your finances in spreadsheets, but utilizing better user experience and interface,
          and giving life to the raw numbers by providing charts and statistics out of the box.
        </p>
        <p>
          You start by entering your first <Link href="/asset">asset</Link>.
          You can name it anything you'd like, e.g. "Gold" if you own any gold.
          Then, you enter the monetary amount for the current month, chose a category and currency.
          There are a few predefined categories you can chose from, but you can delete, rename, and add new categories whenever you'd like.
        </p>
        <Screenshot img="categories.png" />
        <p>
          Tap on the "Add a new category" to add a "Commodities" category for your new assets.
          From now on, you will get charts and statistics for the Commodities category no matter if you have a single or multiple assets assigned to this category.
        </p>
        <p>
          You decide how to organize assets by categories. Some users prefer more general categories, e.g. "Non-monetary". It is up to you.
        </p>
        <Screenshot img="add-category.png" />
        <p>
          The currency field represents the currency you want to track this asset in.
          If your base currency is different than the selected asset currency
          (e.g. you live in Germany and use Euro, but you track your gold in US Dollars), the value will be automatically converted
          when calculating your net worth based on the currency exchange rate at the start of the month.
          You can configure your base currency by tapping on the Profile tab.
        </p>
        <p>
          The following currencies are currently supported:
          Euro, United States dollar, Swiss franc, British pound, Bulgarian lev, Japanese yen,
          South Korean won, Hong Kong dollar, Chinese yuan, Singapore dollar, Canadian dollar,
          Australian dollar, New Zealand dollar, South African rand, Swedish krona, Norwegian krone,
          Danish krone, Russian ruble, Turkish lira, Czech koruna, Romanian leu, Mexican peso,
          Indian rupee, Israeli new shekel, Philippine peso.
        </p>
        <p>
          We are always open to add a new currency if you need one.
        </p>
        <Screenshot img="currency.png" />
        <h2>What about my existing data?</h2>
        <p>
          You may have used different ways to track your assets in the past - e.g. in spreadsheets or even on paper.
          When adding more assets in the <strong>Net Worth Performance</strong> app, you will start seeing the distribution of your net worth by assets and categories.
        </p>
        <Screenshot img="pie.png" />
        <Screenshot img="bar.png" />
        <p>
          However, in order to see charts for your historical data, you need to add it for every asset.
          You can do this by going to the Existing tab and tapping on the Add historical data button.
        </p>
        <Screenshot img="historical-data.png" />
        <p>
          Once you have data for more than one month, you will start seeing range charts and statistics for your net worth growth.
          You can switch to 1, 2, and 6 months view, year-to-date, 1 year view, or the maximum period since your first record.
        </p>
        <Screenshot img="net-worth-range.png" />
        <h2>Can I see how a specific asset or category changes over time?</h2>
        <p>
          You can long-tap on the pie chart to see how a specific slice (an asset or a category of assets) performs over time.
          For instance, when long-tapping on the Bank Account category, this user sees that their bank accounts' amount has increased by $223 (3.19%) for a period of 1 year.
          However, as the bottom chart shows, the Bank Account category now takes smaller part of the overal net worth compared to an year earlier (-12.74 percentage points).
          This may mean that the user has spent the money, or invested in non-bank account assets.
        </p>
        <Screenshot img="category-range.png" />
        <h2>Can I use the app on different devices?</h2>
        <p>
          <strong>Net Worth Performance</strong> is an app you can use during your entire life to track your net worth.
          We want you to keep the data even when you change phones or laptops. That's why we store the minimum amount of data to your phone.
          You can use different devices to access the app and all devices are automatically syncronized in real time.
        </p>
        <p>
          Initially, after you download the app from the Apple app store or Google play store,
          you start using it by registering with an email and a password, or proceeding with your Google or Facebook account.
          The app stores your data securely in the Google cloud, and your password can never be read by the owners of the app or even Google.
          We never send emails. Your email is used only as your unique identifier.
        </p>
        <Screenshot img="register.png" />
        <h2>My assets' value have changed. What now?</h2>
        <p>
          <strong>Net Worth Performance</strong> is an app for long-term use.
          You track your assets once per month, for example at the beginning of the month.
          You even receive a push notification to remind you to track your assets.
          Once you enter the new values, you will see the new outlook of your net worth.
        </p>
        <Screenshot img="notification.png" />
        <GetTheApp />
      </PageContent>
    </TextPage>
  );
}
