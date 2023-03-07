import Image, { StaticImageData } from "next/image";

export default function Container({
  bg = "white",
  className,
  primary,
  secondary,
  images
}: {
  bg?: string;
  className: string,
  primary: {
    className?: string,
    content: string | (() => JSX.Element),
  };
  secondary: {
    className?: string,
    content: string | (() => JSX.Element),
  };
  images?: {
    src: StaticImageData,
    alt: string
  }[]
}) {

  const containerClassName = `${bg} ${bg !== "white" && "rounded-lg"} ${bg !== "white" && "shadow-lg"} ${className}`

  const _primary = typeof primary.content === "string" ?
    primary.content :
    <primary.content />

  const _secondary = typeof secondary.content === "string" ?
    secondary.content :
    <secondary.content />

  return (
    <div>
      {images && <div className={containerClassName}>
        <div className="grid grid-flow-row gap-4 p-6">
          <p className={primary.className}>{_primary}</p>
          <p className={secondary.className}>{_secondary}</p>
        </div>
        <div className="grid gap-2 sm:grid-flow-row md:grid-flow-col lg:grid-flow-col justify-center items-center">
          <div className="grid grid-flow-row gap-y-2">
            <Image
              src={images[0].src}
              className='city'
              alt={images[0].alt}
            />
            <Image
              src={images[1].src}
              className='city'
              alt={images[1].alt}
            />
          </div>
          <div className="grid grid-flow-row gap-y-2">
            <Image
              src={images[2].src}
              className='city'
              alt={images[2].alt}
            />
            <Image
              src={images[3].src}
              className='city'
              alt={images[3].alt}
            />
          </div>
        </div></div>}

      {
        !images ? (
          <div className={containerClassName}>
            <p className={primary.className}>
              {_primary}
            </p>
            <p className={secondary.className}>
              {_secondary}
            </p>
          </div>
        ) : !images ? (
          <div className={containerClassName}>
            <p className={primary.className}>
              {typeof primary.content === "string" ?
                primary.content :
                <primary.content />}
            </p>
            <p className={secondary.className}>
              {_secondary}
            </p>
          </div>
        )
          : null}
    </div >
  )
}


