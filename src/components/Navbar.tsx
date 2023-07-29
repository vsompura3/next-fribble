import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'

export default function Navbar() {
  const session = null
  return (
    <nav className="navbar flexBetween">
      <div className="flex-1 gap-10 flexStart">
        <Link href="/">
          <Image src="/logo.svg" alt="flexibbble" width={100} height={40} />
        </Link>
        <ul className="hidden xl:flex gap-4 text-small">
          {NavLinks.map(link => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter">
        {session ? (
          <>
            User Photo <Link href="create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}
