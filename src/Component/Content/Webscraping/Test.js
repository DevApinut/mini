import "dayjs/locale/th";
import Dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

Dayjs.extend(buddhistEra);

export default class newAdapter extends AdapterDayjs {
  constructor({ locale, formats, instance }) {
    super({ locale, formats, instance });
  }
  formatByString = (date, format) => {
    let newFormat = format.replace(/\bYYYY\b/g, "BBBB");
    // console.log(date, "date");
    // console.log(format, "format");
    // console.log(newFormat, "newFormat");
    // if (format === "YYYY") {
    //   format = "BBBB";
    // }
    // console.log(
    //   this.dayjs(date).format(newFormat),
    //   "return value with new format"
    // );
    return this.dayjs(date).format(newFormat);
  };
}