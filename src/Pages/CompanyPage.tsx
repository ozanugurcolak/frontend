import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../company'
import { getCompanyProfile } from '../api'
import Sidebar from '../Components/Sidebar/Sidebar'
import CompanyDashboard from '../Components/CompanyDashboard/CompanyDashboard'
import Tile from '../Components/Tile/Tile'

interface Props { }

const CompanyPage = (props: Props) => {
  let { ticker } = useParams()
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInıt = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0])
    }
    getProfileInıt()
  }, [])
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar/>
          <CompanyDashboard ticker={ticker!}> 
            <Tile title='Company Name' subTitle={company.companyName}></Tile>
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="Market Cap" subTitle={company.mktCap.toString()} />
            </CompanyDashboard>


        </div>
      ) : (
        <div>Company Not Found !</div>
      )}
    </>
  )
}

export default CompanyPage