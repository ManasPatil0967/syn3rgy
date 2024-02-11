import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] items-center justify-center">
      <nav className="flex flex-col h-72 items-center justify-center gap-2 px-4 text-center md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
        <Link className="flex items-center space-x-2" href="#title">
          <SquareIcon className="h-6 w-6" />
          <span className="text-xl font-bold tracking-tighter">
            SYN3RGY
          </span>
        </Link>
        <div className="flex flex-col gap-1 md:flex-row md:gap-2 lg:gap-4 xl:gap-2">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#timeline">
            Timeline
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#prizes">
            Prizes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#sponsors">
            Sponsors
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact Us
          </Link>
        </div>
      </nav>
      <section id="title" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">SYN3RGY</h1>
            <p className="max-w-[700px] text-lg/relaxed md:text-base/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              A Hackathon for the future. Let your imagination run wild.
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Hackathon</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The most innovative minds come together to build the future. Are you ready to showcase your skills?
            </p>
          </div>
        </div>
      </section>
      <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Timeline</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the hackathon of tomorrow. Let your imagination run wild.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-2">
              <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <div className="p-4 grid gap-2 text-center">
                  <span className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400">Starts</span>
                  <h3 className="font-bold">Opening Ceremony</h3>
                  <time className="text-sm font-medium" dateTime="2022-08-20T09:00">
                    August 20, 2022
                  </time>
                  <time className="text-sm font-medium" dateTime="09:00">
                    9:00 AM
                  </time>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <div className="p-4 grid gap-2 text-center">
                  <span className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400">Ends</span>
                  <h3 className="font-bold">Hacking</h3>
                  <time className="text-sm font-medium" dateTime="2022-08-20T09:00">
                    August 20, 2022
                  </time>
                  <time className="text-sm font-medium" dateTime="09:00">
                    9:00 AM
                  </time>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <div className="p-4 grid gap-2 text-center">
                  <span className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400">Starts</span>
                  <h3 className="font-bold">Hacking</h3>
                  <time className="text-sm font-medium" dateTime="2022-08-20T09:00">
                    August 20, 2022
                  </time>
                  <time className="text-sm font-medium" dateTime="09:00">
                    9:00 AM
                  </time>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <div className="p-4 grid gap-2 text-center">
                  <span className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400">Ends</span>
                  <h3 className="font-bold">Hacking</h3>
                  <time className="text-sm font-medium" dateTime="2022-08-20T09:00">
                    August 20, 2022
                  </time>
                  <time className="text-sm font-medium" dateTime="09:00">
                    9:00 AM
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="prizes" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prizes</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We have some amazing prizes for the winners. Stay tuned for more information.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4 grid gap-2 text-center">
                <img
                  alt="Prize"
                  className="mx-auto rounded-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="space-y-1">
                  <h3 className="font-bold">First Prize</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The winners will receive a cash prize of $10,000.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4 grid gap-2 text-center">
                <img
                  alt="Prize"
                  className="mx-auto rounded-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="space-y-1">
                  <h3 className="font-bold">Second Prize</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The winners will receive a cash prize of $5,000.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4 grid gap-2 text-center">
                <img
                  alt="Prize"
                  className="mx-auto rounded-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="space-y-1">
                  <h3 className="font-bold">Third Prize</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The winners will receive a cash prize of $2,000.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4 grid gap-2 text-center">
                <img
                  alt="Prize"
                  className="mx-auto rounded-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="space-y-1">
                  <h3 className="font-bold">Track Prize 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of the track prize.</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4 grid gap-2 text-center">
                <img
                  alt="Prize"
                  className="mx-auto rounded-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="space-y-1">
                  <h3 className="font-bold">Track Prize 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of the track prize.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sponsors</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We would like to thank our sponsors for their support.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 md:grid-cols-3 lg:gap-10">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Us</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}
