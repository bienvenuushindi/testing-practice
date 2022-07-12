function capitalizeString(str) {
  const lower = str.toLowerCase();
  return str[0].toUpperCase() + lower.slice(1);
}

module.exports=capitalizeString;