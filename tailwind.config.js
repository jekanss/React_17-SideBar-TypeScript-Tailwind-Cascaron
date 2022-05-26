module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hamburguesa': "url('./assets/img/hamburguesas.JPG')",        
        'hotdog': "url('./assets/img/hotdogs.JPG')",        
        'pizza': "url('./assets/img/pizza.JPG')",        
        'bebida': "url('./assets/img/bebida.JPG')",        
      },
      animation:{        
        'fadeIn': 'fadeIn 600ms linear',         
      },
      keyframes:{       
        fadeIn:{
          'from': {  opacity: 0 },        
          'to': {  opacity: 1 }   
        },       
        
      },
    },
  },
  variants: { 
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],    
    fontSize: ['responsive', 'hover', 'group-hover'],    
    transform: ['responsive', 'hover', 'group-hover'],    
    scale: ['responsive', 'hover', 'group-hover'] ,   
    margin: ['responsive', 'hover', 'group-hover'] ,   
    padding: ['responsive', 'hover', 'group-hover'],   
    visibility: ['responsive', 'hover', 'group-hover'],
    display:['responsive', 'hover', 'group-hover'],
    borderWidth: ['hover', 'focus', 'group-hover'],
    aspectRatio: ['responsive', 'hover', 'group-hover'],
    active: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}