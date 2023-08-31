function menu_principal(): number {
    let valor_usuari = game.askForNumber("Quina conversió vols fer? 1: F->C o 2: C->F", 1)
    return valor_usuari
}

function llegir_valor(missatge: string, digits: number): number {
    let valor_usuari = game.askForNumber(missatge, digits)
    return valor_usuari
}

function convertir_f_c(): number {
    let temperatura = llegir_valor("Escriu la temperatura actual en fahrenheit", 3)
    return 5 / 9 * (temperatura - 32)
}

function convertir_c_f() {
    let temperatura = llegir_valor("Escriu la temperatura actual en celsius", 2)
    return temperatura * 9 / 5 + 32
}

function main() {
    let opcio = menu_principal()
    if (opcio == 1) {
        game.showLongText("La temperatura és " + convertir_f_c() + "ºC", DialogLayout.Bottom)
    } else if (opcio == 2) {
        game.showLongText("La temperatura és " + convertir_c_f() + "ºF", DialogLayout.Bottom)
    } else {
        game.showLongText("Opció incorrecte", DialogLayout.Bottom)
        main()
    }
    
}

main()
