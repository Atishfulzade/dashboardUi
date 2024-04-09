import { IoMdAdd } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { bg1 } from "./assets";
import { bg2 } from "./assets";
import { bg3 } from "./assets";
import { bg4 } from "./assets";

export const Chips = [
  {
    title: "Create report",
    symbol: IoMdAdd(),
    bg: "bg-cyan-800",
    text: "text-slate-50",
    border: "border-cyan-800",
  },
  {
    title: "Share this dashboard",
    symbol: "",
    bg: "bg-transparent",
    text: "text-cyan-800",
    border: "border-cyan-800",
  },
  {
    title: "Select Duration",
    symbol: "",
    bg: "bg-transparent",
    text: "text-slate-600",
    border: "border-slate-600",
  },
  {
    title: "Compare with Duration",
    symbol: "",
    bg: "bg-transparent",
    text: "text-slate-600",
    border: "border-slate-600",
  },
];

export const cards = [
  {
    heading: "Efficiency",
    subheading: "Lorem epsum",
    price: "1.1121",
    symbol: FaCaretDown(),
    data: "+0.0015",
    percent: "+0.13%",
    currency: "0.00 USD",
    text: "text-slate-50",
    bgImg: bg1,
    bgColor: "bg-blue-300",
  },
  {
    heading: "Time to market",
    subheading: "Lorem epsum",
    price: "327.176",
    symbol: FaCaretUp(),
    data: "-97914.0",
    percent: "-23.03%",
    currency: "131,041,723,108 JPY",
    text: "text-slate-50",
    bgImg: bg2,
    bgColor: "bg-teal-700",
  },
  {
    heading: "Tech Debt",
    subheading: "Lorem epsum",
    price: "1.1763",
    symbol: FaCaretUp(),
    data: "+0.0015",
    percent: "+0.13%",
    currency: "0.00 USD",
    text: "text-slate-800",
    bgImg: bg3,
    bgColor: "bg-red-50",
  },
  {
    heading: "Predictability",
    subheading: "Lorem epsum",
    price: "0.00313010",
    symbol: FaCaretDown(),
    data: "-0.00050430",
    percent: "-13.88%",
    currency: "1,566 BTC",
    text: "text-slate-50",
    bgImg: bg4,
    bgColor: "bg-red-400",
  },
];
export const whiteCard = [
  {
    title: "On Time",
    content: [
      { label: "Completed Iterations", value: "7" },
      { label: "Total Iterations", value: "9" },
      { label: "% Iterations Done", value: "77.8%" },
    ],
    indicatorColor: "bg-green-400",
  },
  {
    title: "On Scope",
    content: [
      { label: "Story Points Done", value: "3200" },
      { label: "Total Story Points", value: "4230" },
      { label: "% Stories Done", value: "70.9%" },
    ],
    indicatorColor: "bg-green-400",
  },
  {
    title: "On Velocity",
    content: [
      { label: "Average Velocity", value: "428.6" },
      { label: "Required Velocity", value: "615.0" },
    ],
    indicatorColor: "bg-red-400",
  },
];
export const data = [
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTime: "00:05:43",
    entrances: "802,873 (16.75%)",
    exitPercentage: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
  {
    page: "/Fixed Rate",
    pageviews: "803,792 (14.39%)",
    uniquePageviews: "456,792 (13.93%)",
    avgTime: "00:05:24",
    entrances: "793,982 (15.64%)",
    exitPercentage: "76.13%",
    pageValue: "$6,792 (36.16%)",
  },
  {
    page: "/cycle time",
    pageviews: "740,702 (13.46%)",
    uniquePageviews: "405,860 (13.25%)",
    avgTime: "00:04:36",
    entrances: "684,873 (14.33%)",
    exitPercentage: "41.54%",
    pageValue: "$702 (3.47%)",
  },
  {
    page: "/lead time",
    pageviews: "676,659 (10.29%)",
    uniquePageviews: "340,765 (11.70%)",
    avgTime: "00:04:12",
    entrances: "638,982 (13.02%)",
    exitPercentage: "46.42%",
    pageValue: "$2,659 (11.64%)",
  },
  {
    page: "/new features",
    pageviews: "508,837 (7.74%)",
    uniquePageviews: "317,543 (10.66%)",
    avgTime: "00:04:11",
    entrances: "555,982 (10.44%)",
    exitPercentage: "27.40%",
    pageValue: "$4,508 (23.43%)",
  },
  {
    page: "/ready features",
    pageviews: "495,938 (7.38%)",
    uniquePageviews: "310,554 (10.58%)",
    avgTime: "00:02:56",
    entrances: "297,303 (6.07%)",
    exitPercentage: "28.89%",
    pageValue: "$495 (7.38%)",
  },
  {
    page: "/system testing",
    pageviews: "319,002 (3.95%)",
    uniquePageviews: "167,997 (5.03%)",
    avgTime: "00:02:24",
    entrances: "201,983 (4.96%)",
    exitPercentage: "32.87%",
    pageValue: "$2,319 (3.95%)",
  },
];
