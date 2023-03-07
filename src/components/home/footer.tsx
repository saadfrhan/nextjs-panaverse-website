import {
  AiFillGithub as GitHubIcon,
  AiOutlineTwitter as TwitterIcon
} from 'react-icons/ai'

export default function Footer() {
  return (
    <div
      className="grid grid-flow-row items-center justify-center gap-2 bg-gray-200 dark:bg-gray-600 p-5 rounded-lg m-2 min-[640px]:m-6 bottom-0 shadow-lg"
    >
      <p>Made by Saad Farhan</p>
      <div className="flex justify-center items-center gap-2">
        <a href="https://github.com/saadfrhan">
          <GitHubIcon className='w-10 h-10 transition-all hover:fill-gray-400' />
        </a>
        <a href="https://twitter.com/@IamSaadFarhan">
          <TwitterIcon className='w-10 h-10 transition-all hover:fill-gray-400' />
        </a>
      </div>
    </div>
  )
}
