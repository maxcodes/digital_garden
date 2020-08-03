const PushNotification = () => {
  if (
    process.env.NODE_ENV === "development" ||
    typeof window === "undefined" ||
    typeof navigator === "undefined" ||
    navigator.userAgent.match(/bot|spider/i)
  )
    return null;

  const payload = {
    secretUser: "max",
    userId: "max",
    secretKey:
      "05LMZF06R0J1AD7JYLZ5GYHVTW6QGNODSAMA22U4CHRDDUWI63T4SA2TUVHBMDLPLS043O6F48ABXODL2EV5IJUUGUVK37JWDKBT",
    callToAction: `New garden-curious visitor! ${window.location.pathname}`
  };

  const stringified = JSON.stringify(payload);
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://api.spontit.com/v2/push");
  xmlhttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded;charset=UTF-8"
  );
  xmlhttp.send(stringified);

  return null;
};
export default PushNotification;
