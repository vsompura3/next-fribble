import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer flexStart">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="./logo-purple.svg"
            alt="flexibbble"
            width={100}
            height={40}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibbble is the world’s leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
      </div>
    </footer>
  )
}
