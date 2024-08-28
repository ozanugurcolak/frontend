import React from 'react'
import Table from '../Components/Table/Table'
import RatioList from '../Components/RatioList/RatioList'
import { TestDataCompany, testIncomeStatementData } from '../Components/Table/TestData';
import { CompanyKeyMetrics } from '../company';
type Props = {}

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>FinShark Design Page</h1>
    <h2>
      Design guide- This is the design guide for Fin Shark. These are reuable
      components of the app with brief instructions on how to use them.
    </h2>
    <RatioList config={tableConfig} data={testIncomeStatementData} />
    <Table config={tableConfig} data={testIncomeStatementData} />
    <h3>
      Table - Table takes in a configuration object and company data as
      params. Use the config to style your table.
    </h3>
  </>
  )
}

export default DesignPage