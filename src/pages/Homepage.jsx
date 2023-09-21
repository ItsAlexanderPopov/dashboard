import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Stacked, Button, SparkLine, Pie } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'

const Homepage = () => {
  return (
    <div className='m-10 flex justify-center items-center flex-col'>
      {/* Earnings section  */}
      <div className='flex flex-wrap lg:flex-nowrap rounded-xl justify-center gap-4'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl'>
          <div className='flex flex-col items-center text-center m-8 gap-2'>
              <p className='font-bold text-slate-500 dark:text-white text-xl'>Earnings</p>
              <p className='text-xl'>$42,235.31</p>
            <Button
            color="white"
            bgColor="#748BA7"
            text="Download Report"
            size="md"
            borderRadius="10px"
            />
          </div>
        </div>
        
        {/* Cards section */}
        <div className='flex gap-4 lg:flex-nowrap flex-wrap justify-center w-full self-center'>
          {earningData.map((item) => (
            <div
            key={item.title}
            className='rounded-xl flex flex-col items-center gap-2 p-4 w-full sm:w-auto
            bg-white dark:text-gray-200 dark:bg-secondary-dark-bg'
            >
              <p className='text-lg font-semibold text-slate-500 dark:text-white'>{item.title}</p>
              <button
              type='button'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='text-3xl rounded-full opacity-80 p-3 hover:drop-shadow-md'
              >
                {item.icon}
              </button>
              <p>
                <span className='text-lg font-semibold mr-2'>
                  {item.amount}
                </span>
                <span className={`text-sm font-bold align-text-top ${item.percentage < 0 ? 'text-red-500' : 'text-green-500'}`}> 
                  {item.percentage}%
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
        {/* Revenue section */}
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
         mt-6 rounded-2xl'>
            <div className='lg:flex'>
              <div className='lg:border-r-1 border-color m-4 lg:pr-20 flex flex-col items-center text-center lg:text-start lg:items-start'>
              <p className='text-3xl lg:text-xl font-semibold text-slate-500 mb-12 dark:text-white'>Revenue Updates</p>
                  <p>
                    <span className='text-xl md:text-3xl font-semibold'>$53,443</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer
                  bg-teal-500 ml-3 text-xs rounded-full text-white'>21%</span>
                  </p>
                  <p className='text-slate-500 mb-8'>Budget</p>
                <div>
                  <p>
                    <span className='text-xl md:text-3xl font-semibold'>$21,241</span>
                  </p>
                  <p className='text-slate-500 mt-1'>Expense</p>
                </div>
                
                <div className='mt-5'>
                  <SparkLine
                    id="line-sparkline"
                    type="Line"
                    currentColor="#748BA7"
                    color="#748BA7"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                  />
                </div>
                <div className='my-10'>
                  <Button
                    color="white"
                    bgColor="#748BA7"
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>

              <div className='lg:border-r-1 border-color m-4 lg:pr-20 flex flex-col items-center text-center lg:text-start lg:items-start'>
              <p className='text-3xl lg:text-xl font-semibold text-slate-500 mb-6 dark:text-white'>Transactions</p>
                <div className='flex gap-6 lg:place-self-end'>
                  <p className='flex items-center text-slate-500'>
                    <span><GoDotFill/></span>
                    <span>Expense</span>
                  </p>
                  <p className='flex items-center text-teal-500'>
                    <span><GoDotFill/></span>
                    <span>Budget</span>
                  </p>
                </div>
                <div>
                  <Stacked width="260px" height="300px"/>
                </div>
              </div>
              <div className='lg:border-r-1 border-color mt-4 ml-4 lg:pr-20 flex flex-col items-center text-center lg:text-start lg:items-start'>
                <p className='text-3xl lg:text-xl font-semibold text-slate-500 dark:text-white'>Sales</p>
                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="340px" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage