export const styles = {
  container: "container mx-auto px-4",
  section: "py-20",
  sectionHeader: "text-center mb-16",
  gradientLine: "h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full",
  heading: {
    base: "inline-block text-4xl md:text-5xl font-bold mb-4 relative text-white",
    underline: "absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"
  },
  button: {
    primary: "px-6 py-3 bg-[#3BC4C4] text-white font-medium hover:bg-[#2aa3a3] transition-colors rounded-full",
    secondary: "px-4 py-2 bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors rounded-full"
  },
  card: {
    base: "bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
    hover: "group-hover:scale-110 transition-transform duration-700"
  },
  flexCenter: "flex items-center justify-center",
  textGradient: "bg-gradient-to-r from-[#3BC4C4] to-[#2aa3a3] bg-clip-text text-transparent"
}; 