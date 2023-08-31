def menu_principal():
    valor_usuari = game.ask_for_number("Quina conversió vols fer? 1: F->C o 2: C->F",1)
    return valor_usuari

def llegir_valor(missatge, digits):
    valor_usuari = game.ask_for_number(missatge, digits)
    return valor_usuari

def convertir_f_c():
    temperatura = llegir_valor("Escriu la temperatura actual en fahrenheit", 3)
    return 5/9 * (temperatura - 32)

def convertir_c_f():
    temperatura = llegir_valor("Escriu la temperatura actual en celsius", 2)
    return temperatura * 9/5 + 32

def main():
    opcio = menu_principal()
    if opcio == 1:
        game.show_long_text("La temperatura és " + convertir_f_c() + "ºC", DialogLayout.BOTTOM)
    elif opcio == 2:
        game.show_long_text("La temperatura és " + convertir_c_f() + "ºF", DialogLayout.BOTTOM)
    else:
        game.show_long_text("Opció incorrecte", DialogLayout.BOTTOM)
        main()

main()