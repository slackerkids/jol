import { signIn } from "@/auth";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-white min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <Image
          src="/images/hero.jpg"
          alt="Jol"
          width={400}
          height={400}
          className="rounded-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Добро пожаловать в{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Jol
            </span>
          </h1>
          <p className="py-6">Туристический сервис, который поможет вам сделать свою поездку незабываемой.</p>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <button type="submit" className="btn btn-primary ">
              Начать свою поездку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
