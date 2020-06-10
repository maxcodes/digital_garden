require "net/http"

payload = {
  secretUser: "max",
  userId: "max",
  secretKey: "05LMZF06R0J1AD7JYLZ5GYHVTW6QGNODSAMA22U4CHRDDUWI63T4SA2TUVHBMDLPLS043O6F48ABXODL2EV5IJUUGUVK37JWDKBT",
  callToAction: "New website visitor!",
}

uri = URI.parse("https://api.spontit.com/v2/push")
response = Net::HTTP.post_form(uri, payload)
JSON.parse(response)

