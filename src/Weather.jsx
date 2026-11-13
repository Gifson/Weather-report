import axios from "axios";
import { useState } from "react";

function Weather() {

const [city,setcity] = useState("")

const [weather,setweather] = useState("")
const [temp,settemp] = useState("")
const [desc,setdesc] = useState("")

function handleCity(evt)
{
  setcity(evt.target.value)
}

function getWeather()
{
  var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=665151e72bd9b71419f266ad1d622f4c`)

  weatherdata.then(function(success){
    console.log(success.data)
    setweather(success.data.weather[0].main)
    setdesc(success.data.weather[0].description)
    settemp(success.data.main.temp)
  })
}


  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 font-sans text-slate-900">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
        <header className="mb-7 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
            <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Weather report</h1>
            <p className="mt-1 text-sm text-slate-500">Check the weather in your city</p>
          </div>
        </header>

        <form className="space-y-3">
          <label className="block text-sm font-medium text-slate-700" htmlFor="city">
            City name
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input onChange={handleCity}
              className="h-12 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              id="city"
              placeholder="e.g. London"
              type="text"
            />
            <button onClick={getWeather}
              className="h-12 rounded-lg bg-sky-600 px-5 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
              type="button"
            >
              Get report
            </button>
          </div>
        </form>

        <div className="mt-7 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-slate-50 px-4">
          <div className="flex items-center justify-between py-4">
            <p className="text-sm text-slate-500">Weather</p>
            <p className="text-sm font-medium text-slate-800">{weather}</p>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="text-sm text-slate-500">Temperature</p>
            <p className="text-sm font-medium text-slate-800">{temp}</p>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="text-sm text-slate-500">Description</p>
            <p className="text-sm font-medium text-slate-800">{desc}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Weather;
