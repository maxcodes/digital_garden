const pushNotification = (content = null) => {
  if (
    process.env.NODE_ENV === "development" ||
    typeof window === "undefined" ||
    typeof navigator === "undefined" ||
    navigator.userAgent.match(/bot|spider/i)
  )
    return null;

  const message = content || `New garden-curious visitor! ${window.location.pathname}`

  const formData = new FormData();
  formData.append("token", "aemcmnw4j9zgtctjnjwyk8yuqkbhtq");
  formData.append("user", "utzmzf1gnfymdrmrw3exk9i77r6k3m");
  formData.append("message", message);

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://api.pushover.net/1/messages.json");
  xmlhttp.send(formData);
};
export default pushNotification;
