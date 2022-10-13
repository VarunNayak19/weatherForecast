import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const daysInAWeek = new Date().getDay();
  const forecastDays = weekDays.slice(daysInAWeek, weekDays.length).concat(weekDays.slice(0, daysInAWeek));
    console.log(forecastDays);

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="dailyItem">
                  <img
                    alt="weather"
                    className="smallIcon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="minMaxTemp">{Math.round(item.main.temp_min)}&deg;C / {Math.round(item.main.temp_max)}&deg;C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="dailyDetailsGrid">
                    <div className="dailyDetailsGridItem">
                        <label className="dailyDetailsGridItemLabel">Pressure:</label>
                        <label className="dailyDetailsGridItemValue">{item.main.pressure} Pa</label>
                    </div>
                    <div className="dailyDetailsGridItem">
                        <label className="dailyDetailsGridItemLabel">Humidity:</label>
                        <label className="dailyDetailsGridItemValue">{item.main.humidity}%</label>
                    </div>
                    <div className="dailyDetailsGridItem">
                        <label className="dailyDetailsGridItemLabel">Clouds:</label>
                        <label className="dailyDetailsGridItemValue">{item.clouds.all}</label>
                    </div>
                    <div className="dailyDetailsGridItem">
                        <label className="dailyDetailsGridItemLabel">Wind:</label>
                        <label className="dailyDetailsGridItemValue">{item.wind.speed} m/s</label>
                    </div>
                    <div className="dailyDetailsGridItem">
                        <label className="dailyDetailsGridItemLabel">Sea Level:</label>
                        <label className="dailyDetailsGridItemValue">{item.main.sea_level} m</label>
                    </div>
                    <div className="dailyDetailsGridItem">
                        <label className="dailyDetailsGridItemLabel">Feels Like:</label>
                        <label className="dailyDetailsGridItemValue">{Math.round(item.main.feels_like)}&deg;C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
