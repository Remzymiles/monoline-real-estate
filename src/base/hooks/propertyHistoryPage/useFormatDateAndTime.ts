export const useFormatDateAndTime = () => {
  //
  const formatDateTime = (dateString?: string): string => {
    if (!dateString) return "Invalid date";

    const date = new Date(dateString);
    //
    const offset = date.getTimezoneOffset() * 60000;
    //
    const localDate = new Date(date.getTime() - offset);
    //
    const formattedDate = localDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = localDate.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${formattedDate} ${formattedTime}`;
  };
  //
  return { formatDateTime };
};
