import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Stacked, Button, SparkLine, Pie } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'

const Homepage = () => {
  return (
    //Earnings section 
    <div className='mt-12 flex justify-center items-center flex-col'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center rounded-xl'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-slate-500 dark:text-white text-xl place-self-start'>Earnings</p>
              <p className='text-xl'>$42,235.31</p>
            </div>
          </div>
          <div className='mt-6'>
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
        <div className='flex m-4 gap-4 flex-wrap place-content-center'>
          {earningData.map((item) => (
            <div
            key={item.title}
            className='md:w-56 rounded-xl p-4 flex flex-col items-center gap-3
            bg-white dark:text-gray-200 dark:bg-secondary-dark-bg'
            >
              <p className='text-lg font-semibold text-slate-500 dark:text-white'>{item.title}</p>
              <button
              type='button'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='text-2xl rounded-full opacity-80 p-4 hover:drop-shadow-md'
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
        p-4 mt-6 rounded-2xl'>
            <div className='lg:flex gap-10'>
              <div className='lg:border-r-1 border-color m-4 pr-20 flex flex-col'>
              <p className='text-xl font-semibold text-slate-500 mb-12 dark:text-white'>Revenue Updates</p>
                  <p>
                    <span className='text-3xl font-semibold'>$53,443</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer
                  bg-teal-500 ml-3 text-xs rounded-full text-white'>21%</span>
                  </p>
                  <p className='text-slate-500 mb-8'>Budget</p>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$21,241</span>
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

              <div className='flex flex-col m-4 lg:border-r-1 border-color pr-20'>
              <p className='text-xl font-semibold text-slate-500 mb-6 dark:text-white'>Transactions</p>
                <div className='flex gap-6 place-self-end'>
                  <p className='flex items-center text-slate-500 hover:drop-shadow-xl'>
                    <span><GoDotFill/></span>
                    <span>Expense</span>
                  </p>
                  <p className='flex items-center text-teal-500 hover:drop-shadow-xl'>
                    <span><GoDotFill/></span>
                    <span>Budget</span>
                  </p>
                </div>
                <div>
                  <Stacked width="320px" height="360px"/>
                </div>
              </div>
              <div className='flex flex-col m-4'>
                <p className='text-xl font-semibold text-slate-500 dark:text-white'>Sales</p>
                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="400px" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage