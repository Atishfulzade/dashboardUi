import React from "react";
import { chart1, chart2, chart3, chart4, chart5, chart6 } from "../../assets";
import { data } from "../../Constant";
const Table = () => {
  return (
    <div className="overflow-x-auto  bg-white rounded shadow-md mt-2">
      <div className="flex border-b border-slate-200 border-0  border-solid w-full h-11 justify-between  items-center px-2  ">
        <select
          name="page"
          id=""
          className="uppercase border-none outline-none"
        >
          <option value="page" className=" uppercase">
            pageviews
          </option>
          <option value="page"> pageviews</option>
          <option value="page"> pageviews</option>
          <option value="page"> pageviews</option>
        </select>
        <div className="flex border border-solid border-slate-300 rounded md:ms-96">
          <h5 className="px-3 py-1 text-sm font-normal border-solid border-r border-l-0 border-y-0 border-slate-300 hover:bg-blue-200 cursor-pointer">
            Today
          </h5>
          <h5 className="px-3 py-1 text-sm font-normal border-solid border-r border-l-0 border-y-0 border-slate-300 hover:bg-blue-200 cursor-pointer">
            Yesterday
          </h5>
          <h5 className="px-3 py-1 text-sm font-normal border-solid border-r border-l-0 border-y-0 border-slate-300 hover:bg-blue-200 cursor-pointer">
            Week
          </h5>
          <h5 className="px-3 py-1 text-sm font-normal border-solid border-r border-l-0 border-y-0 border-slate-300 bg-blue-200 hover:bg-blue-200 cursor-pointer">
            Month
          </h5>
          <h5 className="px-3 py-1 text-sm font-normal border-solid border-r border-l-0 border-y-0 border-slate-300 hover:bg-blue-200 cursor-pointer">
            Quarter
          </h5>
          <h5 className="px-3 py-1 text-sm font-normal border-solid  border-x-0 border-y-0 border-slate-400 hover:bg-blue-200 cursor-pointer">
            Year
          </h5>
        </div>
        <select
          name="page"
          id=""
          className="rounded px-2 border py-1 border-slate-400 outline-none"
        >
          <option value="page" className=" uppercase">
            Select period
          </option>
          <option value="page"> pageviews</option>
          <option value="page"> pageviews</option>
          <option value="page"> pageviews</option>
        </select>
      </div>
      <table className="min-w-full text-sm text-gray-800">
        <thead className=" uppercase  ">
          <tr className=" border-b-2 border-solid border-slate-700 ">
            <th className="px-6 py-3 normal-case text-slate-800 font-semibold">
              Page
            </th>
            <th className="px-6 py-3 text-right flex flex-col justify-end">
              <p className=" normal-case text-slate-800 font-semibold ">
                Pageviews
              </p>
              <h5 className="text-slate-800 text-[17px] font-medium">
                356,928
              </h5>
              <img src={chart1} alt="" className="h-5 w-20" />
            </th>
            <th className="px-6 py-3 text-right">
              <p className=" normal-case text-slate-800 font-semibold">
                Unique Pageviews
              </p>
              <h5 className="text-slate-800 text-[17px] font-medium">
                275,588
              </h5>
              <img src={chart2} alt="" />
            </th>
            <th className="px-6 py-3 text-right">
              <p className=" normal-case text-slate-800 font-semibold">
                Avg. time on page
              </p>
              <h5 className="text-slate-800 text-[17px] font-medium">
                00:03:51
              </h5>
              <img src={chart3} alt="" />
            </th>
            <th className="px-6 py-3 text-right">
              <p className=" normal-case text-slate-800 font-semibold">
                Entrances
              </p>
              <h5 className="text-slate-800 text-[17px] font-medium">
                315.643
              </h5>
              <img src={chart4} alt="" />
            </th>
            <th className="px-6 py-3 text-right">
              <p className=" normal-case text-slate-800 font-semibold">
                % Exit
              </p>
              <h5 className="text-slate-800 text-[17px] font-medium">39.84%</h5>
              <img src={chart5} alt="" />
            </th>
            <th className="px-6 py-3 text-right">
              <p className=" normal-case text-slate-800 font-semibold">
                Page value
              </p>
              <h5 className="text-slate-800 text-[17px] font-medium">
                $19,983
              </h5>
              <img src={chart6} alt="" />
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white border-b border-solid border-slate-700 overflow-x-auto"
            >
              <td className="px-6 py-4">{row.page}</td>
              <td className="px-6 py-4 text-right border-b-2">
                {row.pageviews}
              </td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                {row.uniquePageviews}
              </td>
              <td className="px-6 py-4 text-right">{row.avgTime}</td>
              <td className="px-6 py-4 text-right">{row.entrances}</td>
              <td className="px-6 py-4 text-right">{row.exitPercentage}</td>
              <td className="px-6 py-4 text-right">{row.pageValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
