import React from 'react'
import Table from '../Components/Table/Table'

type Props = {}

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>FinShark Design Page</h1>
    <h2>
      Design guide- This is the design guide for Fin Shark. These are reuable
      components of the app with brief instructions on how to use them.
    </h2>
    <Table />
    <h3>
      Table - Table takes in a configuration object and company data as
      params. Use the config to style your table.
    </h3>
  </>
  )
}

export default DesignPage