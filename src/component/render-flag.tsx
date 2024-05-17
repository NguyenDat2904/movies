import { VN, US } from "country-flag-icons/react/3x2";

export function renderFlag(locale: string, check?: boolean) {
  let Flag;
  let country;
  switch (locale) {
    case "en":
      Flag = US;
      country = "English";
      break;
    case "vn":
      Flag = VN;
      country = "Việt Nam";
      break;

    default:
      Flag = VN;
      country = "Việt Nam";
  }

  return (
    <div className="flex items-center">
      <Flag className="h-4 w-4" title={country} />
      <span className={`ml-2 ${check ? "text-white" : ""} dark:white`}>
        {country}
      </span>
    </div>
  );
}
