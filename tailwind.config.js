module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xsm: "320",
        Msm: "375",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1440px",
      },
      borderRadius: {
        small: "3px",
        btn: "20px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          dark: "#031e40",
          light: "#145DA0",
          lighter: "#B6D1D4",
        },
        green: {
          light: "#e0ebe8",
          dark: "#629a8a",
        },
        dark: {
          textColor: "#0a2342",
          shadow: "#54657b",
          modalShadow: "#54657bcc",
          label: "#020E13",
          grey1: "#f5f5f5",
          white1: "#fffaf1",
          body: "#f6f7f9",
          transparent: "transparent!important",
        },
        orange: {
          light: "#FFFAF1",
          bold: " #E2972E",
        },
        grey: {
          light: "#CED3D9",
        },
        red: {
          light: "#FFFAF1",
        },
      },
      height: {
        55: "552px",
        t10: "10px",
        t4: "2.4rem",
        15: "60px",
      },

      width: {
        86: "86%",
        71: "71%",
        form: "380px",
      },
      gridTemplateColumns: {
        gridTemp: "130px 1fr",
        gridMax: "max-content 1fr",
        gridMax2: "1fr max-content",
        gridRepeat: "repeat(2, minmax(0, max-content))",
      },
      padding: {
        pleft: "3rem!important",
        p4: ".4rem",
      },

      boxShadow: {
        ct: "0 0px 10px 0 #54657b",
        modal: "0 0 30px 0 #0a2342",
        cus: "0 0 5px 0 #d6dae0",
        clientbox: "0 0 10px 0 #d6dae0",
      },

      fontFamily: {
        bodyCommon: ["Merriweather Sans"],
        primaryFont: ["Merriweather"],
        OpenSans: ["Open Sans"],
      },
      fontSize: {
        f1: "10px",
      },
      zIndex: {
        1: "-1",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
