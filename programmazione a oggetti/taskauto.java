public class taskauto {
    public static void main(String[] args) {
        System.out.println("-");



    Auto a1 = new Auto();
    a1.marca = "Fiat";
    a1.modello = "Panda";
    a1.anno = 1990;
    a1.velocita = 60;
    a1.stampaDettagli();
    a1.autoStorica();

    Auto a2 = new Auto();
    a2.marca = "Audi";
    a2.modello = "Suv";
    a2.anno = 2005;
    a2.velocita = 100;
    a2.alimentazione = "benzina";
    a2.serbatoio = 5;
    a2.velocitaeSerbatoio(150);
    a2.ControlloAuto();
 }
}
