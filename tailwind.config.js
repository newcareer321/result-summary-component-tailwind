module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      boxShadow: {
        'custom-bottom-right': '10px 10px 20px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        'sm': '600px',     // Custom Mobile Breakpoint
        'md': '768px',     // Custom Tablet Breakpoint
        'lg': '1024px',    // Custom Laptop/Desktop Breakpoint
        'xl': '1440px',   // Custom Desktop Breakpoint
        // 'widescreen': '1440px' // Custom Large Screens
      },
      colors: {
         LightRed: 'hsl(0, 100%, 67%)',
         Lightred: 'hsl(0, 100%, 90%)', // Extremely light shade of LightRed
         OrangeyYellow: 'hsl(39, 100%, 56%)',
         Orangeyyellow: 'hsl(39, 100%, 90%)', // Extremely light shade of OrangeyYellow

         GreenTeal: 'hsl(166, 100%, 37%)',
         Greenteal: 'hsl(166, 100%, 90%)', // Extremely light shade of GreenTeal

         CobaltBlue: 'hsl(234, 85%, 45%)',

         /////////////Grident
         LightSlateBlue : 'hsl(252, 100%, 67%)',
         LightRoyalBlue : 'hsl(241, 81%, 54%)',
         VioletBlue : 'hsla(256, 72%, 46%, 1)',
         Violetblue: 'hsla(256, 72%, 90%, 1)', // Extremely light shade of VioletBlue
         PersianBlue : 'hsla(241, 72%, 46%, 0)',

         backgroundImage: {
          'custom-gradient': `
            linear-gradient(
              to right,
              hsl(252, 100%, 67%),        /* LightSlateBlue */
              hsl(241, 81%, 54%),         /* LightRoyalBlue */
              hsla(256, 72%, 46%, 1),     /* VioletBlue */
              hsla(241, 72%, 46%, 0)      /* PersianBlue */
            )
          `,
        },

         //// Neutral

         white: 'hsl(0, 0%, 100%)',
         paleBlue: 'hsl(221, 100%, 96%)',
         lightLavender: 'hsl(241, 100%, 89%)',
         darkGrayBlue: 'hsl(224, 30%, 27%)',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'], // Adding Hanken Grotesk as the default sans font
      },
      fontWeight: {
        medium: '500', // Custom weight for Hanken Grotesk 500
        bold: '700',   // Custom weight for Hanken Grotesk 700
        extraBold: '800', // Custom weight for Hanken Grotesk 800
      },
    },
  },
  // plugins: [],
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
