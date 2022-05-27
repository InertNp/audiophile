const sizes = {
  mobileL: "465px",
  tablet: "768px",// this is for small laptop but i save it as tablet
  laptopL: "1440px",
//   desktop: "2560px",
};

export const devices = {
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(max-width: ${sizes.desktop})`,
};
