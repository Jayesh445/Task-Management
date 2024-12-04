const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.toLocaleDateString("default", { month: "long" });
const year = currentDate.getFullYear();
export const formattedDate = `${date} ${month} ${year}`;
