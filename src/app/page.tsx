import Image from 'next/image'

import cv from '../../public/assets/cv.png'
import profile from '../../public/assets/profileMVN.png'

export default function Home() {
  return (
    <main className="h-full mx-auto flex flex-col xl:flex-row xl:w-3/4">
      <div className="flex-1 px-8 flex flex-col gap-10 xl:gap-20">
        <header
          title="About_me"
          className="flex justify-between items-center h-20"
        >
          <h3 className="font-agrandir text-xs font-medium">ABOUT ME</h3>

          <nav>
            <ul className="w-20 flex justify-between items-center">
              <li>
                <a
                  href="http://www.linkedin.com/in/mateusvillanova/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#9ca3af"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                    />
                    <path
                      d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                      opacity=".05"
                    />
                    <path
                      d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                      opacity=".07"
                    />
                    <path
                      fill="#fff"
                      d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:villa1999@gmail.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#e0e0e0"
                      d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                    />
                    <path
                      fill="#d9d9d9"
                      d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                    />
                    <path
                      fill="#eee"
                      d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                    />
                    <path
                      fill="#e0e0e0"
                      d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                    />
                    <path
                      fill="#9ca3af"
                      d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                    />
                    <path
                      fill="#f5f5f5"
                      d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                    />
                    <path
                      fill="#9ca3af"
                      d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <Image src={cv} width={22} height={22} alt="CV icon" />
              </li>
            </ul>
          </nav>
        </header>

        <section
          title="Profile"
          className="flex flex-col text-center items-center gap-11 nano:flex-row nano:text-left"
        >
          <div className="aspect-square max-w-32 max-h-32 min-w-24 min-h-24 overflow-hidden rounded-2xl border-2 border-[#323232]">
            <Image
              title="Mateus Villa Nova"
              src={profile}
              width={1500}
              height={1832}
              alt="Mateus Villa Nova profile photo"
              className="object-cover"
            />
          </div>

          <p className="text-2xl tracking-wider leading-8">
            Welcome! <br />
            <span>
              I&#39;m{' '}
              <span
                title="Mateus Villa Nova"
                className="font-bold bg-gradient-to-tr from-indigo-500 to-purple-500 bg-clip-text text-transparent"
              >
                Mateus Villa Nova
              </span>
            </span>
          </p>
        </section>

        <div className="flex gap-10 flex-col sm:flex-row xl:flex-col xl:gap-20">
          <section title="Fun_Facts" className="flex-1">
            <header>
              <h3 className="title-agrandir">FUN FACTS:</h3>
            </header>

            <ul className="list-inside list-disc">
              <li>24 years old</li>
              <li>Graduated in administration</li>
              <li>I worked as a real estate agent</li>
              <li>I took up programming in 2022.</li>
            </ul>
          </section>

          <section title="Summary" className="flex-1">
            <header>
              <h3 className="title-agrandir">SUMMARY</h3>
            </header>

            <p>
              As a web developer, I am always seeking new knowledge and looking
              to improve my skills. I participated in company projects such as{' '}
              <a
                title="Lab Yes!"
                href="https://www.linkedin.com/company/lab-yes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold"
              >
                Lab Yes!
              </a>
              , where the focus was on volunteerism, during which time I was
              able to develop my teamwork skills using agile methodologies.
              Currently, my focus is on personal growth, accompanied by good
              music.
            </p>
          </section>
        </div>

        <footer title="Contact">
          <header>
            <h3 className="title-agrandir">CONTACT</h3>
          </header>

          <p>
            If you want to chat with me, feel free to hit me up on{' '}
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/mateusvillanova/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500"
            >
              LinkedIn
            </a>{' '}
            or send an email to{' '}
            <a
              title="Gmail"
              href="mailto:villa1999nova@gmail.com"
              className="text-pink-600"
            >
              villa1999nova@gmail.com
            </a>
            .
          </p>
        </footer>
      </div>
      <aside className="border-2 flex-[2] px-8 bg-[#121212]"></aside>
    </main>
  )
}
