import Container from "@/components/home/container";
import { gradientBg, home } from "@/constants/home";

import KarachiImage from '@/images/karachi.jpg'
import LahoreImage from '@/images/lahore.jpg'
import IslamabadiImage from '@/images/islamabad.jpg'
import PeshawarImage from '@/images/peshawar.jpg'

import {
  BiHappyBeaming as BeginnerIcon
} from 'react-icons/bi'
import {
  GiBookshelf as CourseIcon
} from 'react-icons/gi'
import {
  AiFillClockCircle as ClockIcon
} from 'react-icons/ai'

import {
  BsBagFill as ProductIcon,
  BsBuilding as BuildingIcon
} from 'react-icons/bs'
import {
  RiMoneyDollarCircleFill as MoneyIcon
} from 'react-icons/ri'

export default function Home() {
  return (<div className="grid grid-flow-row gap-y-4">
    <Container
      className="min-[640px]:text-center max-[640px]:text-left 2xl:p-40 xl:p-36 lg:p-32 md:p-28 sm:p-24 max-sm:p-10 gap-5 grid grid-flow-row text-white"
      bg={gradientBg}
      primary={{
        content: () => <>
          {home[0].entry.first}
          <br />
          {home[0].entry.second}
        </>,
        className: "font-extrabold max-[640px]:text-3xl min-[640px]:text-4xl"
      }}
      secondary={{
        content: home[0].entry.third!,
        className: " font-extrabold"
      }}
    />

    <Container
      className="2xl:p-100/5 lg:p-100/5 md:p-100/10 grid gap-4 grid-flow-row text-center sm:text-left sm:p-10 max-sm:text-left max-sm:p-8"
      primary={{
        content: home[1].entry.first,
        className: "2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg max-sm:text-lg leading-8 font-extrabold"
      }}
      secondary={{
        content: home[1].entry.second!,
        className: 'font-italic'
      }}
    />

    <Container
      className="grid lg:grid-flow-col sm:grid-flow-row items-center justify-center gap-5"
      primary={{
        content: home[2].entry.first,
        className: 'font-extrabold max-[640px]:text-2xl min-[640px]:text-4xl'
      }}
      secondary={{
        content: () => <div className="grid grid-flow-row gap-3">
          <p>{home[2].entry.second!}</p>
          <p>{home[2].entry.third!}</p>
          <p>{home[2].entry.fourth!}</p>
          <p>{home[2].entry.fifth!}</p>
        </div>,
        className: 'text-left'
      }}
      images={[
        { src: KarachiImage, alt: "Karachi" },
        { src: PeshawarImage, alt: "Peshawar" },
        { src: IslamabadiImage, alt: "Islamabad" },
        { src: LahoreImage, alt: "Lahore" }
      ]}
    />

    <Container
      className="2xl:grid-flow-col xl:grid-flow-col lg:grid-flow-col md:grid-flow-col sm:grid-flow-row grid grid-flow-row m-auto gap-6  justify-center w-auto max-[640px]:p-100/10 min-[640px]:p-100/5"
      primary={{
        content: home[3].entry.first!,
        className: "font-extrabold max-[640px]:text-2xl min-[640px]:text-4xl"
      }}
      secondary={{
        content: home[3].entry.second!
      }}
    />

    <Container
      className="grid grid-flow-row gap-3 max-[640px]:pb-100/20 min-[640px]:pb-100/5"
      primary={{
        content: home[4].entry.first,
        className: "font-extrabold text-center max-[640px]:text-2xl min-[640px]:text-4xl p-5"
      }}
      secondary={{
        content: () =>
          <div className="2xl:grid-flow-col 2xl:gap-4 xl:grid-flow-col xl:gap-4 lg:grid-flow-col lg:gap-4 md:grid-flow-col md:gap-4 sm:grid-flow-row grid grid-flow-row gap-2 m-auto w-auto">
            <div className="grid grid-flow-row gap-6 p-5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white h-fit">
              <BeginnerIcon className="fill-black bg-white w-12 h-12 rounded-lg p-2 dark:bg-gray-800 dark:fill-white" />
              <p>{home[4].entry.entries && home[4].entry.entries[0].text}</p>
            </div>
            <div className="grid grid-flow-row gap-6 p-5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white h-fit">
              <CourseIcon className="fill-black bg-white w-12 h-12 rounded-lg p-2 dark:bg-gray-800 dark:fill-white" />
              <p>{home[4].entry.entries && home[4].entry.entries[1].text}</p>
            </div>
            <div className="grid grid-flow-row gap-6 p-5 rounded-lg bg-gradient-to-r from-red-500 to-red-500 text-white h-fit">
              <ClockIcon className="fill-black bg-white w-12 h-12 rounded-lg p-2 dark:bg-gray-800 dark:fill-white" />
              <p>{home[4].entry.entries && home[4].entry.entries[2].text}</p>
            </div>
          </div>
      }}
    />

    <Container
      className="grid grid-flow-row gap-3 max-[640px]:pb-100/20 min-[640px]:pb-100/5"
      primary={{
        content: home[5].entry.first,
        className: "font-extrabold text-center max-[640px]:text-2xl min-[640px]:text-4xl p-5"
      }}
      secondary={{
        content: () =>
          <div className="2xl:grid-flow-col 2xl:gap-4 xl:grid-flow-col xl:gap-4 lg:grid-flow-col lg:gap-4 md:grid-flow-col md:gap-4 sm:grid-flow-row grid grid-flow-row gap-2 m-auto w-auto">
            <div className="grid grid-flow-row gap-6 p-5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white h-fit">
              <ProductIcon className="fill-black bg-white w-12 h-12 rounded-lg p-2 dark:bg-gray-800 dark:fill-white" />
              <p>{home[5]?.entry?.entries?.[0]?.text}</p>
            </div>
            <div className="grid grid-flow-row gap-6 p-5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white h-fit">
              <BuildingIcon className="fill-black bg-white w-12 h-12 rounded-lg p-2 dark:bg-gray-800 dark:fill-white" />
              <p>{home[5]?.entry?.entries?.[1]?.text}</p>
            </div>
            <div className="grid grid-flow-row gap-6 p-5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white h-fit">
              <MoneyIcon className="fill-black bg-white w-12 h-12 rounded-lg p-2 dark:bg-gray-800 dark:fill-white" />
              <p>{home[5]?.entry?.entries?.[2]?.text}</p>
            </div>
          </div>
      }}
    />

  </div>)
}