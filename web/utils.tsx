export const isMobile = (request: { headers: any[] }) => {
  console.log("request", request);
  let isMobileView = (
    request ? request.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return Boolean(isMobileView);
};
