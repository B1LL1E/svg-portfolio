export function Hero(){
    return(
        <section className="w-full max-w-4xl mb-24 mt-12 text-center md:text-left">
        {/* Imię i Nazwisko / Rola */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
          JAN KOWALSKI <span className="text-neutral-500">EDITOR</span>
        </h1>
        
        {/* Krótki opis / Bio */}
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Montaż to nie tylko łączenie klipów. To rytm, emocje i narracja.
          Specjalizuję się w dynamicznych formach reklamowych i teledyskach, 
          gdzie każda klatka ma znaczenie.
        </p>
        </section>
    );
}