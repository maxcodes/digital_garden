const pushNotification = (content = null) => {
  if (
    process.env.NODE_ENV === "development" ||
    typeof window === "undefined" ||
    typeof navigator === "undefined" ||
    navigator.userAgent.match(/bot|spider/i)
  )
    return null;

  const payload = {
    pushContent: content || `New garden-curious visitor! ${window.location.pathname}`
  };

  const stringified = JSON.stringify(payload);
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://api.spontit.com/v3/push");
  xmlhttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded;charset=UTF-8"
  );
  xmlhttp.setRequestHeader(
    "X-Authorization",
    "G1M5OXZ7NWWK9OZKO1TQBMJGPH3O2JHAUX6Q26TDFH12ZWGZE4B2T4N27WDGN53ZS4R87LFFVS33B6HF30XPZN4YT6UBGFPI5TVD",
  );
  xmlhttp.setRequestHeader(
    "X-UserId",
    "jovenmaiz",
  );
  xmlhttp.send(stringified);
};
export default pushNotification;
