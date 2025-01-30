const isBot = (userAgent) => {
  if (!userAgent) return true;

  const botPatterns = [
    /bot/i,
    /spider/i,
    /crawl/i,
    /APIs-Google/i,
    /AdsBot/i,
    /Googlebot/i,
    /mediapartners/i,
    /Chrome-Lighthouse/i,
    /HeadlessChrome/i,
    /pingdom/i,
    /lighthouse/i
  ];

  return botPatterns.some(pattern => userAgent.match(pattern));
};

const getCountryFlag = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data.country_code ? `${String.fromCodePoint(...data.country_code.toUpperCase().split("").map(char => char.charCodeAt(0) + 127397))} ` : "";
  } catch (error) {
    return "";
  }
};

const pushNotification = async (content = null) => {
  if (
    process.env.NODE_ENV !== "development" ||
    typeof window === "undefined" ||
    typeof navigator === "undefined" ||
    isBot(navigator.userAgent)
  )
    return null;

  const flag = await getCountryFlag();
  const message = content || `New visitor from ${flag} ${window.location.pathname}`;

  const formData = new FormData();
  formData.append("token", "aemcmnw4j9zgtctjnjwyk8yuqkbhtq");
  formData.append("user", "utzmzf1gnfymdrmrw3exk9i77r6k3m");
  formData.append("message", message);

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://api.pushover.net/1/messages.json");
  xmlhttp.send(formData);
};

export default pushNotification;
