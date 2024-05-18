"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";

const citys = [
  { id: 1, name: "İstanbul" },
  { id: 2, name: "Ankara" },
  { id: 3, name: "Tekirdağ" },
  { id: 4, name: "İzmir" },
  { id: 5, name: "Eskişehir" },
  { id: 6, name: "Afyonkarahisar " },
  { id: 7, name: "Bursa" },
];

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  const [selectedFrom, setSelectedFrom] = useState(citys[0]);
  const [selectedTo, setSelectedTo] = useState(citys[1]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const filteredFrom =
    query === ""
      ? citys
      : citys.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredTo =
    query === ""
      ? citys
      : citys.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const changeCity = () => {
    const temp = selectedFrom;
    setSelectedFrom(selectedTo);
    setSelectedTo(temp);
  };

  return (
    <>
      <div className="flex justify-center sm:px-12 px-4 bg-[url('https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover">
        <div className="grid grid-cols-12 gap-3 max-w-7xl justify-center py-56">
          <div className="flex lg:col-span-6 col-span-12">
            {/* combobox */}
            <div>
              <Combobox value={selectedFrom} onChange={setSelectedFrom}>
                <div className="relative">
                  <Combobox.Label className="text-white">
                    Nereden
                  </Combobox.Label>

                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-4 pl-3 pr-10 text-lg leading-5 text-gray-900 focus:ring-0 h-full"
                      displayValue={(city: { name: string }) => city.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredFrom.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredFrom.map((city) => (
                          <Combobox.Option
                            key={city.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={city}
                          >
                            {({ active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedFrom
                                      ? "font-medium "
                                      : "font-normal"
                                  }`}
                                >
                                  {city.name}
                                </span>
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            {/* change button */}
            <button className="mt-5" onClick={() => changeCity()}>
              <svg
                className="w-10 h-10 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                />
              </svg>
            </button>
            {/* combobox */}
            <div>
              <Combobox value={selectedTo} onChange={setSelectedTo}>
                <div className="relative">
                  <Combobox.Label className="text-white">Nereye</Combobox.Label>

                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-4 pl-3 pr-10 text-lg leading-5 text-gray-900 focus:ring-0 h-full"
                      displayValue={(city: { name: string }) => city.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredTo.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredTo.map((city) => (
                          <Combobox.Option
                            key={city.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={city}
                          >
                            {({ active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedFrom ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {city.name}
                                </span>
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
          </div>
          {/* datepicker */}
          <div className="lg:col-span-3 col-span-6">
            <label className="text-white">Gidiş Tarihi</label>
            <Datepicker
              i18n={"tr"}
              asSingle={true}
              value={value}
              onChange={handleValueChange}
              inputClassName="w-full border-none py-4 pl-3 pr-10 text-lg leading-5 h-full text-gray-900 focus:ring-0 rounded-md"
            />
          </div>
          {/* Send button */}
          <button
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none mt-6 lg:col-span-3 col-span-6"
            type="button"
          >
            Otobüs Bileti Bul
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative isolate pt-14">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            />
          </svg>
          <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-full text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Sana özel kampanyalar, fırsatlar ve daha fazlası Biletim
                uygulamasında!
              </h1>
              <div className="flex items-center justify-start gap-4 mt-8 ">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-indigo-900 rounded-lg sm:w-auto hover:bg-indigo-800 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 sm:w-10 sm:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
                  </svg>

                  <div className="ml-2.5">
                    <span className="block text-xs font-normal leading-none">
                      Download on
                    </span>
                    <span className="block text-lg font-bold leading-tight">
                      AppStore
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-indigo-900 rounded-lg sm:w-auto hover:bg-indigo-800 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 sm:w-10 sm:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path>
                  </svg>

                  <div className="ml-2.5">
                    <span className="block text-xs font-normal leading-none">
                      Download on
                    </span>
                    <span className="block text-lg font-bold leading-tight">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg
                viewBox="0 0 366 729"
                role="img"
                className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <img
                    src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png"
                    alt=""
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sevdiklerine kavuşmak için yola çık!
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Sevdiklerine ulaşmak için otobüs bileti satın alma uygulamamızı
                kullanabilirsiniz. Artık sevdiklerinizle daha kolay bir şekilde
                buluşabilir, onlarla keyifli zamanlar geçirebilirsiniz.
                Uygulamamızda birbirinden farklı seçenekler arasından
                istediğiniz tarih ve saatte otobüs biletinizi satın
                alabilirsiniz. Ayrıca uygulamamızda özel kampanyalar ve
                fırsatlar da bulunmaktadır. Sana özel indirimlerle sevdiklerine
                ulaşmanın keyfini çıkarabilirsin.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
