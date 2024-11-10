import { signOut } from "@/auth";
import Link from 'next/link';

export default function DashboardNavbar() {
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="navbar-start">
        <Link href="/dashboard" className="btn btn-ghost text-xl">
          <span className="font-bold text-2xl bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            Jol
          </span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/dashboard">Места</Link></li>
          <li><Link href="/dashboard/favorites">Избранное</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="bg-primary text-white w-full h-full flex items-center justify-center">
                U
              </div>
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/dashboard/profile">Профиль</Link></li>
            <li>
              <form
                action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
              >
                <button type="submit" className="w-full text-left">
                  Выйти
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}