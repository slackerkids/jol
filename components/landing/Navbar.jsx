import { signIn } from "@/auth";
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#cta">CTA</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <span className="font-bold text-3xl bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">Jol</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#cta">CTA</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <button type="submit" className="btn btn-primary ">
              Войти с Google
            </button>
          </form>
      </div>
    </div>
  )
}