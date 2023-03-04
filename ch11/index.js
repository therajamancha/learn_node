const dns = require("dns");

dns.lookup("geekyshows.com", (error, address,family) => {
  if (error) {
    throw error;
  } else {
    console.log(address);
    console.log(family);
  }
});
dns.resolve("geekyshows.com", (error, records) => {
  if (error) {
    throw error;
  } else {
    console.log(records);
  }
});

