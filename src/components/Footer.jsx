import React from 'react'
import logo from "../assets/logo.svg"
import { products } from '../data/products'
import { company } from '../data/company'
import { Resources } from '../data/resources'
import facebook from "../assets/facebook.svg"
import you_tube from "../assets/you_tube.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import appStore from "../assets/appStore.svg"
import google from "../assets/google.svg"


function Footer() {

  return (
    <footer className='w-full h-screen bg-zinc-900'>

      <div className='w-full pl-10 pt-20 h-[500px] flex items-start'>
        <div className='w-full'>
          <img src={logo} alt="" />
        </div>
        <ul className='w-full flex flex-col gap-y-2'>
          {products.map(item => (
            <li className="text-zinc-500" key={item.id}>
              <h2 className='font-semibold text-white'>{item.title}</h2>
              {item.list}


            </li>
          ))}

        </ul>
        <ul className='w-full flex flex-col gap-y-2'>
          {company.map(item => (
            <li className='text-zinc-500' key={item.id}>
              <h2 className='font-semibold text-white'>{item.title}</h2>

              {item.list}

            </li>
          ))}

        </ul>
        <ul className='w-full flex flex-col gap-y-2'>

          {Resources.map(item => (
            <li className='text-zinc-500' key={item.id}>
              <h2 className='font-semibold text-white'>{item.title}</h2>
              {item.list}
            </li>
          ))}

        </ul>
      </div>
      <div className='w-full py-4 flex items-center justify-start gap-x-60 px-14 mt-12'>
        <div className='flex  items-center gap-x-5'>
          <img className='w-5' src={facebook} alt="" />
          <img className='w-5' src={you_tube} alt="" />
          <img className='w-5' src={instagram} alt="" />
          <img className='w-5' src={linkedin} alt="" />
          <img className='w-5' src={twitter} alt="" />
        </div>
        <div className='flex items-center gap-x-6'>
          <img className='w-28' src={appStore} alt="" />
          <img className='w-28' src={google} alt="" />
        </div>

      </div>
      <div className='w-full flex flex-col gap-y-3 h-[600px] p-20 bg-zinc-900 px-14 '>
        <div className='flex flex-col gap-y-1'>
        <p className='text-sm text-zinc-400'>©2022 Brex I. (“Brex”) and the Brex logo are registered trademarks.</p>
        <p className='text-sm text-zinc-400'>Brex Inc. providesnc the Brex Mastercard® Corporate Credit Card, issued by Emigrant Bank, Member FDIC or Fifth Third Bank, NA., Member FDIC. Use of Brex’s user data access application <br/> programming interfaces is subject to the</p>
        </div>
        <div>
          <p className='text-sm text-zinc-400'>Brex Treasury LLC (“Brex Treasury”) is an affiliate of Brex and a member of FINRA and SIPC that provides Brex Cash, an account that allows customers to sweep uninvested cash balances into <br/> certain money market mutual funds or FDIC-insured bank accounts at Brex’s partner banks, such as JPMorgan Chase Bank, Member FDIC. A list of partner banks is available at</p>
          <p className='text-sm text-zinc-400'>https://www.brex.com/legal</p>
        </div>
        <div>
          <p className='text-sm text-zinc-400'>
          Investing in securities products involves risk and you could lose money. Brex Treasury is not a bank nor an investment adviser and your Brex Cash account is not an FDIC-insured bank account.
          </p>
        </div>
        <div>
          <p className='text-sm text-zinc-400'>*Your account earns yield on an annual basis. The figure shown here is an estimate of the annualized yield based on the average performance of the past seven days.* Yield is variable and fluctuates. <br/> Carefully consider a fund's investment objectives, risks, charges and expenses, as described in the applicable mutual fund’s prospectus. Contact us for a copy of the fund prospectus. Past <br/> performance does not guarantee future results, which may vary.</p>
        </div>
        <div>
          <p className='text-sm text-zinc-400'>SIPC currently protects the assets in each of your securities accounts at Brex Treasury up to $500,000 (including $250,000 for claims for cash). Please see</p>
        </div>
        <div>
          <p className='text-sm text-zinc-400'>
          This is not an offer, solicitation of an offer, recommendation or advice to buy or sell any security, financial product, instrument or to open a brokerage account in any jurisdiction where Brex <br/> Treasury is not registered. Review the background of Brex Treasury or its investment professionals on
          </p>
        </div>
        <div>
          <p className='text-sm text-zinc-400'>Brex does not provide, nor does it guarantee, any third-party product, service, information, or recommendation and may pay third parties and/or be paid by them for customer referrals.</p>
        </div>
        <div>
          <p className='text-base text-zinc-300'>Services may be provided by Brex Payments LLC (NMLS #2035354).</p>
        </div>


      </div>

    </footer>
  )
}

export default Footer