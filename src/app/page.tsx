"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Datepicker from "react-tailwindcss-datepicker";

const citys = [
  { id: 1, name: "İstanbul" },
  { id: 2, name: "Ankara" },
  { id: 3, name: "Tekirdağ" },
  { id: 4, name: "İzmir" },
  { id: 5, name: "Eskişehir" },
  { id: 6, name: "Afyonkarahisar" },
  { id: 7, name: "Bursa" },
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
      <div className="flex justify-center sm:px-12 px-4 bg-[url('https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover">
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
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={city}
                          >
                            {({ active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedTo ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {city.name}
                                </span>
                                {selectedTo ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
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
    </>
  );
}
