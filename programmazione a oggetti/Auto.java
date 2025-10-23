import java.util.Scanner;

public class Auto {
    // attributi
    String marca;
    String modello;
    String alimentazione;
    int serbatoio;
    int velocita;
    int anno;
    int annoAttuale = 2025;
    boolean autoStorica;

    // stampa dettagli
    public void stampaDettagli() {
        System.out.println("L'automobile " + marca + " " + modello +
                           " viaggia ad una velocità di " + velocita + " km/h");
    }

    // controllo se è auto storica
    public boolean autoStorica() {
        if (annoAttuale - anno >= 25) {
            System.out.println("La tua è un'auto storica");
            autoStorica = true;
        } else {
            System.out.println("La tua auto non è storica");
            autoStorica = false;
        }
        return autoStorica;
    }

    // simulazione consumo serbatoio
    public void velocitaeSerbatoio(int km) {
        int consumo = km / 20; // ogni 20 km = 1 unità carburante

        if (consumo > serbatoio) {
            System.out.println("Non hai abbastanza carburante per percorrere " + km + " km.");
            System.out.println("Carburante disponibile: " + serbatoio);
        } else {
            serbatoio -= consumo;
            velocita += 10;
            System.out.println("Hai percorso " + km + " km. Velocità attuale: " + velocita +
                               " km/h, Carburante rimanente: " + serbatoio);
        }
    }

    // accelera
    public void accelera() {
        if (serbatoio > 0) {
            velocita += 10;
            serbatoio--;
            System.out.println("Hai accelerato. Velocità: " + velocita +
                               " km/h, Carburante: " + serbatoio);
        } else {
            System.out.println("Carburante esaurito! Non puoi accelerare.");
        }
    }

    // frena
    public void frena() {
        if (velocita > 0) {
            velocita -= 10;
        }
        System.out.println("Hai frenato. Velocità attuale: " + velocita + " km/h");
    }

    // menu interattivo
    public void ControlloAuto() {
        Scanner scanner = new Scanner(System.in);
        int scelta;

        do { 
            System.out.println("\n-- Menu --");
            System.out.println("1. Accelera");
            System.out.println("2. Frena");
            System.out.println("3. Esci dal Menu");
            
            System.out.print("Inserisci la tua scelta: ");
            scelta = scanner.nextInt();

            switch (scelta) {
                case 1:
                    accelera();
                    break;
                case 2:
                    frena();
                    break;
                case 3:
                    System.out.println("Uscita dalla modalità di guida.");
                    break;
                default:
                    System.out.println("Scelta non valida.");
            }
        } while (scelta != 3 && serbatoio > 0);

        scanner.close();  
    }
}
