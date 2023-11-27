export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-20 bg-slate-700 grid place-items-center text-white">
      <p className="text-xs md:text-sm flex gap-1">
        <span className="text-emerald-300">&copy;</span>
        <span className="text-yellow-200"> {year} </span>
        <span className="text-emerald-200">The Speed Calculator.</span>
        <span className="text-sky-300">All rights reserved | Designed by</span>
        <span className="text-emerald-400 tracking-widest">MKDesigns</span>
      </p>
    </footer>
  );
}
